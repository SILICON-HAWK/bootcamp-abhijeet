
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
  