import Option from "./Option"



type Props = {
    _defaultValue: string
}


const SelectHarmValue: React.FC<Props> = ({_defaultValue}) => {
    
    const options = [
        <Option value='Armor' />
    ]

    return <input type='select' defaultValue={_defaultValue}></input>
}

export default SelectHarmValue
