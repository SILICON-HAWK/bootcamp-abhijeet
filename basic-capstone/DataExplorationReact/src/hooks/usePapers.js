import { useState, useEffect } from 'react';

const PAPERS_PER_PAGE = 1000;

export function usePapers() {
  const [allPapers, setAllPapers] = useState([]);
  const [filteredPapers, setFilteredPapers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setAllPapers(data);
        setFilteredPapers(data);
        updateTotalPages(data.length);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    fetchPapers();
  }, []);

  const updateTotalPages = (totalItems) => {
    setTotalPages(Math.ceil(totalItems / PAPERS_PER_PAGE));
  };

  const filterPapers = (filters) => {
    const { title, author, abstract } = filters;
    const filtered = allPapers.filter(paper => 
      paper.title.toLowerCase().includes(title.toLowerCase()) &&
      paper.authors.toLowerCase().includes(author.toLowerCase()) &&
      paper.abstract.toLowerCase().includes(abstract.toLowerCase())
    );
    setFilteredPapers(filtered);
    updateTotalPages(filtered.length);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const exportData = () => {
    const dataStr = JSON.stringify(filteredPapers, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'research_papers.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const startIndex = (currentPage - 1) * PAPERS_PER_PAGE;
  const currentPapers = filteredPapers.slice(startIndex, startIndex + PAPERS_PER_PAGE);

  return {
    papers: currentPapers,
    currentPage,
    setCurrentPage,
    filterPapers,
    exportData,
    totalPages,
    totalPapers: filteredPapers.length
  };
}