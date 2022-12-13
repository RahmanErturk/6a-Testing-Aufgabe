const { multiply, hypotenuse } = require("./index.js");

test("returns a boolean", () => {
  expect(multiply()).toBe(false);
});

test("returns multiple of itself, if an argument is passed", () => {
  expect(multiply(3)).toBe(9);
});

test("returns boolean, if the passed argument isn't an integer", () => {
  expect(multiply(3.25)).toBe(false);
});

test("returns multiply of arguments, if two arguments are passed", () => {
  expect(multiply(3, 7)).toBe(21);
});

test("returns multiply of arguments, if more than two arguments are passed", () => {
  expect(multiply(3, 5, 4)).toBe(60);
});

// -----------------------------------------

test("throw an error, if exactly two parameters aren't passed", () => {
  expect(() => hypotenuse(3)).toThrow(Error);
});

test("throw an error, if the parameters aren't postive numbers", () => {
  expect(() => hypotenuse(3, -4)).toThrow(Error);
});

test("returns hypotenuse", () => {
  expect(hypotenuse(3, 4)).toBe(5);
});
