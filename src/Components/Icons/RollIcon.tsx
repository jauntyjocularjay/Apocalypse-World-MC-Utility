import Icon from '../Icons/Icon'
import dice from '../../Assets/Icons/dice.svg'


type Props = {
    onClick: React.MouseEventHandler<HTMLImageElement>
}

export default function RollIcon({ onClick }: Props) {
    return <Icon src={dice} onClick={onClick} />
}


