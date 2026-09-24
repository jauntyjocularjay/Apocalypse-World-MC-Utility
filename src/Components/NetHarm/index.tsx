import React, { useState } from 'react'
import SelectHarmValue from './SelectHarmValue'
import SelectResistanceValue from './SelectResistanceValue'



type Props = {
    visible: boolean
}

export default function NetHarmCalculator ({visible}: Props) {
    const [harm, setHarm] = useState(0)
    const [resistance, setResistance] = useState(0)
    const classes = ['card']

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

    if(!visible) classes.push('hidden')

    return (
        <form
            name='harm-calculator'
            className={classes.join(' ')}
            flex-flow='row'
        >
            <h1>Harm Calculator</h1>
            <label form='harm-calculator' className='harm-calculator-output'>
                <SelectHarmValue onChange={onSelectHarm} />
                <SelectResistanceValue onChange={onSelectResistance} />
                <div className='net-harm-output'>{calculateHarm()}</div>
            </label>
        </form>
    )
}

