import { api, wrapper } from "@manwaring/lambda-wrapper";
import { ITwoDigits } from "../types/calculator";
import { addTwoDigits, divideTwoDigits } from "../businessLogic/calculator";

const add2 = api<ITwoDigits>(async ({ body, success, error }) => {
  try {
    const { number1, number2 } = body;
    const result = addTwoDigits(number1, number2);
    return success({ body: { result } });
  } catch (err) {
    return error({ body: err.message });
  }
});

const add = wrapper(async ({ event, success, error }) => {
  const { Records } = event;
  console.log("TRIGGERED");
  console.log("event.Records", Records.length);
  return success();
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
