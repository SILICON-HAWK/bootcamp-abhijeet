// Add a student to the table with user input
import { loadJSON } from './dataLoader';

export async function displayStudentDataFromJSON(filePath: string): Promise<void> {
  try {
    // Load and parse the JSON data
    const data = await loadJSON(filePath);

    // Render the data into the table
    renderTable(data);
  } catch (error) {
    console.error('Error loading or rendering JSON data:', error);
  }
}

function renderTable(data: any[]): void {
  // Get the table body element
  const tableBody: HTMLTableSectionElement | null = document.querySelector("#studentTable tbody");

  // Clear existing rows if any
  if (tableBody) {
    // tableBody.innerHTML = ''; uncomment this line to reset the table each time load data is called
    
    // Loop through the data and create table rows
    data.forEach((student) => {
      const newRow: HTMLTableRowElement = document.createElement("tr");

      // Insert data for each cell
      newRow.innerHTML = `
        <td>${student.ID}</td>
        <td>${student.Name}</td>
        <td>${student.Age}</td>
        <td>${student.Grade}</td>
      `;
      
      // Append the new row to the table body
      if (tableBody) {
        tableBody.appendChild(newRow);
      }
    });
  }
}


export function addStudent(): void {
    // Prompt the user for student details
    const id: string = prompt("Enter Student ID:")!;
    const name: string = prompt("Enter Student Name:")!;
    const age: string = prompt("Enter Student Age:")!;
    const grade: string = prompt("Enter Student Grade:")!;
  
    // Validate input
    if (!id || !name || !age || !grade) {
      alert("All fields are required!");
      return;
    }
  
    // Get the student table body
    const tableBody: HTMLTableSectionElement | null = document.querySelector("#studentTable tbody");
  
    if (tableBody) {
      // Create a new table row
      const newRow: HTMLTableRowElement = document.createElement("tr");
  
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
  }
  
  export function addStudentDummy(): void {
    const table: HTMLTableElement | null = document.querySelector("table") as HTMLTableElement | null;
    if (table) {
      const tableBody: HTMLTableSectionElement | null = table.getElementsByTagName('tbody')[0];
      if (tableBody) {
        const newRow: HTMLTableRowElement = tableBody.insertRow();
  
        // Insert cells and populate them
        newRow.insertCell(0).innerText = '2';  // ID
        newRow.insertCell(1).innerText = 'Jane Smith';  // Name
        newRow.insertCell(2).innerText = '19';  // Age
        newRow.insertCell(3).innerText = 'B';  // Grade
  
        // Highlight the newly added row
        newRow.classList.add('highlight');
      }
    }
    console.log("loggin info when clicking on add dummy student button")
  }
  
  // Change the font of the table
  export function changeFont(): void {
    // Specify the Google Font
    const fontUrl: string = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";
  
    // Create the link element dynamically
    const fontLink: HTMLLinkElement = document.createElement("link");
    fontLink.id = "google-font-link";
    fontLink.rel = "stylesheet";
    fontLink.href = fontUrl;
  
    // Add the link element to the head
    document.head.appendChild(fontLink);
  
    // Apply the font to the table
    const table: HTMLTableElement | null = document.querySelector("table");
    if (table) {
      table.style.fontFamily = "'Roboto', sans-serif";
      table.style.fontSize = "1.9rem";
      table.style.color = "navy";
    }
  }
  
  // Display browser information
  export function displayBrowserInfo(): void {
    // Get browser info elements
    const browserNameEl: HTMLElement | null = document.querySelector("#browserName");
    const browserVersionEl: HTMLElement | null = document.querySelector("#browserVersion");
    const windowDimensionsEl: HTMLElement | null = document.querySelector("#windowDimensions");
    const userAgentEl: HTMLElement | null = document.querySelector("#userAgent");
  
    // Get browser details
    const userAgent: string = navigator.userAgent;
    const browserName: string = navigator.appName;
    const browserVersion: string = navigator.appVersion;
    const windowWidth: number = window.innerWidth;
    const windowHeight: number = window.innerHeight;
  
    // Set the content of the elements
    if (browserNameEl) browserNameEl.textContent = browserName;
    if (browserVersionEl) browserVersionEl.textContent = browserVersion;
    if (windowDimensionsEl) windowDimensionsEl.textContent = `${windowWidth}x${windowHeight}`;
    if (userAgentEl) userAgentEl.textContent = userAgent;
  }