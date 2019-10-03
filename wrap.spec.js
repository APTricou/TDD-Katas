const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("is a function", () => {
    expect(typeof wrap).to.be.a("function");
  });
  it("returns a string", ()=> {
      expect(typeof(wrap())).to.be.a("string")
  })
  it("accepts a string and an number,in that order", ()=>{
      expect(wrap("",1)).to.be.a("string")
      expect(wrap(1,"")).to.throw(TypeError, "arguments wrong")
  })
  it("returns an empty string if empty string is passed", ()=>{
    expect(wrap("",1)).to.be("")
  });
});

describe("wrap behavior", () => {
  it("breaks lines if number >= string length", () => {
    expect(wrap("str ing", 3)).to.be("str\ning");
    expect(wrap("string", 6)).to.be("string");
    expect(wrap("string", 7)).to.be("string");
  });
  it("doesn't break at the end of the string", () => {
    expect(wrap("str ing", 3)).to.be("str\ning");
  });
  it("inserts as many line breaks as expected", () => {
    expect(wrap("str ing", 3).lastIndexOf('\n')).to.be(3);
    expect(wrap("st ri ng", 2).lastIndexOf('\n')).to.be(6);
    expect(wrap("s t r i n g", 1).lastIndexOf('\n')).to.be(9);
  });
  it("length of each `row`", () => {
    const testString = wrap("alpha bet", 4);
    const splitString = testString.split('\n');
    const lastLine = splitString.pop();
    splitString.forEach(substring => {
      expect(substring.length).to.be(4)
    });
    expect([1,2,3,4]).to.include(lastLine.length);
  });
  // TO DO: breaking mid-word (it shouldn't)
});
