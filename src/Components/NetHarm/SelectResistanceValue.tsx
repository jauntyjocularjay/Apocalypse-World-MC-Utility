import Option from '../Common/Option'



type Props = {
    onChange: (resistance: number) => void
}

export default function SelectArmorValue({ onChange }:Props) {
    const options: React.JSX.Element[] = [
        <Option key='resistance' value='Resistance' />
    ]

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = parseInt(event.target.value)
        onChange(value)
    }

    for (let i = 0; i <= 10; i++) {
        options.push(<Option key={`resistance-${i}`} value={`${i}`} />)
    }

    return (
        <select className='resistance-selector' defaultValue='Resistance' onChange={handleChange}>
            {options}
        </select>
    )
}
