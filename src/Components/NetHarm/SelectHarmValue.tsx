import Option from "../Common/Option"



type Props = {
    onChange: (harm: number) => void
}

export default function SelectHarmValue({ onChange }:Props) {
    const options = [<Option key='harm' value='Harm' />]

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = parseInt(event.target.value)
        onChange(value)
    }

    for (let i = 0; i <= 10; i++) {
        options.push(<Option key={`resistance-${i}`} value={`${i}`} />)
    }

    return (
        <select
            className='harm-selector'
            defaultValue='Harm'
            onChange={handleChange}
        >
            {options}
        </select>
    )
}


