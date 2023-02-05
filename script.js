let currentPokemon;
let allPokemons = [];
let color = "";
let start = 30;
let begin = 1;


function init() {
  loadPokemons();
}


async function loadPokemons() {
  for (let i = begin; i < start; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    let response = await fetch(url);
    let currentPokemon = await response.json();
    allPokemons.push(currentPokemon);
  }
  displayPokemon(begin, start);
}
function displayPokemon(begin, start) {
  for (let i = begin -1; i < start && i < allPokemons.length; i++) {
    const pokemon = allPokemons[i];
    let color = getPokemonColor(pokemon);
    let content = document.getElementById("content");
    content.innerHTML += displayPokemonHTML(pokemon, color, i);
    checkMode();
    
  }
  
  getPokemonColor();
  
}


function checkMode(){
  console.log("Checking mode...");
  if (document.body.classList.contains("whiteBackground")){
    bgColorForEachPoke();
  } else{
    bgColorForEachPokeDark();
  }
}



function showMorePokemon() {
  begin += 30;
  start += 30;
  if (start > 1054) {
  return;
  }
  loadPokemons();
  }


window.addEventListener("scroll", function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    showMorePokemon();
  }
});

function getPokemonType(pokemon) {
  if (pokemon && pokemon.hasOwnProperty("types")) {
    return pokemon["types"]["0"]["type"]["name"];
  } else {
    return "unknown";
  }
}


function getPokemonImage(pokemon) {
  return pokemon["sprites"]["other"]["official-artwork"]["front_default"];
}


function getPokemonImage1(i) {
  i++;
  return allPokemons[i]["sprites"]["other"]["official-artwork"][
    "front_default"
  ];
}


function getPokemonImage2(i) {
  i + 2;
  return allPokemons[i]["sprites"]["other"]["official-artwork"][
    "front_default"
  ];
}


function getPokemonName(pokemon) {
  if (pokemon.hasOwnProperty("name")) {
  return pokemon["name"];
  }
  return "";
  }


function getPokemonMove(pokemon) {
  return pokemon["moves"]["0"]["move"]["name"];
}


function getPokemonHeight(pokemon) {
  return pokemon["height"] / 10;
}


function getPokemonWeight(pokemon) {
  return pokemon["weight"] / 10;
}


function getPokemonAbilities1(pokemon) {
  if (!pokemon.abilities || !pokemon.abilities[0] || !pokemon.abilities[0].ability) {
    return "Ability information not available";
  }
  return pokemon.abilities[0].ability.name;
}



function getPokemonAbilities2(pokemon) {
  if (pokemon.hasOwnProperty("abilities") && pokemon.abilities.length > 1) {
    return "| " + pokemon["abilities"][1]["ability"]["name"];
  } else {
    return "";
  }
}


function closePokemon() {
  deleteOldData();
  let pokedex = document.getElementById("overlay");
  document.body.style.overflow = "auto";
  pokedex.classList.remove("overlay");
  pokedex.innerHTML = "";
  statsRendered = false;
}





function showPokemon(i) {
  let pokemon = allPokemons[i];
  let color = getPokemonColor(pokemon);
  let pokedex = document.getElementById("overlay");
  let textDeco = getPokemonTextColor(pokemon);
  let borderColor = getBorderColor(pokemon);
  let abilitie1 = getPokemonAbilities1(pokemon);
  let abilitie2 = getPokemonAbilities2(pokemon);
  document.body.style.overflow = "hidden";
  pokedex.classList.add("overlay");
  pokedex.innerHTML = showPokemonHTML(color,textDeco,borderColor,abilitie1,abilitie2,pokemon,i);
  checkForColor();
  getData(i);
  getChart();
  
}


let statsRendered = false;

function stats(i) {
  if (statsRendered) {
    return;
  }

  for (let j = 0; j <= 60; j++) {
    let pokemon = allPokemons[i];
    if (
      !pokemon ||
      !pokemon.moves ||
      !pokemon.moves[j] ||
      !pokemon.moves[j].move
    )
      continue;
    let stat = pokemon.moves[j].move.name;
    let content = document.getElementById("move-section");
    content.innerHTML += `<div class="movesStats">${stat}</div>`;
  }
  
  statsRendered = true;
}



function getChart() {
  chartJs();
}


function nextPokemon(i) {
  deleteOldData();
  i++;
  showPokemon(i);
  statsRendered = false;
}


function lastPokemon(i) {
  deleteOldData();
  i--;
  if (i <= 0) {
    showPokemon(i);
    document.getElementById("lastPokemon").classList.add("d-none");
  } else {
    showPokemon(i);
  }
  statsRendered = false;
}


function showPokemonMoves(i) {
  document.getElementById("stats-section").classList.add("d-none");
  document.getElementById("move-section").style.display = "block";
  document.getElementById("move-section").classList.add("d-F");
  stats(i);
}


function showPokemonStats() {
  document.getElementById("stats-section").classList.remove("d-none");
  document.getElementById("move-section").style.display = "none";
  document.getElementById("move-section").classList.remove("d-F");
}


function lightMode() {
  document.getElementById("body").classList.add("whiteBackground");
  document.getElementById("header").classList.add("whiteBackground");
  document.getElementById("header-font").classList.add("light-mode");
  document.getElementById("button1").classList.add("border-color");
  bgColorForEachPoke();
}


function checkForColor(i) {
  if (document.body.classList.contains("whiteBackground")) {
    document.getElementById("pokeData").classList.add("whiteBackground");
    document.getElementById("pokeImg").classList.add("whiteBackground");
    document.getElementById("options").classList.add("lightColor");
    document.getElementById("stats-section").classList.add("lightColor");
  }
}


function darkMode() {
  if (document.body.classList.contains("whiteBackground")) {
    document.getElementById("body").classList.remove("whiteBackground");
    document.getElementById("header").classList.remove("whiteBackground");
    document.getElementById("header-font").classList.remove("light-mode");
    document.getElementById("button1").classList.remove("border-color");
    bgColorForEachPokeDark();
  }
}




// Check if the element exists before modifying its classList
// add white color
function bgColorForEachPoke() {
  if (allPokemons && allPokemons.length > 0) {
    for (let i = 0; i < allPokemons.length; i++) {
      let element = document.getElementById(`background-of-pokemon${i}`);
      if (element) {
        element.classList.add("whiteBackground");
      }
    }
  }
}


// Check if the element exists before modifying its classList
// add dark color
function bgColorForEachPokeDark() {
  if (allPokemons && allPokemons.length > 0) {
    for (let i = 0; i < allPokemons.length; i++) {
      let element = document.getElementById(`background-of-pokemon${i}`);
      if (element) {
        element.classList.remove("whiteBackground");
      }
    }
  }
}



function close() {
  document.getElementById("overlay").classList.remove("overlay");
}


function reload() {
  location.reload();
}


function filterNames() {
  let search = document.getElementById("search").value;
  search = search.toLowerCase();

  let content = document.getElementById("content");
  content.innerHTML = "";
  
  if (!search) {
    // No search term, render all pokemons
    for (let i = 0; i < allPokemons.length; i++) {
      const pokemon = allPokemons[i];
      let color = getPokemonColor(pokemon);
      content.innerHTML += filterNamesHTML(color, pokemon, i);
      checkMode();
    }
    return;
  }
  // Search term present, filter based on it
  for (let i = 0; i < allPokemons.length; i++) {
    const pokemon = allPokemons[i];
    let color = getPokemonColor(pokemon);

    if (getPokemonName(pokemon).includes(search)) {
      content.innerHTML += filterNamesHTML2(color, pokemon, i);
      checkMode();
    }
  }
}


function toggleButtons() {
  let buttons = document.querySelectorAll(".button1, .button2");
  let search = document.getElementById("search");

  search.addEventListener("focus", function () {
    buttons.forEach((button) => {
      button.style.display = "none";
    });
  });

  search.addEventListener("blur", function () {
    buttons.forEach((button) => {
      button.style.display = "inline-block";
    });
  });
}

window.addEventListener("load", toggleButtons);



 



