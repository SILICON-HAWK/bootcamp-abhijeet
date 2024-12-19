function loadData() {
    fetch('student.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').slice(1); // Skip header row
            const students = rows.map(row => {
                const [id, name, age, grade] = row.split(',');
                return { id, name, age, grade };
            });
        })
        .catch(error => console.error('Error loading data:', error));

        console.log("data loader working")
}

loadData();