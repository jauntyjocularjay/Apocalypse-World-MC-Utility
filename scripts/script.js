
// Classes
class AWDice {
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

/*
  @class
  I wanted to replace the distribution object and wanted to 
  create an easy way to add segments of an array together.
  A DistributionArray adds a function to the Array class
  which allows a segment of elements in an array to be 
  added together easily. This particular implementation
  converts the inputs from a dice value to an index and
  adds those values together.
*/
class DistributionArray extends Array {
  arraySegmentSum(result1,result2){
    let result = 0.00;
    const i1 = result1 - 2;
    const i2 = result2 - 2;

    for( let i=i1 ; i<=i2 ; i++){
      i > 10 || i < 0 ? result += 0.00 : result += this[i];
    }

    return result;
  }
}

