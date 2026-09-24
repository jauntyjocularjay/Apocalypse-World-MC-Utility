// import { attributes, display, event, inputType, tags, unit } from '../../ReactConstants/'



type Props = {
    modifier: number
    funct: (modifier: number) => void
}

export default function ModifierButton({ modifier, funct }: Props) {
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


