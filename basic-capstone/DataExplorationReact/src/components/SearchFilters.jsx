import React from 'react';

function SearchFilters({ filters, onChange }) {
  return (
    <div className="filter-section">
      <h2>Search & Filters</h2>
      <input
        type="text"
        name="title"
        placeholder="Search title..."
        value={filters.title}
        onChange={onChange}
        className="search-input"
      />
      <input
        type="text"
        name="author"
        placeholder="Search authors..."
        value={filters.author}
        onChange={onChange}
        className="search-input"
      />
      <input
        type="text"
        name="abstract"
        placeholder="Search abstract..."
        value={filters.abstract}
        onChange={onChange}
        className="search-input"
      />
    </div>
  );
}

export default SearchFilters;