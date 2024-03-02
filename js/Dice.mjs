// Classes
/**
  @class
  AWDice contains the number of sides of dice in Apocalypse 
  World (6) and a function that simulates rolling dice 
  twice to give a result of rolling two dice.
*/
class DoubleDice6 {
    constructor() {
      this.sides = 6;
    }
  
    roll() {
      const result = {
        d1: Math.floor(Math.random() * this.sides) + 1,
        d2: Math.floor(Math.random() * this.sides) + 1
      }
      return result;
    }
}

export { 
    DoubleDice6
}