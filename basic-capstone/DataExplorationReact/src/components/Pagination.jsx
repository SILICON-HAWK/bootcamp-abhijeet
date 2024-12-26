import React from 'react';

function Pagination({ currentPage, setCurrentPage, totalPapers }) {
  const PAPERS_PER_PAGE = 1000;
  const totalPages = Math.ceil(totalPapers / PAPERS_PER_PAGE);

  // Debugging: Check calculated totalPages value
  console.log('Total Pages:', totalPages);

  return (
    <div className="pagination">
      <div className="pages-grid">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`page-button ${
              currentPage === index + 1 ? 'active' : ''
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
