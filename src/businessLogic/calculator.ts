import { ITwoDigitsOperation } from "../types/calculator";

const addTwoDigits: ITwoDigitsOperation = (number1, number2) => {
  return number1 + number2;
};
const divideTwoDigits: ITwoDigitsOperation = (number1, number2) => {
  if (number2 === 0) {
    throw new Error("Division by 0 detected");
  }
  return number1 / number2;
};

export { addTwoDigits, divideTwoDigits };
