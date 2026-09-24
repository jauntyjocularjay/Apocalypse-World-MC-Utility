
type Props = {
    src: string
    onClick: React.MouseEventHandler<HTMLImageElement>
}

export default function Icon({ src, onClick }: Props) {
    return <img key='icon' src={src} className='icon' onClick={onClick} />
}

