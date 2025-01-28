import './Table.sass'

type Props = {
  columns: { name: string }[],
  data: any
}

const Table = (props: Props) => {

  return (
    <table className="table-block">
      <thead>
        <tr>
          {props.columns.map(item => <th>{item.name}</th>)}
        </tr>
      </thead>
      <tbody>
        { props.data?.map((row: any) => (
          <tr>
            { row.map((cell: any) => (
              <td>{ cell }</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table