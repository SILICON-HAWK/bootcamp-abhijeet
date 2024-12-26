import axios from "axios";

// Base URLs for the APIs
const OLS_API_BASE = "https://www.ebi.ac.uk/ols4/api";
const PUBMED_API_BASE = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils";

export interface DiseaseSearchResponse {
  response: {
    docs: Array<{
      id: string;
      label: string;
      description?: string[];
    }>;
  };
}

export interface DiseaseHierarchyResponse {
  _embedded: {
    terms: Array<{
      label: string;
      iri: string;
      description?: string[];
      obo_id?: string;
      ontology_name: string;
      _links: {
        parents?: { href: string };
        children?: { href: string };
      };
    }>;
  };
}

/**
 * Searches for diseases based on a query string.
 *
 * @param {string} query - The search term to query diseases.
 * @returns {Promise<any[]>} - An array of disease search results.
 */
export async function searchDiseases(query: string): Promise<any[]> {
  try {
    const response = await axios.get<DiseaseSearchResponse>(`${OLS_API_BASE}/search`, {
      params: {
        q: query,
        ontology: "efo,mondo",
        type: "class",
      },
    });
    return response.data.response.docs;
  } catch (error) {
    console.error("Error searching diseases:", error);
    throw new Error("Failed to search diseases. Please try again later.");
  }
}

/**
 * Retrieves the hierarchy (parents and children) of a disease term by its IRI.
 *
 * @param {string} iri - The IRI of the disease term.
 * @returns {Promise<any>} - The hierarchical information of the disease.
 */
export async function getDiseaseHierarchy(iri: string): Promise<any> {
  try {
    // Fetch the term details
    const termResponse = await axios.get<DiseaseHierarchyResponse>(`${OLS_API_BASE}/terms`, {
      params: { iri },
    });

    if (!termResponse.data._embedded?.terms?.[0]) {
      throw new Error("Term not found");
    }

    const term = termResponse.data._embedded.terms[0];
    const result = {
      label: term.label,
      iri: term.iri,
      description: term.description?.[0] || "",
      obo_id: term.obo_id || "",
      ontology_name: term.ontology_name,
      parents: [] as Array<{ label: string; iri: string }>,
      children: [] as Array<{ label: string; iri: string }>,
    };

    // Fetch parents if available
    if (term._links?.parents?.href) {
      const parentsResponse = await axios.get<DiseaseHierarchyResponse>(term._links.parents.href);
      if (parentsResponse.data._embedded?.terms) {
        result.parents = parentsResponse.data._embedded.terms.map((parent) => ({
          label: parent.label,
          iri: parent.iri,
        }));
      }
    }

    // Fetch children if available
    if (term._links?.children?.href) {
      const childrenResponse = await axios.get<DiseaseHierarchyResponse>(term._links.children.href);
      if (childrenResponse.data._embedded?.terms) {
        result.children = childrenResponse.data._embedded.terms.map((child) => ({
          label: child.label,
          iri: child.iri,
        }));
      }
    }

    return result;
  } catch (error) {
    console.error("Error getting disease hierarchy:", error);
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error("Disease not found");
    }
    throw new Error("Failed to get disease hierarchy. Please try again later.");
  }
}

/**
 * Fetches research papers related to a disease from PubMed.
 *
 * @param {string} disease - The disease name to query PubMed.
 * @returns {Promise<string[]>} - An array of PubMed IDs for the research papers.
 */
export async function getResearchPapers(disease: string): Promise<string[]> {
  try {
    const response = await axios.get(`${PUBMED_API_BASE}/esearch.fcgi`, {
      params: {
        db: "pubmed",
        term: `${disease}[MeSH Terms]`,
        retmode: "json",
        retmax: 5,
      },
    });
    return response.data.esearchresult?.idlist || [];
  } catch (error) {
    console.error("Error getting research papers:", error);
    throw new Error("Failed to get research papers. Please try again later.");
  }
}

/**
 * Fetches details for a specific research paper from PubMed.
 *
 * @param {string} paperId - The PubMed ID of the paper.
 * @returns {Promise<any>} - The paper details.
 */
export async function getPaperDetails(paperId: string): Promise<any> {
  try {
    const response = await fetch(`/api/pubmed?id=${paperId}`)
    if (!response.ok) {
      throw new Error('Failed to fetch paper details')
    }
    return await response.json()
  } catch (error) {
    console.error("Error getting paper details:", error)
    return {
      id: paperId,
      title: "Error fetching paper details",
      authors: [],
      abstract: "An error occurred while fetching the paper details.",
    }
  }
}

/**
 * Fetches a specified number of random diseases.
 *Random diseases api call currently not implemented future scope 
 * @param {number} count - The number of random diseases to fetch.
 * @returns {Promise<any[]>} - An array of random diseases.
 */
export async function getRandomDiseases(count: number): Promise<any[]> {
  try {
    const response = await axios.get<DiseaseSearchResponse>(`${OLS_API_BASE}/search`, {
      params: {
        q: '*',
        ontology: 'efo,mondo',
        type: 'class',
        rows: count,
        start: Math.floor(Math.random() * 1000), // Random starting point
      },
    });
    return response.data.response.docs;
  } catch (error) {
    console.error("Error fetching random diseases:", error);
    throw new Error("Failed to fetch random diseases. Please try again later.");
  }
}