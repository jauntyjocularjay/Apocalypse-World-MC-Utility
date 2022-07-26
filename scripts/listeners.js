/*
  Event listeners are stored here.
*/

const rollListener = [
  rollWithModifier.modifierDiv.addEventListener("click", (e) => { statRollWithModifier(e) })
];

const successListener = [
  scaleCollapser.head.addEventListener("click", () => { collapseSuccessScale() })
];

const harmListener = [
  harmCalculator.submitHarm.addEventListener("click", (e) => { calculateHarm(e) })
];

const movesListener = [
  basicMoves.showButton.addEventListener("click", (e) => { displayMove(e) }),
  basicMoves.clearButton.addEventListener("click", (e) => { clearMove(e) })
];