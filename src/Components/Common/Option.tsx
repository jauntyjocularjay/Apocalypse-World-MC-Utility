import React from 'react'



type Props = {
    _value: string
}

const Option: React.FC<Props> = ({_value}) => {
  return ( <option value={_value}>{_value}</option> )
}

export default Option
