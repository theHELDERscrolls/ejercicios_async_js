import { arrayCharacter, getCharacters } from "./getCharacters.js";

export const createOptions = () => {
  const select = document.querySelector("#character-list");

  getCharacters().then(() => {
    arrayCharacter.forEach((character) => {
      let option = document.createElement("option");
      option.value = character.id;
      option.textContent = character.fullName;
      select.appendChild(option);
    });
  });
};
