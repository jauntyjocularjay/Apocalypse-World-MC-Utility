
type Props = {
    _src: string
    _onClick: () => void
}

const Icon: React.FC<Props> = ({ _src, _onClick }) => {
    return <img key='icon' src={_src} className='icon' onClick={_onClick} />
}

export default Icon
