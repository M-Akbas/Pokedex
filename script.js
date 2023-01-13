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
}

function displayPokemon() {
    
}
