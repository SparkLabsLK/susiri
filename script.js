document.addEventListener('DOMContentLoaded', function () {
    // Chart.js Configuration
    const chartFont = "'Poppins', sans-serif";

    // --- Carbon Footprint Line Chart ---
    const carbonCtx = document.getElementById('carbonChart').getContext('2d');
    const carbonChart = new Chart(carbonCtx, {
        type: 'line',
        data: {
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            datasets: [{
                label: 'Carbon Footprint (tCO₂e)',
                data: [14.2, 13.8, 13.5, 13.1, 12.8, 12.5],
                backgroundColor: 'rgba(46, 139, 87, 0.1)',
                borderColor: '#2E8B57',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        color: '#f0f0f0'
                    },
                    ticks: {
                        font: { family: chartFont }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: { family: chartFont }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // --- Energy Mix Doughnut Chart ---
    const energyMixCtx = document.getElementById('energyMixChart').getContext('2d');
    const energyMixChart = new Chart(energyMixCtx, {
        type: 'doughnut',
        data: {
            labels: ['Grid (Hydro)', 'Grid (Thermal)', 'Solar (On-site)'],
            datasets: [{
                label: 'Energy Mix %',
                data: [60, 25, 15],
                backgroundColor: [
                    '#2E8B57', // Sea Green
                    '#F4A460', // Sandy Brown
                    '#8FBC8F'  // Dark Sea Green
                ],
                borderColor: '#FFFFFF',
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: { family: chartFont },
                        padding: 20
                    }
                }
            },
            cutout: '70%'
        }
    });
});