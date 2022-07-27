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

