import {
    // Constants
    display,
    flex,
    event,
    unit,
    tag,

    // Base Classes
    OptionSelection,
    StyleSheet,
    Listener,
    ListenerOnLoad,
    // FlexBoxClass,

    // Classables
    // // Containers
    Img,
    Div,
    DivBtn,
    FlexBox,
    Figure,
    Form,
    Label,
    // // Input
    Button,
    Input,
    TextArea,
    Select,
    Option,
    // // Format elements
    Br,
    //  // External Resource Links
    Link,
    Style,

    // Text Elements
    // // Headers
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    // // Body Text
    P,
    PSpan,
    Figcaption,
    A,
    Strong,
    Abbr,
    Blockquote,
    Sub,
    Sup,
    Span,
    Text,
    Code,
    Pre,

    // Functions
    getStylesheetByFileName,
    addAdoptedStyleSheet,

    // JSONCSS
    JSONCSS,
    UnsupportedJSONCSSError,
    PercentageOutOfRangeError
} from '../../index.mjs'


class DiceRoller extends FlexBox {
    constructor(){
        super(flex.c, ['embossedCard'], 'dice-roller')
        const h2 = new H2('Dice Roller with modifiers', [flex.flow.default], 'diceroller-header').element
        const instruction = new PSpan('Pick a modifier', ['instruction']).element

        const modifierBtns = [-3, -2, -1, 0, 1, 2, 3, 4]
        const modifierBtnsWrapper = new FlexBox(flex.r).element


        const outcomeTable = new FlexBox(flex.c, ['table', 'embossment']).element
        const outcomeBox = new FlexBox(flex.r).element

        const die1_box = new Div([flex.flow.default, 'cell'], 'die1').element
        const die1_h3 = new H3('Die 1', ['header']).element
        
        const die2_box = new Div([flex.flow.default, 'cell'], 'die2').element
        const die2_h3 = new H3('Die 2', ['header']).element

        const modifier_box = new Div([flex.flow.default, 'cell']).element
        const modifier_h3 = new H3('Modifier').element

        const total_box = new Div([flex.flow.default, 'cell']).element
        const total_h3 = new H3('Total').element
        const boxes = [die1_box, die2_box, modifier_box, total_box]
        const outcomes = ['die1-result', 'die2-result', 'modifier', 'result']

        modifierBtns.forEach(modifier => {
            const btn = (new DivBtn(modifier, ['modifier','embossment',flex.flow.default], `modifier(${modifier})`))
            modifierBtnsWrapper.appendChild(btn.element)
            btn.pushEventListenerObj(new Listener(event.element.click, () => {
                const d1 = this.roll()
                const d2 = this.roll()
                const modifier = parseInt(btn.element.textContent)
                const result = d1 + d2 + modifier
                outcomeTable.querySelector(`#${outcomes[0]}`).querySelector(tag.span).textContent = d1
                outcomeTable.querySelector(`#${outcomes[1]}`).querySelector(tag.span).textContent = d2
                outcomeTable.querySelector(`#${outcomes[2]}`).querySelector(tag.span).textContent = modifier
                outcomeTable.querySelector(`#${outcomes[3]}`).querySelector(tag.span).textContent = result
                
            }))
        })
        outcomeTable.appendChild(outcomeBox)
        outcomeBox.appendChild(die1_box)
        outcomeBox.appendChild(die2_box)
        outcomeBox.appendChild(modifier_box)
        outcomeBox.appendChild(total_box)
        die1_box.appendChild(die1_h3)
        die2_box.appendChild(die2_h3)
        modifier_box.appendChild(modifier_h3)
        total_box.appendChild(total_h3)

        let i=0;
        outcomes.forEach(outcome => {
            const pspan = new PSpan(0, ['outcome',flex.flow.default], outcome).element
            boxes[i].appendChild(pspan)
            i++
        })

        this.element.appendChild(h2)
        this.element.appendChild(instruction)
        this.element.appendChild(modifierBtnsWrapper)
        this.element.appendChild(outcomeTable)
        outcomeTable.appendChild(outcomeBox)

    }

    roll(){
        const result = Math.floor(Math.random() * 6)
        return result
    }
}

export { DiceRoller }