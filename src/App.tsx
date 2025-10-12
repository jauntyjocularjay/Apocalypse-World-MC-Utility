import { useState } from 'react'
import './App.css'
import DiceRoller from './Components/DiceRoller'
import IconBar from './Components/Navigation'
import NetHarmCalculator from './Components/NetHarm'
// import MoveDictionary from './Components/MoveDictionary'

function App() {
    let [_diceRollerVisisble, setDiceRollerVisisble] = useState(true)
    let [_netHarmVisisble, setNetHarmVisible] = useState(false)
    // let [_movesVisisble, setMovesVisible] = useState(false)

    const toggleDiceRoller = () => {
        setDiceRollerVisisble(() => _diceRollerVisisble = true)
        setNetHarmVisible(() => _netHarmVisisble = false)
        // setMovesVisible((prevState) => (prevState = false))
    }

    const toggleNetHarm = () => {
        setDiceRollerVisisble(() => (_diceRollerVisisble = false))
        setNetHarmVisible((prevState) => !prevState)
        // setMovesVisible((prevState) => (prevState = false))
    }

    // const toggleMoves = () => {
    //     setMovesVisible((prevState) => !prevState)
    //     setDiceRollerVisisble((prevState) => (prevState = false))
    //     setNetHarmVisible((prevState) => (prevState = false))
    // }

    return (
        <>
            <IconBar
                _toggleDiceRoller={toggleDiceRoller}
                _toggleNetHarm={toggleNetHarm}
                // _toggleMoves={toggleMoves}
            />
            <DiceRoller _visible={_diceRollerVisisble} />
            <NetHarmCalculator _visible={_netHarmVisisble} />
            {/* <MoveDictionary _visible={_movesVisisble} /> */}
        </>
    )
}

export default App
