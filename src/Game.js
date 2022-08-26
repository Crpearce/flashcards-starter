const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");

const Round = require("../src/Round");
const Deck = require("../src/Deck");

class Game {
  constructor() {
    this.currentRound;
  }
  
  start = () => {
    this.startRound();
    this.printMessage(this.createDeck(), this.startRound());
    this.printQuestion(this.startRound());
  };

  startRound = () => {
    this.currentRound = new Round(this.createDeck());
    return this.currentRound;
  };

  createDeck = () => {
    let deck = new Deck(this.createCards());
    return deck;
  };

  createCards = () => {
    let cards = prototypeQuestions.map(card => card)
    return cards;
  };
  
  printQuestion = (round) => util.main(round);

  printMessage = (deck, round) =>
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
  -----------------------------------------------------------------------`);
}

module.exports = Game;
