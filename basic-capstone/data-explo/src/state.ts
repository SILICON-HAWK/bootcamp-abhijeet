export let currentPage = 1;
export const itemsPerPage = 20; // Number of papers per page
export let allPapers: any[] = []; // Holds all papers data
export let filteredPapers: any[] = []; // Holds currently filtered data

export function setAllPapers(papers: any[]) {
  allPapers = papers;
}

export function setFilteredPapers(papers: any[]) {
  filteredPapers = papers;
}

export function setCurrentPage(page: number) {
  currentPage = page;
}
