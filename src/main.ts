import "./style.css";
import * as lodash from "lodash";

function addNumbers(number1: number, number2: number) {
  const result = number1 + number2;
  console.log(result);
}

console.log(addNumbers(8, 4));

const superCodeKebab = lodash.kebabCase("HALLO SUPERCODE!");
console.log("Supercode says: ", superCodeKebab);
