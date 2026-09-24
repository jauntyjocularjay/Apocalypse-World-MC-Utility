type Props = {
    value: string
}

export default function Option({ value }: Props) {
    return <option value={value}>{value}</option>
}
