import RollIcon from '../Icons/RollIcon'
import HarmIcon from '../Icons/NetHarmIcon'
import MovesIcon from '../Icons/MovesIcon'



type Props = {
    _toggleDiceRoller: () => void
    _toggleNetHarm: () => void
    _toggleMoves: () => void
}

const IconBar: React.FC<Props> = ( { _toggleDiceRoller, _toggleNetHarm, _toggleMoves }) => {
    return (
        <div className='icon-bar'>
            <RollIcon _onClick={ _toggleDiceRoller} />
            <HarmIcon _onClick={ _toggleNetHarm } />
            <MovesIcon _onClick={ _toggleMoves } />
        </div>
    )
}

export default IconBar
