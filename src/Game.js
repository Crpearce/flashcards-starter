const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");

const Round = require("../src/Round");
const Deck = require("../src/Deck");
const Card = require("../src/Card");

class Game {
  constructor() {
  }

  createCards = () => {
    let cards = prototypeQuestions.reduce((acc, card) => {
      acc.push(card);
      return acc;
    }, []);
    this.cards = cards;
    return cards;
  };
  createDeck = () => {
    let deck = new Deck(this.createCards());
    return deck;
  };
  
  startRound = () => {
    let round = new Round(this.createDeck());
    return round;
  };

  start = () => {
    this.startRound();
    this.printMessage(this.createDeck(), this.startRound());
    this.printQuestion(this.startRound());
  };
  
  printQuestion = (round) => util.main(round);

  printMessage = (deck, round) =>
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
  -----------------------------------------------------------------------`);
}

module.exports = Game;
