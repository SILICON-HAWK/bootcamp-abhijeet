import './style.css';
import { fetchPapers } from './fetchPapers';
import { setAllPapers, setCurrentPage, setFilteredPapers } from './state';
import { updateDisplay } from './render';
import { applyAdvancedFilters } from './advanceFilter';

document.addEventListener('DOMContentLoaded', async () => {
  const allPapers = await fetchPapers();
  setAllPapers(allPapers);
  setFilteredPapers(allPapers); // Initialize with all papers
  updateDisplay();

  const authorInput = document.getElementById('author') as HTMLInputElement;
  const titleInput = document.getElementById('title') as HTMLInputElement;
  const yearInput = document.getElementById('year') as HTMLInputElement;

  // Apply filters when author, title, or year input changes
  if (authorInput) {
    authorInput.addEventListener('input', applyFilters);
  }

  if (titleInput) {
    titleInput.addEventListener('input', applyFilters);
  }

  if (yearInput) {
    yearInput.addEventListener('input', applyFilters);
  }

  // Function to apply filters based on input fields
  function applyFilters() {
    setCurrentPage(1)
    const authorQuery = authorInput.value.toLowerCase();
    const titleQuery = titleInput.value.toLowerCase();
    const yearQuery = yearInput.value ? parseInt(yearInput.value) : null;

    // Apply the filters using the applyAdvancedFilters function
    const filteredPapers = applyAdvancedFilters(
      allPapers,
      authorQuery,
      titleQuery,
      yearQuery
    );

    // Update the state with filtered papers
    setFilteredPapers(filteredPapers);

    // Update the display with the filtered papers
    updateDisplay();
  }
});
