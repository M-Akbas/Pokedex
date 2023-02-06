let hpData = [];
let attackData = [];
let defenseData = [];
let specialAttackData = [];
let specialDefenseData = [];
let speedData = [];
let xValues = [
  "HP",
  "Attack",
  "Defense",
  "Special-Attack",
  "Special-Defense",
  "Speed",
];
const yValues = [
  hpData,
  attackData,
  defenseData,
  specialAttackData,
  specialDefenseData,
  speedData,
];


function chartJs() {
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "bar",
    data: dataStats,
    options: optionsOfStats,
  });
}
let optionsOfStats = {
  indexAxis: "y",
  scales: {
    x: {
      ticks: {
        color: "grey",
      },
    },
    y: {
      ticks: {
        color: "grey",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: true,
      color: "rgb(239, 239, 239)",
    },
  },
  interaction: true,
  hover: {
    mode: false,
  },
};



let dataStats = {

  labels: xValues,
  datasets: [
    {
      label: "",
      borderSkipped: "",
      borderRadius: 8,

      backgroundColor: [
        "rgb(40, 167, 69)",
        "rgb(220, 53, 69)",
        "rgb(121, 182, 185)",
        "rgb(220, 53, 69)",
        "rgb(121, 182, 185)",
        "rgb(255, 153, 51)",
      ],
      borderColor: "rgb(255, 99, 132)",
      data: yValues,
    },
  ],
};


function getData(i) {
  let pokemon = allPokemons[i];
  let hp = pokemon["stats"][0]["base_stat"];
  let attack = pokemon["stats"][1]["base_stat"];
  let defense = pokemon["stats"][2]["base_stat"];
  let specialAttack = pokemon["stats"][3]["base_stat"];
  let specialDefense = pokemon["stats"][4]["base_stat"];
  let speed = pokemon["stats"][5]["base_stat"];

  hpData.push(hp);
  attackData.push(attack);
  defenseData.push(defense);
  specialAttackData.push(specialAttack);
  specialDefenseData.push(specialDefense);
  speedData.push(speed);
}


function deleteOldData() {
  hpData.splice(0, hpData.length);
  attackData.splice(0, attackData.length);
  defenseData.splice(0, defenseData.length);
  specialAttackData.splice(0, specialAttackData.length);
  specialDefenseData.splice(0, specialDefenseData.length);
  speedData.splice(0, speedData.length);
}
