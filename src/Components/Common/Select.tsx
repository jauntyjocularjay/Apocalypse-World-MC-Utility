import { useState } from 'react'

type Props = {
    _key: string
    _form: string
    _options: React.ReactElement[]
}

const Select: React.FC<Props> = ({ _key, _form, _options }) => {
    const [value, setValue] = useState('')
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value)
    }


    return (
        <select key={_key} form={_form} value={value} onChange={handleChange}>
            {_options}
        </select>
    )
}

export default Select
