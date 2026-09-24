import Icon from '../Icons/Icon'
import NetHarm from '../../Assets/Icons/harm.svg'

type Props = {
    onClick: React.MouseEventHandler<HTMLImageElement>
}

export default function HarmIcon({ onClick }: Props) {
    return <Icon src={NetHarm} onClick={onClick} />
}


