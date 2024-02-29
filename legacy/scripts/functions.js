// Classes
/**
  @class
  AWDice contains the number of sides of dice in Apocalypse 
  World (6) and a function that simulates rolling dice 
  twice to give a result of rolling two dice.
*/
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

/**
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

// Functions
function statRollWithModifier(e){
  e.preventDefault();

  const dice = new AWDice(6);
  const modifier = parseInt(e.target.value);
  const result = dice.roll();
  const probability = new Object();

  //Success Distribution Array
  const d = new DistributionArray(
         //dice => index
    2.78,  // 2  = 0
    5.56,  // 3  = 1
    8.33,  // 4  = 2
    11.11, // 5  = 3
    13.89, // 6  = 4
    16.67, // 7  = 5
    13.89, // 8  = 6
    11.11, // 9  = 7
    8.33,  // 10 = 8
    5.56,  // 11 = 9
    2.78   // 12 = 10
  );
  
  /*
    @TODO Fix the outcome values of success, fumble, fail.
    Although they are in the right ball park, these values 
    no longer add up to 100% as they did when d was an 
    object. 
    The 0.01 modifier is there to adjust for rounding errors, 
    it cannot be added to success because at modifier -3 
    there is zero chance of rolling a success.
  */
  probability.success = d.arraySegmentSum(10-modifier,12-modifier);
  probability.fumble = d.arraySegmentSum(7-modifier, 9-modifier) - 0.01;
  probability.fail = d.arraySegmentSum(2-modifier,6-modifier);

  rollWithModifier.input1.textContent = result.d1;
  rollWithModifier.input2.textContent = result.d2;
  rollWithModifier.input3.textContent = modifier;
  rollWithModifier.output.textContent = result.d1 + result.d2 + modifier;
  rollWithModifier.success.textContent = probability.success.toFixed(2);
  rollWithModifier.fumble.textContent = probability.fumble.toFixed(2);
  rollWithModifier.fail.textContent = probability.fail.toFixed(2);
}

function collapseSuccessScale(){
  scaleCollapser.body.classList.toggle("hidden");
  scaleCollapser.prob.classList.toggle("hidden");
}

function calculateHarm(e) {
  e.preventDefault();

  let result = harmCalculator.weaponHarm.value - harmCalculator.armorHarm.value;
  result = (result < 0) ? 0 : result;

  harmCalculator.netHarm.textContent = result;
}

const basicMoves =  {
  displayMove(e) {
    e.preventDefault();
  
    const newElement = document.querySelector(`#${moveSelector.selector.value}`);
  
    if (moveSelector.currentElement === null) {
      moveSelector.currentElement = newElement;
      moveSelector.currentElement.classList.toggle("hidden");
    }
    else {
      moveSelector.currentElement.classList.toggle("hidden");
      moveSelector.currentElement = newElement;
      moveSelector.currentElement.classList.toggle("hidden");
    }
  },
  clearMove(e) {
    e.preventDefault();
  
    moveSelector.currentElement?.classList.toggle("hidden");
    moveSelector.currentElement = null;
  }
}

function generateCharacter(){
  
}