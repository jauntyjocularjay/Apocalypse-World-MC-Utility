import ButtonModifier from './ButtonModifier'
import ReferenceTable from './ReferenceTable'
// import { attributes, display, event, inputType, tags, unit } from '../../ReactConstants/'

const DiceRoller = () => {
    const min = -3
    const max = 4
    const buttons = []


    for(let i = min; i <= max; i++)
    {
        buttons.push(<ButtonModifier modifier={i} />)
    }

    return (
        <div className='card'>
            <h1>Dice Roller + Modifier</h1>
            <div className='container buttons'>
                {buttons}
            </div>
            <ReferenceTable die1={0} die2={0} modifier={0} />
        </div>
  )
}

function RollDie()
{
    return Math.floor( 1 + (Math.random() * 6))
}

export default DiceRoller
