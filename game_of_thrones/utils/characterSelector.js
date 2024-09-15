import { arrayCharacter } from "./getCharacters";

const h2FullName = document.querySelector("#character-fullname");
const charImg = document.querySelector("#character-image");
const h3Title = document.querySelector("#character-title");
const h3Family = document.querySelector("#character-family");

const updateCharacterInfo = (id) => {
  const character = arrayCharacter.find((char) => char.id == id);
  if (character) {
    h2FullName.textContent = character.fullName;
    charImg.src = character.imageUrl;
    charImg.alt = character.fullName;
    h3Title.textContent = character.title;
    h3Family.textContent = character.family;
  }
};

export const charSelectListener = () => {
  const charList = document.querySelector("#character-list");
  charList.addEventListener("change", function (event) {
    const selectedChar = event.target.value;
    updateCharacterInfo(selectedChar);
  });
};
