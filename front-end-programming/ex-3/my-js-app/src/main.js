import './style.scss';
import { addStudent, changeFont, displayBrowserInfo, addStudentDummy } from './script.js';

document.querySelector('#app').innerHTML = `
  <h1>Student Management Dashboard</h1>
  <button type="button" id="addStudentBtn">Add Student</button>
  <button type="button" id="addDummyStudentBtn">Add Dummy Student</button>
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
  <div class="box">
    <div class="m-1">Margin 2px</div>
    <div class="m-2">Margin 4px</div>
    <div class="m-3">Margin 6px</div>
    <div class="m-4">Margin 8px</div>
    <div class="m-5">Margin 10px</div>
    <div class="m-6">Margin 12px</div>
    <div class="m-7">Margin 14px</div>
    <div class="m-8">Margin 16px</div>
  </div>
`;

// Add event listeners to buttons
document.querySelector('#addStudentBtn').addEventListener('click', addStudent);
document.querySelector('#addDummyStudentBtn').addEventListener('click', addStudentDummy);
document.querySelector('#changeFontBtn').addEventListener('click', changeFont);

// Display browser information
displayBrowserInfo();
