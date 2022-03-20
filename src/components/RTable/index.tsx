import styled from 'styled-components'
import { useEffect, useMemo } from 'react'
import {
  Column,
  useBlockLayout,
  useExpanded,
  // useBlockLayout,
  useFlexLayout,
  useResizeColumns,
  useSortBy,
  useTable
} from 'react-table'
import { useSticky } from 'react-table-sticky'

const RTable = () => {
  const data = useMemo(() => [
    { col1: '001', col2: 'react1', col3: 'react1' },
    { col1: '002', col2: 'react2', col3: 'react2' },
    { col1: '003', col2: 'react3', col3: 'react3' },
    { col1: '004', col2: 'react4', col3: 'react4' },
    { col1: '005', col2: 'react5', col3: 'react5' },
    { col1: '006', col2: 'react6', col3: 'react6' }
  ], [])

  const columns = useMemo<Column<{ col1: string, col2: string, col3: string }>[]>(() => [
    { Header: 'Column 1', accessor: 'col1' },
    { Header: 'Column 2', accessor: 'col2' },
    { Header: 'Column 3', accessor: 'col3' }
  ], [])

  const tableIns = useTable(
    { columns, data },
    useResizeColumns,
    useExpanded,
    useBlockLayout,
    useSticky
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state
  } = tableIns

  useEffect(() => {
    console.log(state)
    return () => {
      console.log('bye')
    }
  }, [state])

  return (
    <div>
      <div {...getTableProps()} className="table sticky" style={{ width: '100%', height: '100%' }}>
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps(column.getSortByToggleProps())} className="th">
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? 'V'
                        : '^'
                      : ''}
                  </span>
                  {
                    <div
                      {...column.getResizerProps()}
                      className={`resizer ${column.isResizing ? 'isResizing' : ''
                        }`
                      }
                    />
                  }
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div >
  )
}

export default RTable