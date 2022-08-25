const Turn = require("../src/Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard = () => this.deck.cards[0];

  takeTurn = (userGuess) => {
    let turn = new Turn(userGuess, this.returnCurrentCard());
    let correct = 0;
    !turn.evaluateGuess() ? this.incorrectGuesses.push(this.returnCurrentCard()) : correct++;
    this.turns++;
    this.deck.cards.shift();
    return turn.giveFeedback();
  }

  calculatePercentCorrect = () => {
    let result = ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
      return Math.trunc(result);
  }

  endRound = () => {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    console.timeLog('Game Run Time')
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  };
}

module.exports = Round;
