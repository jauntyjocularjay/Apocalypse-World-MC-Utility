import MovesSVG from '../../Assets/Icons/moves.svg'



type Props = {
    _onClick: () => void

}

const MovesIcon: React.FC<Props> = ({ _onClick }) => {
    return <img src={MovesSVG} className={'icon'} onClick={_onClick} />
}

export default MovesIcon
