import Option from "./Option"



type Props = {
    _onChange: (harm: number) => void
}

const SelectHarmValue: React.FC<Props> = ({ _onChange }) => {
    const options = [<Option key='harm' _value='Harm' />]

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = parseInt(event.target.value)
        _onChange(value)
    }

    for (let i = 0; i <= 10; i++) {
        options.push(<Option key={`resistance-${i}`} _value={`${i}`} />)
    }

    return (
        <select className='harm-selector' defaultValue='Harm' onChange={handleChange}>
            {options}
        </select>
    )
}

export default SelectHarmValue
