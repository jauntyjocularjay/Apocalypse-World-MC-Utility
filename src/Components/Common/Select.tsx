type Props = {
    id: string
    form: string
    options: React.ReactElement[]
    value: string
    onChange: (value: string) => void
}

export default function Select({ id, form, options, value, onChange }: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value)
    }


    return (
        <select id={id} form={form} value={value} onChange={handleChange}>
            {options}
        </select>
    )
}


