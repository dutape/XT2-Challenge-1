new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["2026", "2027", "2028", "2029"],
      datasets: [
        {
          backgroundColor: ["#2e122d", "#530332","#800834","#c72b41"],
          data: [102,89,95,120]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Personen aan boord'
      }
    }
});

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Water", "Groenten", "Fruit", "Vlees", "Overig"],
      datasets: [{
        backgroundColor: ["#2e122d", "#530332","#800834","#c72b41","#ee4540"],
        data: [10478,5267,3734,1784,833]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Voeding en water in kilo'
      }
    }
});

new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
      labels: ["lichtjaar", "snelheid", "G-kracht", "ZK m/s", "O2 %"],
      datasets: [
        {
          label: "route 2",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)", //0.2 is de opacity
          borderColor: "#2e122d",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#2e122d",
          data: [8.77,55.61,21.69,6.62,6.82]
        }, {
          label: "route 3",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)", //0.2 is de opacity
          borderColor: "#c72b41",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#ff6384",
          pointBorderColor: "#fff",
          data: [25,54,7.61,8,4.45]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'radar weergave'
      }
    }
});

new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Leeg", "Vol"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#2e122d", "#530332"],
          data: [2478,5267]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Brandstof in Liter'
      }
    }
});