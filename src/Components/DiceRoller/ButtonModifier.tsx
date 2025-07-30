// import { attributes, display, event, inputType, tags, unit } from '../../ReactConstants/'



type Props = 
{
    modifier: number
}

const ModifierButton: React.FC<Props> = ({modifier}) => {
  return (
    <>
        <input type='button' className='modifier-btn' key={`btn(${modifier})`} value={modifier > 0 ? `+${modifier}`: modifier} />
    </>
  )
}

export default ModifierButton
