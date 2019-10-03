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
  }
  
});
