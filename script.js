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


function displayPokemon() {
    for (let i = 1; i < allPokemons.length; i++) {
      const pokemon = allPokemons[i];
      let content = document.getElementById('content');
      content.innerHTML += `
      <div class="poke-card">
        <h2 class="card-name">${pokemon['name']}</h2>
        <div class="card-content">
          <div class="background-color">
            <img class="pokemon-img" src="${pokemon['sprites']['other']['official-artwork']['front_default']}"/>
          </div>
          <div class="types">
            <p class="type-card">grass</p>
            <p class="type-poison">poison</p>
          </div>
        </div>
      </div>`;
    }
}
