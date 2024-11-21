const calculator = require("./calculator")


test('add function is defined', () => {
  expect(calculator.add).toBeDefined();
});


test(`adds two numbers`, () =>{
  expect(calculator.add(1,2)).toBe(3);
});

test('subtract function is defined', () => {
  expect(calculator.subtract).toBeDefined();
});

test(`subtracts two numbers`, () =>{
  expect(calculator.subtract(2,1)).toBe(1);
});

test('multiply function is defined', () => {
  expect(calculator.multiply).toBeDefined();
});

test(`multiples two numbers`, () =>{
  expect(calculator.multiply(2,2)).toBe(4);
});

test('divide function is defined', () => {
  expect(calculator.divide).toBeDefined();
});

test(`divides two numbers`, () =>{
  expect(calculator.divide(10,2)).toBe(5);
});
