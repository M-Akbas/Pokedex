let currentPokemon;
let allPokemons = [];
let color = '';


function init() {
  loadPokemons();
}


async function loadPokemons() {
  for (let i = 1; i < 20; i++) {
    // fetching 10 pokemons
    let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    let response = await fetch(url);
    let currentPokemon = await response.json();
    allPokemons.push(currentPokemon);
  }
  displayPokemon();
}


function getPokemonType(pokemon) {
  return pokemon["types"]["0"]["type"]["name"];
}
function getPokemonImage(pokemon) {
  return pokemon["sprites"]["other"]["official-artwork"]["front_default"];
}
function getPokemonName(pokemon){
  return pokemon["name"];
}
function getPokemonMove(pokemon){
  return pokemon["moves"]["0"]["move"]["name"];
}


function displayPokemon() {
  for (let i = 0; i < allPokemons.length; i++) {
    const pokemon = allPokemons[i];
    let color = getPokemonColor(pokemon);
    let content = document.getElementById("content"); 
    content.innerHTML += `
      <div onclick="showPokemon(${i})" class="poke-card ${color}">
      <div class="d-FlexSpace">#${i+1}</div>
        <h2 class="card-name"> ${getPokemonName(pokemon)}</h2>
        <div class="card-content ">
          <div class="background-color ">
            <img class="pokemon-img" src="${getPokemonImage(pokemon)}"/>
          </div>
          <div class="types">
            <p class="type-card"> ${getPokemonType(pokemon)}</p>
            <p class="type-move">${getPokemonMove(pokemon)}</p>
          </div>
        </div>
      </div>`;
  }
  getPokemonColor();
}

function showPokemon(i){
  let pokedex = document.getElementById('overlay');
  pokedex.innerHTML += `<div>Hallo</div>`;
  console.log("lauft" , i)
}

