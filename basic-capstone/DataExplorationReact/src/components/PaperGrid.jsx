import React from 'react';

function PaperGrid({ papers }) {
  return (
    <div className="main-content">
      <div className="paper-grid">
        {papers.map((paper, index) => (
          <div key={index} className="paper-card">
            <h3>{paper.title}</h3>
            <p>{paper.authors.replace(/[\[\]']/g, '')}</p>
            <p>{paper.abstract.substring(0, 200)}...</p>
            <div className="paper-meta">
              <span>Year: {paper.year}</span>
              <span>Citations: {paper.n_citation}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaperGrid;