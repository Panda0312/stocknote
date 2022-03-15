import { useMemo } from 'react'
import { useTable, Column } from 'react-table'

export default () => {
  const data = useMemo(() => [
    { col1: '001', col2: 'react1' },
    { col1: '002', col2: 'react2' },
    { col1: '003', col2: 'react3' },
    { col1: '004', col2: 'react4' },
    { col1: '005', col2: 'react5' },
    { col1: '006', col2: 'react6' }
  ], [])

  const columns = useMemo<Column<{ col1: string, col2: string }>[]>(() => [
    { Header: 'Column 1', accessor: 'col1' },
    { Header: 'Column 2', accessor: 'col2' }
  ], [])

  const tableIns = useTable({ columns, data })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableIns

  return (
    <table {...getTableProps()}>
      <thead>
        {
          headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {
                row.cells.map(cell => (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))
              }
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}