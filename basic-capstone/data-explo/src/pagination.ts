import { currentPage, itemsPerPage, filteredPapers, setCurrentPage } from './state';
import { updateDisplay } from './render';

export function paginate(data: any[], page: number, itemsPerPage: number) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return data.slice(start, end);
}

export function renderPagination() {
  const paginationContainer = document.getElementById('pagination');
  if (!paginationContainer) return;

  const totalPages = Math.ceil(filteredPapers.length / itemsPerPage);
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = `${i}`;
    pageButton.className = `pagination-button ${i === currentPage ? 'active' : ''}`;
    pageButton.addEventListener('click', () => {
      setCurrentPage(i);
      updateDisplay();
    });
    paginationContainer.appendChild(pageButton);
  }
}
