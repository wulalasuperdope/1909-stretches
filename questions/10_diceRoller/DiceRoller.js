// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
  constructor(sides, numDice){
    if(sides < 1 || numDice < 1){
      throw new Error
    }
    this.sides = sides
    this.numDice = numDice
    this.history = []
  }

  roll(){
    const allRolls = []
    for(cost _ of Array.this.numDice){

    }
  }

  
}

module.exports = { DiceRoller };
