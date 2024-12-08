document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const employeeTable = document.getElementById('employeeTable');
    const rows = employeeTable.getElementsByTagName('tr');

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();

        for (let i = 1; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName('td');
            let found = false;

            for (let j = 0; j < cells.length - 1; j++) {
                if (cells[j].textContent.toLowerCase().includes(filter)) {
                    found = true;
                    break;
                }
            }

            rows[i].style.display = found ? '' : 'none';
        }
    });

    document.querySelectorAll('.edit-button').forEach(button => {
        button.addEventListener('click', () => {
            alert('Edit button clicked');
            // Handle edit functionality here
        });
    });

    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this employee?')) {
                alert('Delete button clicked');
                // Handle delete functionality here
            }
        });
    });
});
