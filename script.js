
// Dice Roller with Modifiers Classes
class Die {
  constructor(sided) {
    this.sides = sided;
  }

  roll() {
    const result = Math.floor(Math.random() * this.sides) + 1;
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
  four: document.querySelector("#rollFour")
};

// Harm Calculation Elements
const submitHarm = document.querySelector("#submitHarm")

// Dice Roller with Modifiers EventListeners
const diceRoller =  {
  dice1: modifierElements.negThree.addEventListener("click", () => {statRollWithModifier(-3)}),
  dice2: modifierElements.negTwo.addEventListener("click", () => {statRollWithModifier(-2)}),
  dice3: modifierElements.negOne.addEventListener("click", () => {statRollWithModifier(-1)}),
  dice4: modifierElements.zero.addEventListener("click", () => {statRollWithModifier(0)}),
  dice5: modifierElements.one.addEventListener("click", () => {statRollWithModifier(1)}),
  dice6: modifierElements.two.addEventListener("click", () => {statRollWithModifier(2)}),
  dice7: modifierElements.three.addEventListener("click", () => {statRollWithModifier(3)}),
  dice8: modifierElements.four.addEventListener("click", () => {statRollWithModifier(4)})
}

// Harm Calculation EventListeners
submitHarm.addEventListener("click", () => {calculateHarm()});

// Dice Roller with Modifiers Functions
function statRollWithModifier(modifier) {
  const die = new Die(6);
  const d1 = die.roll();
  const d2 = die.roll();

  document.getElementById("input1").textContent = d1;
  document.getElementById("input2").textContent = d2;
  document.getElementById("input3").textContent = modifier;
  document.getElementById("output").textContent = d1 + d2 + modifier;
}

// Harm Calculation Functions
function calculateHarm(){
  const weaponHarm = document.querySelector("#weaponHarm").value;
  const armorHarm = document.querySelector("#armorHarm").value;
  let result = weaponHarm - armorHarm;

  result = (result < 0) ? 0 : result;

  document.querySelector("#netHarm").textContent = result;
}
