import { api } from "@manwaring/lambda-wrapper";
import { ITwoDigits } from "../types/calculator";
import { addTwoDigits, divideTwoDigits } from "../businessLogic/calculator";

const add = api<ITwoDigits>(async ({ body, success, error }) => {
  try {
    const { number1, number2 } = body;
    const result = addTwoDigits(number1, number2);
    return success({ body: { result } });
  } catch (err) {
    return error({ body: err.message });
  }
});
const divide = api<ITwoDigits>(async ({ body, success, error }) => {
  try {
    const { number1, number2 } = body;
    const result = divideTwoDigits(number1, number2);
    return success({ body: result });
  } catch (err) {
    return error({ body: err.message });
  }
});
export { add, divide };
