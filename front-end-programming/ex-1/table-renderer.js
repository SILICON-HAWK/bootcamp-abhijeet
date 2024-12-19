function renderTable(students) {
    const tableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    
    students.forEach(student => {
        const newRow = tableBody.insertRow();
        newRow.insertCell(0).innerText = student.id;
        newRow.insertCell(1).innerText = student.name;
        newRow.insertCell(2).innerText = student.age;
        newRow.insertCell(3).innerText = student.grade;
    });
}


function loadData() {
    return [
        { "id": 1, "name": "John Doe", "age": 18, "grade": "A" },
        { "id": 2, "name": "Jane Smith", "age": 19, "grade": "B" }
    ];
}

function renderData() {
    const students = loadData();
    renderTable(students);
    console.log("data being rendered")
}

renderData();