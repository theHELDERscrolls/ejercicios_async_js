import { randomNumberGenerator } from "./randomPoke.js";

export let pokemonItems = {};

export const getPokemon = async () => {
  try {
    const number = randomNumberGenerator();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
    const pokemonData = await res.json();
    pokemonItems = pokemonData;
  } catch (error) {
    console.error("The server is not responding.");
  }
};
