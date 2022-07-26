// HTML Elements
const rollWithModifier = {
  modifierDiv: document.querySelector("#RollModifier"),
  success: document.querySelector("#success"),
  fumble: document.querySelector("#fumble"),
  fail: document.querySelector("#fail"),
  input1: document.getElementById("input1"),
  input2: document.getElementById("input2"),
  input3: document.getElementById("input3"),
  output: document.getElementById("output")
}

const scaleCollapser = {
  head: document.querySelector("#successScaleHead"),
  prob: document.querySelector("#successScaleProbabilityHead"),
  body: document.querySelector("#successScaleBody")
}

const harmCalculator = {
  submitHarm: document.querySelector("#submitHarm"),
  weaponHarm: document.querySelector("#weaponHarm"),
  armorHarm: document.querySelector("#armorHarm"),
  netHarm: document.querySelector("#netHarm")
}

const basicMoves = {
  selector: document.querySelector("#basicMovesSelector"),
  showButton: document.querySelector("#getMove"),
  clearButton: document.querySelector("#clearMove"),
  currentElement: null
}

