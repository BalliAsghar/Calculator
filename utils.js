import chalk from "chalk";
import boxen from "boxen";
// Colores
const error = chalk.bold.redBright;
const success = chalk.greenBright;
const info = chalk.yellowBright;
const title = chalk.bold.cyanBright;

const box = (text, title) =>
  console.log(
    boxen(text, {
      padding: 1,
      title: title,
      titleAlignment: "center",
      textAlignment: "center",
    })
  );

// Valid operations
const operations = {
  addition: "+",
  subtraction: "-",
  multiplication: "*",
  division: "/",
};

const arithmeticCalculation = (operation, numbers) => {
  if (numbers.length < 2) {
    box(error("Please enter at least two numbers"), "ERROR");
    return;
  }
  // convert strings to numbers, as commander parses all arguments as strings
  const numbersToCalculate = numbers.map((number) => Number(number));

  // validate the numbers
  const validNumbers = numbersToCalculate.every((number) => !isNaN(number));

  // throw error if any of the numbers is not a number
  if (!validNumbers) {
    box(error("Please enter valid numbers"), "ERROR");
    return;
  }

  // validate the operation type
  if (!operations[operation]) {
    box(error("Please enter a valid operation"), "ERROR");
    return;
  }

  // calculate the result
  const result = numbersToCalculate.reduce((acc, number) => {
    switch (operation) {
      case "addition":
        return acc + number;
      case "subtraction":
        return acc - number;
      case "multiplication":
        return acc * number;
      case "division":
        return acc / number;
      default:
        return acc;
    }
  });

  // display the result
  box(
    `${info(numbersToCalculate.join(` ${operations[operation]} `))} = ${success(
      result
    )}`,
    title(operation)
  );

  return result;
};

export default arithmeticCalculation;
