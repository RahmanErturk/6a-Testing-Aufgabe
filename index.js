const { log } = require("console");

function multiply(...args) {
  for (const elem of args) {
    if (elem !== parseInt(elem)) return false;
  }
  if (args.length === 1) return Math.pow(args[0], 2);
  if (args.length > 1) return args.reduce((acc, val) => acc * val, 1);
  return false;
}

function hypotenuse(...args) {
  if (args.length !== 2)
    throw new Error("At least 2 parameters must be entered.");

  for (const arg of args) {
    if (arg !== Math.abs(arg))
      throw new Error("The parameters should be positive number.");
  }

  const c = Math.sqrt(Math.pow(args[0], 2) + Math.pow(args[1], 2));

  return c;
}

// console.log(hypotenuse(3, 4));

module.exports = { multiply, hypotenuse };
