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
