import { getPokemon } from "./utils/getPokemon.js";
import { showPokemon } from "./utils/showPokemon.js";

getPokemon().then(() => {
  showPokemon();
});
