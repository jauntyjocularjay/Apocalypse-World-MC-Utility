import { useState } from 'react'
import ButtonModifier from './ButtonModifier'
import ReferenceTable from './ReferenceTable'
// import { attributes, display, event, inputType, tags, unit } from '../../ReactConstants/'



type Props = {
    _visible: boolean
}

const DiceRoller: React.FC<Props> = ( { _visible } ) => {

    let classes = [ 'card' ]
    const [_die1, setDie1] = useState(0)
    const [_die2, setDie2] = useState(0)
    const [_modifier, setModifier] = useState(0)

    if(!_visible) classes.push('hidden')

    function Buttons() {
        const min = -3
        const max = 4
        const buttons = []

        for (let i = min; i <= max; i++) {
            const button = (
                <ButtonModifier
                    key={`btn(${i})`}
                    modifier={i}
                    funct={onClickModifierButton}
                />
            )

            buttons.push(button)
        }

        return buttons
    }

    function onClickModifierButton(_modifier: number) {
        setDie1(Math.floor(1 + Math.random() * 6))
        setDie2(Math.floor(1 + Math.random() * 6))
        setModifier(_modifier)
    }

    return (
        <form name='dice-roller' className={classes.join(' ')}>
            <h1>Dice Roller + Modifier</h1>
            <div className='container buttons'>{Buttons()}</div>
            <ReferenceTable die1={_die1} die2={_die2} modifier={_modifier} />
        </form>
    )
}

export default DiceRoller
