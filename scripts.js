document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('performanceGraph').getContext('2d');
    const performanceGraph = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'January', 'February', 'March', 'April', 'May', 
                'June', 'July', 'August', 'September', 'October', 
                'November', 'December'
            ],
            datasets: [{
                label: 'Performance',
                data: [12, 19, 3, 5, 2, 15, 20, 18, 22, 24, 30, 28], // Example data for each month
                backgroundColor: 'rgba(75, 192, 192, 0.4)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#ddd'
                    }
                },
                x: {
                    grid: {
                        color: '#ddd'
                    }
                }
            }
        }
    });
});
