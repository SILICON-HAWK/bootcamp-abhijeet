
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