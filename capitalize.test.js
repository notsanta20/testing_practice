const capitalize = require("./capitalize")


test('capitalize function is defined', () => {
  expect(capitalize).toBeDefined();
});

test(`capitalize first letter`, ()=>{
  expect(capitalize(`jest`)).toBe(`Jest`);
});

test(`lowercase other letters`, ()=>{
  expect(capitalize(`jEsT`)).toBe(`Jest`);
});

