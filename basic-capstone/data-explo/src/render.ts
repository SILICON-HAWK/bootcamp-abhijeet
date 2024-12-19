import { currentPage, itemsPerPage, filteredPapers } from './state';
import { paginate } from './pagination';
import { renderPagination } from './pagination';

export function renderCards(papers: any[]) {
  const cardsContainer = document.getElementById('cards');
  if (!cardsContainer) return;

  if (papers.length === 0) {
    cardsContainer.innerHTML = `<p>No results found</p>`;
    return;
  }

  cardsContainer.innerHTML = papers
    .map((paper) => {
      let authors = [];
      try {
        authors = JSON.parse(paper.authors);
      } catch {
        authors = [paper.authors];
      }

      return `
      <div class="card">
        <h3>${paper.title}</h3>
        <p><strong>Authors:</strong> ${authors.join(', ')}</p>
        <p><strong>Year:</strong> ${paper.year}</p>
        <p><strong>Venue:</strong> ${paper.venue}</p>
        <p><strong>Citations:</strong> ${paper.n_citation}</p>
      </div>
    `;
    })
    .join('');
}

export function updateDisplay() {
  const paginatedPapers = paginate(filteredPapers, currentPage, itemsPerPage);
  renderCards(paginatedPapers);
  renderPagination();
}
