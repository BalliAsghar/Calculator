#!/usr/bin/env node
import { arithmeticCalculation, calculator } from "./utils.js";

const showHelp = () => {
  console.log(`
Usage: calc <command> [numbers...]
  
Commands:
   addition|add|a   Addition
   subtraction|sub|s   Subtraction
   multiplication|mul|m   Multiplication
   division|div|d   Division

   help|h   Show help
      
  example:
   calc # opens the calculator in interactive mode
   calc addition 12 11
   calc sub 12 232
   calc m 12 11
   calc div 12 11
      `);
};

(() => {
  // parse arguments
  const args = process.argv.slice(2);

  // if no arguments are passed, start the interactive mode of the calculator
  if (args.length === 0) {
    calculator();
    return;
  }

  const command = args[0];

  //Cammands and their aliases
  const commands = [
    {
      name: "addition",
      aliases: ["a", "add", "addition"],
    },
    {
      name: "subtraction",
      aliases: ["s", "sub", "subtraction"],
    },
    {
      name: "multiplication",
      aliases: ["m", "mul", "multiplication"],
    },
    {
      name: "division",
      aliases: ["d", "div", "division"],
    },
    {
      name: "help",
      aliases: ["h", "help"],
    },
  ];

  //Check if command is valid
  if (!commands.find((c) => c.aliases.includes(command))) {
    showHelp();
    return;
  }

  if (command === "help" || command === "h") {
    showHelp();
    return;
  }

  const operation = commands.find((c) => c.aliases.includes(command)).name;

  arithmeticCalculation(operation, args.slice(1));
})();
