export let arrayCharacter = [];

export const getCharacters = async () => {
  try {
    const res = await fetch("https://thronesapi.com/api/v2/Characters");
    arrayCharacter = await res.json();
  } catch (error) {
    console.log("The server is not responding. Winter is coming");
    alert("The server is not responding. Winter is coming");
  }
};
