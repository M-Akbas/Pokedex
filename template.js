function getPokemonColor(pokemon) {
    let color = "";
    let pokemonType = getPokemonType(pokemon);
    if(pokemonType === "fire") {
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