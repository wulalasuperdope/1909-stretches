// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
  constructor(numOfSides, totalDice){
    if(numOfSides < 1 || totalDice < 1){
      throw 'err'
    }else{
      sides = numOfSides
      numDice = totalDice
    }
    this.history = []
  }

  roll(){
    let range = [min, max];
    let min = this.numDice;
    let max = this.numDice * this.sides
    return range
  }

  
}

module.exports = { DiceRoller };
