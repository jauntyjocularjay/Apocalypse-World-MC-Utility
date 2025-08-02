import { useState } from 'react'
import SelectHarmValue from './SelectHarmValue'
import SelectResistanceValue from './SelectResistanceValue'

const NetHarmCalculator = () => {
    const [harm, setHarm] = useState(0)
    const [resistance, setResistance] = useState(0)

    function calculateHarm() {
        const result = harm - resistance
        return result > 0 ? result : 0
    }

    function onSelectHarm(harm: number) {
        setHarm(harm)
    }

    function onSelectResistance(resistance: number) {
        setResistance(resistance)
    }

    return (
        <form name='harm-calculator' className='card' flex-flow='row'>
            <h1>Harm Calculator</h1>
            <div className='harm-calculator-output'>
                <SelectHarmValue _onChange={onSelectHarm} />
                <SelectResistanceValue _onChange={onSelectResistance} />
                <div className='net-harm-output'>{calculateHarm()}</div>
            </div>
        </form>
    )
}

export default NetHarmCalculator
