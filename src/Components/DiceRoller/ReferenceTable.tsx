// import { attributes, display, event, inputType, tags, unit } from "../../ReactConstants/"

type Props = {
    die1: number
    die2: number
    modifier: number
}

const ReferenceTable: React.FC<Props> = ({ die1, die2, modifier }) => {

    const result = die1 + die2 + modifier
    return (
        <>
            <table className='result-table'>
                <thead>
                    <tr>
                        <th>Die 1</th>
                        <th>Die 2</th>
                        <th>Modifier</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{die1}</td>
                        <td>{die2}</td>
                        <td>{modifier > 0 ? `+${modifier}` : modifier}</td>
                        <td>{result}</td>
                    </tr>
                </tbody>
            </table>

            {/* <table className='probability-table'>
                <tr>
                    <th>Scale</th>
                    <td>Success</td>
                    <td>Fumble</td>
                    <td>Fail</td>
                </tr>
                <tr>
                    <th>%</th>
                    <td>0.00%</td>
                    <td>0.00%</td>
                    <td>0.00%</td>
                </tr>
            </table> */}
        </>
    )
}

export default ReferenceTable
