const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");
const Turn = require("../src/Turn");

describe("Round", function () {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  beforeEach(function () {
    card1 = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    card2 = new Card(
      2,
      "What is a comma-separated list of related values?",
      ["array", "object", "function"],
      "array"
    );
    card3 = new Card(
      3,
      "What type of prototype method directly modifies the existing array?",
      ["mutator method", "accessor method", "iteration method"],
      "mutator method"
    );
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it("should be a function", function () {
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", function () {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a deck', function() {
    expect(round.deck).to.equal(deck)
  })

  it("should start with the current card being the first card in the deck", function () {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should start with 0 turns', function() {
    expect(round.turns).to.equal(0)
  });

  it('should start with no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([])
  });

  it('should update turns count when user takes turn', function() {
    expect(round.turns).to.equal(0)
    round.takeTurn('object')
    expect(round.turns).to.equal(1)
    round.takeTurn('array')
    expect(round.turns).to.equal(2)
  });

  it('should update the current card after a user takes turn', function() {
    expect(round.returnCurrentCard()).to.equal(card1)
    round.takeTurn('object')
    expect(round.returnCurrentCard()).to.equal(card2)
    round.takeTurn('array')
    expect(round.returnCurrentCard()).to.equal(card3)
  });

  it('should update the current card after a user takes turn', function() {
    expect(round.returnCurrentCard()).to.equal(card1)
    round.takeTurn('object')
    expect(round.returnCurrentCard()).to.equal(card2)
    round.takeTurn('array')
    expect(round.returnCurrentCard()).to.equal(card3)
  });

  it('should provide feedback to answers', function() {
    expect(round.takeTurn(`object`)).to.equal('Correct!')
    expect(round.takeTurn(`Object.values()`)).to.equal('Incorrect!')
  })

  it('should calculate percentage of a users correct guesses', function() {
    round.takeTurn(`object`)
    expect(round.calculatePercentCorrect()).to.equal(100)
    round.takeTurn(`object`)
    expect(round.calculatePercentCorrect()).to.equal(50)
    round.takeTurn(`mutator method`)
    expect(round.calculatePercentCorrect()).to.deep.equal(66)
  })

  
});
