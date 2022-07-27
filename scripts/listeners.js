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
  moveSelector.showButton.addEventListener("click", (e) => {
    basicMoves.displayMove(e) 
  }),
  moveSelector.clearButton.addEventListener("click", (e) => {
    basicMoves.clearMove(e) 
  })
];