const chai = require("chai");
const expect = chai.expect;

const { testData } = require("../src/testData");
const Game = require("../src/Game");
const Round = require("../src/Round");
const Deck = require("../src/Deck");
const Card = require("../src/Card");

describe("Game", function () {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  let game;

  beforeEach(function () {
    card1 = new Card(testData[0]);
    card2 = new Card(testData[1]);
    card3 = new Card(testData[2]);
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    game = new Game(round, deck);
  });

  it("should be a function", function () {
    expect(Game).to.be.a("function");
  });

  it("should be an instance of Game", function () {
    expect(game).to.be.an.instanceof(Game);
  });

  it("Should be an instance of Deck", () => {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it("Should instantiate a new Round", () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it("Should create a new deck with each round", () => {
    expect(game.startRound()).to.be.an("object");
  });
  
});
