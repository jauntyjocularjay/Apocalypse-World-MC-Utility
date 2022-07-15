
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
const modValue = {
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
modValue.negThree.addEventListener("click", () => {statRollWithModifier(-3)});
modValue.negTwo.addEventListener("click", () => {statRollWithModifier(-2)});
modValue.negOne.addEventListener("click", () => {statRollWithModifier(-1)});
modValue.zero.addEventListener("click", () => {statRollWithModifier(0)});
modValue.one.addEventListener("click", () => {statRollWithModifier(1)});
modValue.two.addEventListener("click", () => {statRollWithModifier(2)});
modValue.three.addEventListener("click", () => {statRollWithModifier(3)});
modValue.four.addEventListener("click", () => {statRollWithModifier(4)});

// Harm Calculation EventListeners
submitHarm.addEventListener("click", () => {calculateHarm()});

// Dice Roller with Modifiers Functions
function statRollWithModifier(modifier) {
  const die = new Die(6);
  let d1 = die.roll();
  let d2 = die.roll();

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
