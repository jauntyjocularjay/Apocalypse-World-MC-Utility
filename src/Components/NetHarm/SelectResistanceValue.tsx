import Option from '../Common/Option'



type Props = {
    _onChange: (resistance: number) => void
}

const SelectArmorValue: React.FC<Props> = ({ _onChange }) => {
    const options: React.JSX.Element[] = [
        <Option key='resistance' _value='Resistance' />
    ]

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = parseInt(event.target.value)
        _onChange(value)
    }

    for (let i = 0; i <= 10; i++) {
        options.push(<Option key={`resistance-${i}`} _value={`${i}`} />)
    }

    return (
        <select className='resistance-selector' defaultValue='Resistance' onChange={handleChange}>
            {options}
        </select>
    )
}

export default SelectArmorValue
