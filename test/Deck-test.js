const chai = require("chai");
const expect = chai.expect;

const { testData } = require("../src/testData");
const Card = require("../src/Card");
const Deck = require("../src/Deck");

describe("Deck", function () {
  let card1;
  let card2;
  let card3;
  let deck;

  beforeEach(function () {
    card1 = new Card(testData[0]);
    card2 = new Card(testData[1]);
    card3 = new Card(testData[2]);
    deck = new Deck([card1, card2, card3])
  });

  it("should be a function", function () {
    expect(Deck).to.be.a("function");
  });

  it("should be an instance of Deck", function () {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it("should contain cards", function () {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it("should have a deck length", function () {
    expect(deck.countCards()).to.equal(3);
  });
});
