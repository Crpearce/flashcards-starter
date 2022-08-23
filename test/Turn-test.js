const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Turn", function () {
  let turn;
  let card;

  beforeEach(function () {
    card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    turn = new Turn("object", card);
  });

  it("should be a function", function () {
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", function () {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should return the current card", function () {
    expect(turn.returnCard()).to.equal(card);
  });

  it("should return the user guess", function () {
    expect(turn.returnGuess()).to.equal("object");
  });

  it("should evaluate the guess to true when correct", function () {
    expect(turn.evaluateGuess()).to.deep.equal(true);
  });

  it("should give positive feeback based on the result of the guess", function () {
    expect(turn.giveFeedback()).to.equal("Correct!");
  });

  it("should give negative feeback based on the result of the guess", function () {
    turn = new Turn("test", card);
    expect(turn.giveFeedback()).to.equal("Incorrect!");
  });
});
