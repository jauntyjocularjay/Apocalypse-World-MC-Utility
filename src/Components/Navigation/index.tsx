import RollIcon from '../Icons/RollIcon'
import HarmIcon from '../Icons/NetHarmIcon'
import MovesIcon from '../Icons/MovesIcon'



type Props = {
    toggleDiceRoller: React.MouseEventHandler<HTMLImageElement>
    toggleNetHarm: React.MouseEventHandler<HTMLImageElement>
    toggleMoves: React.MouseEventHandler<HTMLImageElement>
}

export default function IconBar( { toggleDiceRoller, toggleNetHarm, toggleMoves }: Props) {
    return (
        <div className='icon-bar'>
            <RollIcon onClick={ toggleDiceRoller} />
            <HarmIcon onClick={ toggleNetHarm } />
            <MovesIcon onClick={ toggleMoves } />
        </div>
    )
}


