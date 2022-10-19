#!/usr/bin/env node
import arithmeticCalculation from "./utils.js";

const showHelp = () => {
  console.log(`
Usage: calc <command> [numbers...]
  
Commands:
   addition|add|a   Addition of numbers
   subtraction|sub|s   Subtraction of numbers
   multiplication|mul|m   Multiplication of numbers
   division|div|d   Division of numbers
      
  example:
   calc addition 12 11
   calc sub 12 232
   calc m 12 11
   calc div 12 11
      `);
};

(() => {
  // parse arguments
  const args = process.argv.slice(2);

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
  ];

  //Check if command is valid
  if (!commands.find((c) => c.aliases.includes(command))) {
    showHelp();
    return;
  }

  const operation = commands.find((c) => c.aliases.includes(command)).name;

  arithmeticCalculation(operation, args.slice(1));
})();
