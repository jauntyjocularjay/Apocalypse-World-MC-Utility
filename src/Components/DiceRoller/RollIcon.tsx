import dice from '../../assets/dice.svg'



type Props = {
    className: string
}

const RollIcon: React.FC<Props> = ({className}) => { 
    return (
        <div key={'roll-icon'} className={className}>
            <img src={dice} className='icon' />
        </div>
    )
}

export default RollIcon
