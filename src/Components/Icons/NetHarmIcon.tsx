import NetHarm from '../../Assets/Icons/harm.svg'

type Props = {
    _onClick: () => void
}

const HarmIcon: React.FC<Props> = ({ _onClick }) => {
    return <img src={NetHarm} onClick={_onClick} className='icon' />
}

export default HarmIcon
