import { useState } from 'react'
import './App.css'
import DiceRoller from './Components/DiceRoller'
import IconBar from './Components/Navigation'

function App() {
    const [_diceRollerVisisble, setDiceRollerVisisble] = useState(true)
    const [_netHarmVisisble, setNetHarmVisible] = useState(false)
    const [_movesVisisble, setMovesVisible] = useState(false)

    const toggleDiceRoller = () => {
        setDiceRollerVisisble((prevState) => {
            return !prevState
        })
    }
    const toggleNetHarm = () => {}
    const toggleMoves = () => {}

    return (
        <>
            <IconBar _toggleDiceRoller={toggleDiceRoller} _toggleNetHarm={toggleNetHarm} _toggleMoves={toggleMoves}/>
            <DiceRoller _visible={_diceRollerVisisble} />
        </>
    )
}

export default App
