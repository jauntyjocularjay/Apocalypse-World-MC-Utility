import { useState } from 'react'
import './App.css'
import DiceRoller from './Components/DiceRoller'
import IconBar from './Components/Navigation'
import NetHarmCalculator from './Components/NetHarm'
import MoveDictionary from './Components/MoveDictionary/'

export default function App() {
    let [diceRollerVisisble, setDiceRollerVisisble] = useState(true)
    let [netHarmVisisble, setNetHarmVisible] = useState(false)
    let [movesVisisble, setMovesVisible] = useState(false)

    const toggleDiceRoller = () => {
        setDiceRollerVisisble(() => (diceRollerVisisble = true))
        setNetHarmVisible(() => (netHarmVisisble = false))
        setMovesVisible(() => movesVisisble = false)
    }

    const toggleNetHarm = () => {
        setDiceRollerVisisble(() => (diceRollerVisisble = false))
        setNetHarmVisible(() => netHarmVisisble = true)
        setMovesVisible(() => movesVisisble = false)
    }

    const toggleMoves = () => {
        setDiceRollerVisisble(() => diceRollerVisisble = false)
        setNetHarmVisible(() => netHarmVisisble = false)
        setMovesVisible(() => (movesVisisble = true))
    }

    return (
        <>
            <IconBar
                toggleDiceRoller={toggleDiceRoller}
                toggleNetHarm={toggleNetHarm}
                toggleMoves={toggleMoves}
            />
            <DiceRoller visible={diceRollerVisisble} />
            <NetHarmCalculator visible={netHarmVisisble} />
            <MoveDictionary visible={movesVisisble} />
        </>
    )
}

