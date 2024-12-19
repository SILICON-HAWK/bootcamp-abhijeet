export function renderFilters(applyFilters: Function) {
    const filtersContainer = document.getElementById('filters');
    if (!filtersContainer) return;
  
    filtersContainer.innerHTML = `
      <div>
        <label for="filter-title">Title:</label>
        <input type="text" id="filter-title" placeholder="Enter title" />
      </div>
      <div>
        <label for="filter-author">Author:</label>
        <input type="text" id="filter-author" placeholder="Enter author name" />
      </div>
      <div>
        <label for="filter-year">Year:</label>
        <input type="text" id="filter-year" placeholder="Enter year" />
      </div>
      <button id="apply-filters">Apply Filters</button>
    `;
  
    document.getElementById('apply-filters')?.addEventListener('click', () => {
      const title = (document.getElementById('filter-title') as HTMLInputElement).value;
      const author = (document.getElementById('filter-author') as HTMLInputElement).value;
      const year = (document.getElementById('filter-year') as HTMLInputElement).value;
      applyFilters({ title, author, year });
    });
  }
  