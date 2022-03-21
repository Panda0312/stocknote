import { useMemo } from 'react'
import { useTable, useExpanded, useBlockLayout, useResizeColumns } from 'react-table'
import type { Column } from 'react-table'
import { StickyStyles } from '../Styled'
import { useSticky } from 'react-table-sticky'

type TColData = {
  col1: string | JSX.Element,
  col2: string,
  col3: string,
  subRows: Array<any>
}

const RTable = () => {
  const data = useMemo(() => [
    {
      col1: '001', col2: 'react1', col3: 'redux1', subRows: [
        {
          col1: 'sub-001', col2: 'sub-react1', col3: 'sub-redux1', subRows: [
            { col1: 'sub2-001', col2: 'sub2-react1', col3: 'sub2-redux1' }
          ]
        }
      ]
    },
    { col1: '002', col2: 'react2', col3: 'redux2', subRows: [] },
    { col1: '003', col2: 'react3', col3: 'redux3', subRows: [] },
    { col1: '004', col2: 'react4', col3: 'redux4', subRows: [] },
    { col1: '005', col2: 'react5', col3: 'redux5', subRows: [] },
    { col1: '006', col2: 'react6', col3: 'redux6', subRows: [] }
  ], [])

  const columns = useMemo<Column<TColData>[]>(() => [
    {
      sticky: 'left',
      Header: '', id: 'expander',
      Cell: ({ row }: any) => row.canExpand
        ? (
          <span
            {...row.getToggleRowExpandedProps({
              style: {
                paddingLeft: `${row.depth * 2}rem`
              }
            })}
          >
            {row.isExpanded ? "v" : ">"}
          </span>
        ) : null
    }
    ,
    { Header: 'Column 1', accessor: 'col1' },
    { Header: 'Column 2', accessor: 'col2' },
    { Header: 'Column 3', accessor: 'col3', sticky: 'right' }
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
    prepareRow
  } = tableIns

  return (
    <StickyStyles>
      <div {...getTableProps()} className="table sticky" style={{ width: 500, height: 200 }}>
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render('Header')}
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
    </StickyStyles>
  )
}

export default RTable