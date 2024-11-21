const analyzeArray = require("./analyzeArray");

test(`analyzeArray is defined`, ()=>{
    expect(analyzeArray).toBeDefined();
});

test(`return object with avg`, ()=>{
    expect(analyzeArray([1,2,3]).avg).toBe(2);
});

test(`return object with min`, ()=>{
    expect(analyzeArray([1,2,3]).min).toBe(1);
});

test(`return object with max`, ()=>{
    expect(analyzeArray([1,2,3]).max).toBe(3);
});

test(`return object with len`, ()=>{
    expect(analyzeArray([1,2,3]).len).toBe(3);
});