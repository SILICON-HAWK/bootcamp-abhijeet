import './city-weather';
import './style.css';
import { renderPage2 } from './page2';

function renderApp() {
    const appHtml = `
      <h1>WEATHER APP</h1>
      <div class="container">
        <city-weather city="Los Angeles"></city-weather>
        <br>
        <button id="next-page-button">Go to Next Page</button>
      </div>
    `;

    const appElement = document.createElement('div');
    appElement.innerHTML = appHtml;
    appElement.id = 'app';

    // Add event listener for the button
    const nextPageButton = appElement.querySelector('#next-page-button');
    nextPageButton?.addEventListener('click', () => {
        const appTarget = document.getElementById('app');
        appTarget!.innerHTML = ''; // Clear current content
        appTarget?.appendChild(renderPage2()); // Render the second page
    });
    
    return appElement;
}


const appTarget = document.getElementById('app');
appTarget?.appendChild(renderApp());