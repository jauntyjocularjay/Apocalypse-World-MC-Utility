import { useState } from 'react'
import './App.css'
import DiceRoller from './Components/DiceRoller'
import IconBar from './Components/Navigation'
import NetHarmCalculator from './Components/NetHarm'
import MoveDictionary from './Components/MoveDictionary'

function App() {
    const [_diceRollerVisisble, setDiceRollerVisisble] = useState(true)
    const [_netHarmVisisble, setNetHarmVisible] = useState(false)
    const [_movesVisisble, setMovesVisible] = useState(false)

    const toggleDiceRoller = () => {
        setDiceRollerVisisble((prevState) => !prevState)
        setNetHarmVisible((prevState) => (prevState = false))
        setMovesVisible((prevState) => (prevState = false))
    }

    const toggleNetHarm = () => {
        setNetHarmVisible((prevState) => !prevState)
        setDiceRollerVisisble((prevState) => (prevState = false))
        setMovesVisible((prevState) => (prevState = false))
    }

    const toggleMoves = () => {
        setMovesVisible((prevState) => !prevState)
        setDiceRollerVisisble((prevState) => (prevState = false))
        setNetHarmVisible((prevState) => (prevState = false))
    }

    return (
        <>
            <IconBar
                _toggleDiceRoller={toggleDiceRoller}
                _toggleNetHarm={toggleNetHarm}
                _toggleMoves={toggleMoves}
            />
            <DiceRoller _visible={_diceRollerVisisble} />
            <NetHarmCalculator _visible={_netHarmVisisble} />
            <MoveDictionary _visible={_movesVisisble} />
        </>
    )
}

export default App
