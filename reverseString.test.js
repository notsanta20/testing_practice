const reverseString = require("./reverseString")


test('reverseString function is defined', () => {
  expect(reverseString).toBeDefined();
});

test('return the given string in reversed order', () => {
  expect(reverseString(`jest`)).toBe(`tsej`);
});


