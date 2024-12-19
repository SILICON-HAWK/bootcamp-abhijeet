// advanceFilter.ts

type Paper = {
    abstract: string;
    authors: string;
    n_citation: number;
    references: string[];
    title: string;
    venue: string;
    year: number;
    id: string;
};

export function filterByAuthor(papers: Paper[], authorQuery: string): Paper[] {
    return papers.filter(paper =>
        paper.authors.toLowerCase().includes(authorQuery.toLowerCase())
    );
}

export function filterByTitle(papers: Paper[], titleQuery: string): Paper[] {
    return papers.filter(paper =>
        paper.title.toLowerCase().includes(titleQuery.toLowerCase())
    );
}

export function filterByYear(papers: Paper[], yearQuery: number): Paper[] {
    return papers.filter(paper => paper.year === yearQuery);
}

export function applyAdvancedFilters(
    papers: Paper[],
    authorQuery: string = '',
    titleQuery: string = '',
    yearQuery: number | null = null
): Paper[] {
    let filteredPapers = [...papers];

    if (authorQuery) {
        filteredPapers = filterByAuthor(filteredPapers, authorQuery);
    }

    if (titleQuery) {
        filteredPapers = filterByTitle(filteredPapers, titleQuery);
    }

    if (yearQuery) {
        filteredPapers = filterByYear(filteredPapers, yearQuery);
    }

    return filteredPapers;
}
