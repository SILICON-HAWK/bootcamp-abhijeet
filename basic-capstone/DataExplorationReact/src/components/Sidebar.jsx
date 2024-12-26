import React, { useState, useEffect } from 'react';
import SearchFilters from './SearchFilters';
import Pagination from './Pagination';

function Sidebar({
  onFilter,
  onExport,
  currentPage,
  setCurrentPage,
  totalPapers,
}) {
  const [filters, setFilters] = useState({
    title: '',
    author: '',
    abstract: '',
  });

  // Debug props received by Sidebar
  useEffect(() => {
    console.log('Sidebar Props:', {
      currentPage,
      totalPapers,
      hasSetCurrentPage: !!setCurrentPage
    });
  }, [currentPage, totalPapers, setCurrentPage]);

  const handleFilterChange = (e) => {
    const newFilters = {
      ...filters,
      [e.target.name]: e.target.value,
    };
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page on filter change
    onFilter(newFilters);
  };

  // Guard against undefined props
  if (typeof currentPage === 'undefined' || typeof totalPapers === 'undefined') {
    console.error('Required props missing in Sidebar:', {
      currentPage,
      totalPapers
    });
    return null;
  }

  return (
    <div className="sidebar">
      <SearchFilters filters={filters} onChange={handleFilterChange} />
      <button className="export-button" onClick={onExport}>
        Export Results
      </button>
      <div className="pagination-container">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPapers={totalPapers}
        />
      </div>
    </div>
  );
}

export default Sidebar;