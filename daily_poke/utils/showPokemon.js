import { pokemonItems } from "./getPokemon.js";

export const showPokemon = () => {
  const img = document.querySelector("#random_poke");
  const h2 = document.querySelector("#name_poke");
  const p = document.querySelector("#id_poke");

  if (pokemonItems) {
    h2.textContent = pokemonItems.name;
    p.textContent = pokemonItems.id;
    img.alt = pokemonItems.name;
    img.src = pokemonItems.sprites.front_default;
  }
};