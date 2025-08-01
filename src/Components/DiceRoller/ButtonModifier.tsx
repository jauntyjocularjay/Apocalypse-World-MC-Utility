// import { attributes, display, event, inputType, tags, unit } from '../../ReactConstants/'



type Props = {
    modifier: number
    funct: Function
}

const ModifierButton: React.FC<Props> = ({ modifier, funct }) => {

    return (
        <>
            <input
                type='button'
                className='modifier-btn'
                value={modifier > 0 ? `+${modifier}` : modifier}
                onClick={() => funct(modifier)}
            />
        </>
    )
}

export default ModifierButton
