function chartJs(){
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'],
      datasets: [{
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['red', 'green', 'blue', 'yellow', 'purple', 'orange'],
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
      }]
    },
    options: {
      legend: {
        display: 'none',
      },
      animation: {
          easing: 'easeOutQuart'
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });




}