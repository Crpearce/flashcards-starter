class Turn {
    constructor(userGuess, card) {
        this.userGuess = userGuess;
        this.card = card;
    };

    returnGuess() {
        return this.userGuess;
    };

    returnCard() {
        return this.card;
    };

    evaluateGuess() {
        return this.userGuess === this.card.correctAnswer ? true : false;
    };
    giveFeedback() {
        return this.evaluateGuess() === true ? 'Correct!' : 'Incorrect!';
    };
};

module.exports = Turn;