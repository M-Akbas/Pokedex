function getPokemonColor(pokemon) {
  let color = "";
  let pokemonType = getPokemonType(pokemon);
  if (pokemonType === "fire") {
    color = "bg-fire";
  } else if (pokemonType === "water") {
    color = "bg-water";
  } else if (pokemonType === "bug") {
    color = "bg-bug";
  } else if (pokemonType === "normal") {
    color = "bg-normal";
  } else if (pokemonType === "poison") {
    color = "bg-poison";
  } else if (pokemonType === "electric") {
    color = "bg-electric";
  } else if (pokemonType === "ground") {
    color = "bg-ground";
  } else if (pokemonType === "fairy") {
    color = "bg-fairy";
  } else if (pokemonType === "grass") {
    color = "bg-grass";
  } else if (pokemonType === "psychic") {
    color = "bg-psychic";
  } else if (pokemonType === "fighting") {
    color = "bg-fighting";
  } else if (pokemonType === "dragon") {
    color = "bg-dragon";
  } else if (pokemonType === "rock") {
    color = "bg-rock";
  } else if (pokemonType === "ghost") {
    color = "bg-ghost";
  } else if (pokemonType === "ice") {
    color = "bg-ice";
  }
  return color;
}
function getPokemonTextColor(pokemon){
  let textDeco = "";
  let pokemonType = getPokemonType(pokemon);
  if (pokemonType === "fire") {
    textDeco = "bg-fire-txt";
  } else if (pokemonType === "water") {
    textDeco = "bg-water-txt";
  } else if (pokemonType === "bug") {
    textDeco = "bg-bug-txt";
  } else if (pokemonType === "normal") {
    textDeco = "bg-normal-txt";
  } else if (pokemonType === "poison") {
    textDeco = "bg-poison-txt";
  } else if (pokemonType === "electric") {
    textDeco = "bg-electric-txt";
  } else if (pokemonType === "ground") {
    textDeco = "bg-ground-txt";
  } else if (pokemonType === "fairy") {
    textDeco = "bg-fairy-txt";
  } else if (pokemonType === "grass") {
    textDeco = "bg-grass-txt";
  } else if (pokemonType === "psychic") {
    textDeco = "bg-psychic-txt";
  } else if (pokemonType === "fighting") {
    textDeco = "bg-fighting-txt";
  } else if (pokemonType === "dragon") {
    textDeco = "bg-dragon-txt";
  } else if (pokemonType === "rock") {
    textDeco = "bg-rock-txt";
  } else if (pokemonType === "ghost") {
    textDeco = "bg-ghost-txt";
  } else if (pokemonType === "ice") {
    textDeco = "bg-ice-txt";
  }
  return textDeco;
}


 function getBorderColor(pokemon){
  let borderColor = "";
  let pokemonType = getPokemonType(pokemon);
  if (pokemonType === "fire") {
    borderColor = "bg-fire-border-color";
  } else if (pokemonType === "water") {
    textDeco = "bg-water-border-color";
  } else if (pokemonType === "bug") {
    borderColor = "bg-bug-border-color";
  } else if (pokemonType === "normal") {
    borderColor = "bg-normal-border-color";
  } else if (pokemonType === "poison") {
    borderColor = "bg-poison-border-color";
  } else if (pokemonType === "electric") {
    borderColor = "bg-electric-border-color";
  } else if (pokemonType === "ground") {
    borderColor = "bg-ground-border-color";
  } else if (pokemonType === "fairy") {
    borderColor = "bg-fairy-border-color";
  } else if (pokemonType === "grass") {
    borderColor = "bg-grass-border-color";
  } else if (pokemonType === "psychic") {
    borderColor = "bg-psychic-border-color";
  } else if (pokemonType === "fighting") {
    borderColor = "bg-fighting-border-color";
  } else if (pokemonType === "dragon") {
    borderColor = "bg-dragon-border-color";
  } else if (pokemonType === "rock") {
    borderColor = "bg-rock-border-color";
  } else if (pokemonType === "ghost") {
    borderColor = "bg-ghost-border-color";
  } else if (pokemonType === "ice") {
    borderColor = "bg-ice-border-color";
  }
  return borderColor;
}
