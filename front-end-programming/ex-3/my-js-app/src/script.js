// Add a student to the table with user input
export function addStudent() {
    // Prompt the user for student details
    const id = prompt("Enter Student ID:");
    const name = prompt("Enter Student Name:");
    const age = prompt("Enter Student Age:");
    const grade = prompt("Enter Student Grade:");

    // Validate input
    if (!id || !name || !age || !grade) {
        alert("All fields are required!");
        return;
    }

    // Get the student table body
    const tableBody = document.querySelector("#studentTable tbody");

    // Create a new table row
    const newRow = document.createElement("tr");

    // Add student data to the row
    newRow.innerHTML = `
      <td>${id}</td>
      <td>${name}</td>
      <td>${age}</td>
      <td>${grade}</td>
    `;

    // Add the highlight class
    newRow.classList.add("highlight");

    // Append the new row to the table
    tableBody.appendChild(newRow);
}

export function addStudentDummy() {
    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert cells and populate them
    newRow.insertCell(0).innerText = 2;  // ID
    newRow.insertCell(1).innerText = 'Jane Smith';  // Name
    newRow.insertCell(2).innerText = 19;  // Age
    newRow.insertCell(3).innerText = 'B';  // Grade

    // Highlight the newly added row
    newRow.classList.add('highlight');
}

// Change the font of the table
export function changeFont() {
    // Specify the Google Font
    const fontUrl = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";

    // Create the link element dynamically
    const fontLink = document.createElement("link");
    fontLink.id = "google-font-link";
    fontLink.rel = "stylesheet";
    fontLink.href = fontUrl;
  
    // Add the link element to the head
    document.head.appendChild(fontLink);
  
    // Apply the font to the table
    const table = document.querySelector("table");
    table.style.fontFamily = "'Roboto', sans-serif";
    table.style.fontSize = "1.9rem";
    table.style.color = "navy";
}

// Display browser information
export function displayBrowserInfo() {
    // Get browser info elements
    const browserNameEl = document.querySelector("#browserName");
    const browserVersionEl = document.querySelector("#browserVersion");
    const windowDimensionsEl = document.querySelector("#windowDimensions");
    const userAgentEl = document.querySelector("#userAgent");

    // Get browser details
    const userAgent = navigator.userAgent;
    const browserName = navigator.appName;
    const browserVersion = navigator.appVersion;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Set the content of the elements
    browserNameEl.textContent = browserName;
    browserVersionEl.textContent = browserVersion;
    windowDimensionsEl.textContent = `${windowWidth}x${windowHeight}`;
    userAgentEl.textContent = userAgent;
}