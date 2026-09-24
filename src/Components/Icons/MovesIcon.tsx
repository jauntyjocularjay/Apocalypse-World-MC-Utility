import Icon from '../Icons/Icon'
import MovesSVG from '../../Assets/Icons/moves.svg'



type Props = {
    onClick: React.MouseEventHandler<HTMLImageElement>
}

export default function MovesIcon({ onClick }: Props) {
    return <Icon src={MovesSVG} onClick={onClick} />
}

