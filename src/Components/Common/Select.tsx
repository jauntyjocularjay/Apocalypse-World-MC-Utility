import { useState } from 'react'

type Props = {
    _key: string
    _form: string
    _options: React.ReactElement[]
}

const Select: React.FC<Props> = ({ _key, _form, _options }) => {
    const [value, setValue] = useState('')


    return (<select key={_key} form={_form} onChange={() => setValue}>
        {_options}
    </select>)
}

export default Select
