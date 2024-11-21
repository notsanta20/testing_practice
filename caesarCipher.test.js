const caesarCipher = require("./caesarCipher");

test(`caesarCipher function is defined`, ()=>{
    expect(caesarCipher).toBeDefined();
});

test(`converts given value to caesarCipher`, ()=>{
    expect(caesarCipher(`abc`,3)).toBe(`def`);
});

test(`should preserve the casing`, ()=>{
    expect(caesarCipher(`HeLLo`)).toBe(`KhOOr`);
});

test(`should preserve the casing`, ()=>{
    expect(caesarCipher(`hello World!`)).toBe(`KhOOr, Zruog!`);
});

