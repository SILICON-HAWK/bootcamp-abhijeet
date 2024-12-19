export function renderTable(students) {
    const tableBody = document.querySelector("#studentTable tbody");
    tableBody.innerHTML = ""; // Clear the table
    students.forEach((student) => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
        `;
        tableBody.appendChild(newRow);
    });
}
