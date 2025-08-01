import React from 'react'
import {tags} from '../../ReactConstants'



type Props = {
    _defaultValue: string
}

const SelectArmorValue: React.FC<Props> = ({_defaultValue}) => {
    // const options = []

    return (
        <input type='select' defaultValue={_defaultValue}>
            {/* {options} */}
        </input>
    )
}

export default SelectArmorValue
