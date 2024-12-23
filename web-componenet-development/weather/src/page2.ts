function renderPage2() {
  const page2Html = `
    <h1>NEW PAGE</h1>
    <div class="container">
      <city-weather city="New York"></city-weather>
      <br>
      <button id="back-to-main-button">Go to Main Page</button>
    </div>
  `;

  const page2Element = document.createElement('div');
  page2Element.innerHTML = page2Html;
  page2Element.id = 'page2';

  // Add event listener for the back button
  const backToMainButton = page2Element.querySelector('#back-to-main-button');
  backToMainButton!.addEventListener('click', () => {
      window.location.reload(); // Reload the entire page
  });

  return page2Element;
}

export { renderPage2 };