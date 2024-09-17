let randomNumber = 1;

export const randomNumberGenerator = () => {
  const min = 1;
  const max = 151;
  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};

export { randomNumber };
