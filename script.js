
// Dice Roller with Modifiers Classes
class AWDice {
  constructor() {
    this.sides = 6;
    this.count = 2;
  }

  roll() {
    const result = new Object();
    result.d1 = Math.floor(Math.random() * this.sides) + 1;
    result.d2 = Math.floor(Math.random() * this.sides) + 1;
    return result;
  }
}

// Dice Roller with Modifiers Elements
const modifierElements = {
  negThree: document.querySelector("#rollNegThree"),
  negTwo: document.querySelector("#rollNegTwo"),
  negOne: document.querySelector("#rollNegOne"),
  zero: document.querySelector("#rollZero"),
  one: document.querySelector("#rollOne"),
  two: document.querySelector("#rollTwo"),
  three: document.querySelector("#rollThree"),
  four: document.querySelector("#rollFour"),
  success: document.querySelector("#success"),
  fumble: document.querySelector("#fumble"),
  fail: document.querySelector("#fail")
};

// Success Scale Collapser Elements
const scaleCollapser = {
  head: document.querySelector("#successScaleHead"),
  prob: document.querySelector("#successScaleProbabilityHead"),
  body: document.querySelector("#successScaleBody")
}

// Harm Calculation Elements
const submitHarm = document.querySelector("#submitHarm");

// Basic Moves Elements
const basicMoves = {
  selector: document.querySelector("#basicMovesSelector"),
  button: document.querySelector("#getMove"),
  current: null
};

// Dice Roller with Modifiers EventListeners
const diceRoller = {
  dice1: modifierElements.negThree.addEventListener("click", () => { statRollWithModifier(-3) }),
  dice2: modifierElements.negTwo.addEventListener("click", () => { statRollWithModifier(-2) }),
  dice3: modifierElements.negOne.addEventListener("click", () => { statRollWithModifier(-1) }),
  dice4: modifierElements.zero.addEventListener("click", () => { statRollWithModifier(0) }),
  dice5: modifierElements.one.addEventListener("click", () => { statRollWithModifier(1) }),
  dice6: modifierElements.two.addEventListener("click", () => { statRollWithModifier(2) }),
  dice7: modifierElements.three.addEventListener("click", () => { statRollWithModifier(3) }),
  dice8: modifierElements.four.addEventListener("click", () => { statRollWithModifier(4) })
}

// Success Scale Collapser EventListeners
scaleCollapser.head.addEventListener("click", () => { collapseSuccessScale() })

// Harm Calculation EventListeners
submitHarm.addEventListener("click", (e) => { calculateHarm(e) });

// Basic Moves EventListeners
basicMoves.button.addEventListener("click", (e) => { displayBasicMove(e) });

// Dice Roller with Modifiers Functions
function statRollWithModifier(modifier) {
  const dice = new AWDice(6);
  const result = dice.roll();
  const probability = new Object();
  // Distribution
  const d = {
    r2: 2.78,
    r3: 5.56,
    r4: 8.33,
    r5: 11.11,
    r6: 13.89,
    r7: 16.67,
    r8: 13.89,
    r9: 11.11,
    r10: 8.33,
    r11: 5.56,
    r12: 2.78
  };

  if (modifier === -3) {

    probability.success = 0.00;
    probability.fumble = d.r12 + d.r11 + d.r10 - 0.01;
    probability.fail = d.r9 + d.r8 + d.r7 + d.r6 + d.r5 + d.r4 + d.r3 + d.r2;

  } else if (modifier === -2) {

    probability.success = d.r12 - 0.01;
    probability.fumble = d.r11 + d.r10 + d.r9;
    probability.fail = d.r8 + d.r7 + d.r6 + d.r5 + d.r4 + d.r3 + d.r2;

  } else if (modifier === -1) {

    probability.success = d.r12 + d.r11 - 0.01;
    probability.fumble = d.r10 + d.r9 + d.r8;
    probability.fail = d.r7 + d.r6 + d.r5 + d.r4 + d.r3 + d.r2;

  } else if (modifier === 0) {

    probability.success = d.r12 + d.r11 + d.r10 - 0.01;
    probability.fumble = d.r9 + d.r8 + d.r7;
    probability.fail = d.r6 + d.r5 + d.r4 + d.r3 + d.r2;

  } else if (modifier === 1) {

    probability.success = d.r12 + d.r11 + d.r10 + d.r9 - 0.01;
    probability.fumble = d.r8 + d.r7 + d.r6;
    probability.fail = d.r5 + d.r4 + d.r3 + d.r2;

  } else if (modifier === 2) {

    probability.success = d.r12 + d.r11 + d.r10 + d.r9 + d.r8 - 0.01;
    probability.fumble = d.r7 + d.r6 + d.r5;
    probability.fail = d.r4 + d.r3 + d.r2;

  } else if (modifier === 3) {

    probability.success = d.r12 + d.r11 + d.r10 + d.r9 + d.r8 + d.r7 - 0.01;
    probability.fumble = d.r6 + d.r5 + d.r4;
    probability.fail = d.r3 + d.r2;

  } else if (modifier === 4) {

    probability.success = d.r12 + d.r11 + d.r10 + d.r9 + d.r8 + d.r7 + d.r6 - 0.01;
    probability.fumble = d.r5 + d.r4 + d.r3;
    probability.fail = d.r2;

  }

  document.getElementById("input1").textContent = result.d1;
  document.getElementById("input2").textContent = result.d2;
  document.getElementById("input3").textContent = modifier;
  document.getElementById("output").textContent = result.d1 + result.d2 + modifier;
  modifierElements.success.textContent = probability.success.toFixed(2);
  modifierElements.fumble.textContent = probability.fumble.toFixed(2);
  modifierElements.fail.textContent = probability.fail.toFixed(2);

}

// Success Scale Collapser functions
function collapseSuccessScale() {
  scaleCollapser.body.classList.toggle("hidden");
  scaleCollapser.prob.classList.toggle("hidden");
}

// Harm Calculation Functions
function calculateHarm(e) {
  e.preventDefault();
  
  const weaponHarm = document.querySelector("#weaponHarm").value;
  const armorHarm = document.querySelector("#armorHarm").value;
  let result = weaponHarm - armorHarm;

  result = (result < 0) ? 0 : result;

  document.querySelector("#netHarm").textContent = result;
}

// Basic Moves EventListeners
function displayBasicMove(e) {
  e.preventDefault();

  if (basicMoves.current != null) {
    basicMoves.current.classList.toggle("hidden");
    basicMoves.current = document.querySelector(`#${basicMoves.selector.value}`);
    basicMoves.current.classList.toggle("hidden");
  } else {
    basicMoves.current = document.querySelector(`#${basicMoves.selector.value}`);
    basicMoves.current.classList.toggle("hidden");
  }

}
