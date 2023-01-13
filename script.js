let currentPokemon;
let allPokemons = [];

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
function displayPokemon() {
  for (let i = 1; i < allPokemons.length; i++) {
    const pokemon = allPokemons[i];
    let content = document.getElementById("content");
    content.innerHTML += `
      <div class="poke-card">
        
        <h2 class="card-name"> ${getPokemonName(pokemon)}</h2>
        <div class="card-content">
          <div class="background-color">
            <img class="pokemon-img" src="${getPokemonImage(pokemon)}"/>
          </div>
          <div class="types">
            <p class="type-card"> ${getPokemonType(pokemon)}</p>
            <p class="type-move">${pokemon["moves"]["0"]["move"]["name"]}</p>
          </div>
        </div>
      </div>`;
  }
}
