let currentPokemon;
let allPokemons = [];
let color = "";

function init() {
  loadPokemons();
}

async function loadPokemons() {
  for (let i = 1; i < 100; i++) {
    // fetching 10 pokemons
    let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    let response = await fetch(url);
    let currentPokemon = await response.json();
    allPokemons.push(currentPokemon);
  }
  displayPokemon();
}

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
function getPokemonName(pokemon) {
  return pokemon["name"];
}
function getPokemonMove(pokemon) {
  return pokemon["moves"]["0"]["move"]["name"];
}
function getPokemonHeight(pokemon){
  return pokemon["height"] / 10 ;
}
function getPokemonWeight(pokemon){
  return pokemon["weight"] / 10 ;
}
function getPokemonAbilities1(pokemon){
  return pokemon['abilities']['0']['ability']['name'];

}
function getPokemonAbilities2(pokemon){
  if(pokemon.hasOwnProperty('abilities') && pokemon.abilities.length > 1) {
    return '| ' + pokemon['abilities'][1]['ability']['name'];
  } else {
    return "";
  }
}


function displayPokemon() {
  for (let i = 0; i < allPokemons.length; i++) {
    const pokemon = allPokemons[i];
    let color = getPokemonColor(pokemon);
    let content = document.getElementById("content");
    content.innerHTML += `
      <div onclick="showPokemon(${i})" class="poke-card ${color}">
      <div class="d-FlexSpace">#${i + 1}</div>
        <h2 class="card-name"> ${getPokemonName(pokemon)}</h2>
        <div class="card-content ">
          <div id="background-of-pokemon${i}" class="background-color ">
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
function showPokemon(i) {
  let pokemon = allPokemons[i];
  let color = getPokemonColor(pokemon);
  let pokedex = document.getElementById("overlay");
  let textDeco = getPokemonTextColor(pokemon);
  let borderColor = getBorderColor(pokemon);
  let abilitie1 = getPokemonAbilities1(pokemon);
  let abilitie2 = getPokemonAbilities2(pokemon);
  pokedex.classList.add("overlay");
  pokedex.innerHTML += `
    <div class="pokedex-card ${color}">
      <div class="d-FlexSpace">#${i + 1}</div>
      <div class="card-name">${getPokemonName(pokemon)}</div>
      <div class="typeO"><p class="type-cardP">${getPokemonType(pokemon)}</p><p class="type-moveP"> ${getPokemonMove(pokemon)}</p></div>
      <div class="typeU"><p class="type-cardP">${getPokemonHeight(pokemon)} m</p><p class="type-moveP"> ${getPokemonWeight(pokemon)} kg</p></div>
      <div class="d-FlexWidth">
      <img class="arrowPng" src="img/arrowL.png"/><img class="arrowPng" src="img/arrowR.png"/>
      </div>
      <div class="posAbs"><img class="pokemon-imgCard background-colorC ${borderColor}" src="${getPokemonImage(pokemon)}"/></div>
      <div class="pokeData">
       <div id="options" class="options ${textDeco}">
        <p onclick="showPokemonStats()">STATS</p><p onclick="showPokemonMoves()">MOVES</p>
       </div>
       <div id="stats-section" class="abilites">
        <div class="abil-head">Abilities:</div>
        <div class="d-Flex20">
          <div>${abilitie1}</div>
          <div>${abilitie2}</div>
        </div>
        <div>
          <canvas id="myChart"></canvas>
        </div>
       </div>
      </div>
    </div>
    
  `;
}
function showPokemonMoves(){
  document.getElementById('stats-section').classList.add('d-none');
}
function showPokemonStats(){
  document.getElementById('stats-section').classList.remove('d-none');
}

function lightMode() {
  document.getElementById('body').classList.add('whiteBackground');
  document.getElementById('header').classList.add('whiteBackground');
  document.getElementById('header-font').classList.add('light-mode');
  document.getElementById('button1').classList.add('border-color');
  bgColorForEachPoke();
}

function bgColorForEachPoke(){
  for (let i = 0; i < allPokemons.length; i++) {
    document.getElementById(`background-of-pokemon${i}`).classList.add('whiteBackground');
}}
