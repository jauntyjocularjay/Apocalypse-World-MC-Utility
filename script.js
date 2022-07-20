
// Dice Roller with Modifiers Classes
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

// HTML Elements
const Elements = {
  rollWithModifier: {
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
    fail: document.querySelector("#fail"),
    input1: document.getElementById("input1"),
    input2: document.getElementById("input2"),
    input3: document.getElementById("input3"),
    output: document.getElementById("output")
  },
  scaleCollapser: {
    head: document.querySelector("#successScaleHead"),
    prob: document.querySelector("#successScaleProbabilityHead"),
    body: document.querySelector("#successScaleBody")
  },
  calculateHarm: {
    submitHarm: document.querySelector("#submitHarm"),
    weaponHarm: document.querySelector("#weaponHarm"),
    armorHarm: document.querySelector("#armorHarm"),
    netHarm: document.querySelector("#netHarm")
  },
  basicMoves: {
    selector: document.querySelector("#basicMovesSelector"),
    showButton: document.querySelector("#getMove"),
    clearButton: document.querySelector("#clearMove"),
    currentElement: null //?
  }
};

// Event Listeners
const Listeners = {
  rollWithModifier: [
    Elements.rollWithModifier.negThree.addEventListener("click", (e) => { Functions.statRollWithModifier(e, -3) }),
    Elements.rollWithModifier.negTwo.addEventListener("click", (e) => { Functions.statRollWithModifier(e, -2) }),
    Elements.rollWithModifier.negOne.addEventListener("click", (e) => { Functions.statRollWithModifier(e, -1) }),
    Elements.rollWithModifier.zero.addEventListener("click", (e) => { Functions.statRollWithModifier(e, 0) }),
    Elements.rollWithModifier.one.addEventListener("click", (e) => { Functions.statRollWithModifier(e, 1) }),
    Elements.rollWithModifier.two.addEventListener("click", (e) => { Functions.statRollWithModifier(e, 2) }),
    Elements.rollWithModifier.three.addEventListener("click", (e) => { Functions.statRollWithModifier(e, 3) }),
    Elements.rollWithModifier.four.addEventListener("click", (e) => { Functions.statRollWithModifier(e, 4) })
  ],
  scaleCollapser: [
    Elements.scaleCollapser.head.addEventListener("click", () => { Functions.collapseSuccessScale() })
  ],
  calculateHarm: [
    Elements.calculateHarm.submitHarm.addEventListener("click", (e) => { Functions.calculateHarm(e) })
  ],
  basicMoves: [
    Elements.basicMoves.showButton.addEventListener("click", (e) => { Functions.basicMoves.displayMove(e) }),
    Elements.basicMoves.clearButton.addEventListener("click", (e) => { Functions.basicMoves.clearMove(e) })
  ]
};

// Functions
const Functions = {
  statRollWithModifier: (e, modifier) => {
    e.preventDefault();

    const dice = new AWDice(6);
    const result = dice.roll();
    const probability = new Object();
    //Success Distribution
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

    } else {
      alert(`Invalid Input in Functions.rollWithModifier()`);
    }

    Elements.rollWithModifier.input1.textContent = result.d1;
    Elements.rollWithModifier.input2.textContent = result.d2;
    Elements.rollWithModifier.input3.textContent = modifier;
    Elements.rollWithModifier.output.textContent = result.d1 + result.d2 + modifier;
    Elements.rollWithModifier.success.textContent = probability.success.toFixed(2);
    Elements.rollWithModifier.fumble.textContent = probability.fumble.toFixed(2);
    Elements.rollWithModifier.fail.textContent = probability.fail.toFixed(2);
  },
  collapseSuccessScale: () => {
    Elements.scaleCollapser.body.classList.toggle("hidden");
    Elements.scaleCollapser.prob.classList.toggle("hidden");
  },
  calculateHarm: (e) => {
    e.preventDefault();

    let result = Elements.calculateHarm.weaponHarm.value - Elements.calculateHarm.armorHarm.value;
    result = (result < 0) ? 0 : result;

    Elements.calculateHarm.netHarm.textContent = result;
  },
  basicMoves: {
    displayMove: (e) => {
      e.preventDefault();

      const newElement = document.querySelector(`#${Elements.basicMoves.selector.value}`);

      if (Elements.basicMoves.currentElement === null) {
        Elements.basicMoves.currentElement = newElement;
        Elements.basicMoves.currentElement.classList.toggle("hidden");
      }
      else {
        Elements.basicMoves.currentElement.classList.toggle("hidden");
        Elements.basicMoves.currentElement = newElement;
        Elements.basicMoves.currentElement.classList.toggle("hidden");
      }
    },
    clearMove: (e) => {
      e.preventDefault();

      Elements.basicMoves.currentElement?.classList.toggle("hidden");
      Elements.basicMoves.currentElement = null;
    }
  }
};
