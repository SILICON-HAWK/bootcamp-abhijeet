import './style.scss';
import { addStudent, changeFont, displayBrowserInfo, addStudentDummy, displayStudentDataFromJSON } from './script.ts';

document.querySelector('#app')!.innerHTML = `
  <h1>Student Management Dashboard</h1>
  <button type="button" id="addStudentBtn">Add Student</button>
  <button type="button" id="addDummyStudentBtn">Add Dummy Student</button>
  <button type="button" id="loadJSONBtn">Load CSV</button>
  <table id="studentTable">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody id="studentTableBody">
      <!-- Rows will be dynamically added here -->
    </tbody>
  </table>
  <button type="button" id="changeFontBtn">Change Font</button>
  <div id="browserInfo">
    <p><strong>Browser:</strong> <span id="browserName"></span></p>
    <p><strong>Version:</strong> <span id="browserVersion"></span></p>
    <p><strong>Window Dimensions:</strong> <span id="windowDimensions"></span></p>
    <p><strong>User Agent:</strong> <span id="userAgent"></span></p>
  </div>
`;

document.querySelector('#addStudentBtn')!.addEventListener('click', addStudent);
document.querySelector('#addDummyStudentBtn')!.addEventListener('click', addStudentDummy);
document.querySelector('#changeFontBtn')!.addEventListener('click', changeFont);

// Load CSV and display in the table
document.querySelector('#loadJSONBtn')!.addEventListener('click', () => {
  displayStudentDataFromJSON('src/students.json'); // Specify the correct path to your JSON file
});

// Display browser information
displayBrowserInfo();
