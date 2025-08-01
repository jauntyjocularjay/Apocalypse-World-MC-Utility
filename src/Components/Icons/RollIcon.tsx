import Icon from '../Icons/Icon'
import dice from '../../Assets/Icons/dice.svg'


type Props = {
    _onClick: () => void
}

const RollIcon: React.FC<Props> = ({ _onClick }) => {
    return <Icon _src={dice} _onClick={_onClick} />
}

export default RollIcon
