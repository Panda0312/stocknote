import { useEffect, useMemo, useState } from 'react'
import { useAppSelector } from '../../store/hooks'
import {
  useTable, useExpanded, useBlockLayout,
  useResizeColumns, CellProps, useSortBy
} from 'react-table'
import type { Column } from 'react-table'
import { StickyStyles } from '../Styled'
import { useSticky } from 'react-table-sticky'
import { Adiv } from '../Tool/Adiv'

type TColData = {
  col1: string | JSX.Element,
  col2: string,
  col3: string,
  subRows?: Array<TColData>
}

const initData = [
  {
    col1: '001', col2: 'react1', col3: 'redux1', subRows: [
      {
        col1: 'sub-001', col2: 'sub-react1', col3: 'sub-redux1', subRows: [
          { col1: 'sub2-001', col2: 'sub2-react1', col3: 'sub2-redux1' }
        ]
      }
    ]
  },
  { col1: '002', col2: 'react2---', col3: 'redux2', subRows: [] },
  { col1: '003', col2: 'react3-', col3: 'redux3', subRows: [] },
  { col1: '004', col2: 'react4--', col3: 'redux4', subRows: [] },
  { col1: '005', col2: 'react5---', col3: 'redux5', subRows: [] },
  { col1: '006', col2: 'react6-', col3: 'redux6' }
]

type StickyColumn = Column & {
  sticky?: string;
}

const initColumn: StickyColumn[] = [
  {
    sticky: 'left',
    Header: '', id: 'expander',
    Cell: ({ row }: CellProps<TColData>) => row.canExpand
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
  { id: 'col1', Header: 'Column 1', accessor: 'col1' },
  { id: 'col2', Header: 'Column 2', accessor: 'col2' },
  { Header: 'Column 3', accessor: 'col3', sticky: 'right', minWidth: 200 }
]

const RTable = () => {
  const [data, setData] = useState(initData)
  const count = useAppSelector(state => state.counter.value)
  const memoData = useMemo(() => {
    const customCellRow = { ...data[0], col3: 'redux' + count }
    return [customCellRow, ...data.slice(1)]
  }, [data, count])

  const columns = useMemo(() => initColumn, [])

  const tableIns = useTable(
    {
      data: memoData, columns, initialState: {
        hiddenColumns: ['col1']
      },
      manualSortBy: true
    },
    useSortBy,
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
      <div>
        <button onClick={() => setData(prev => [...prev].sort((a, b) => a['col2'].length - b['col2'].length))}>Change Data</button>

      </div>
      <StickyStyles>
        <div {...getTableProps()} className="table sticky" style={{ width: 500, height: 200 }}>
          <div className="header">
            {headerGroups.map((headerGroup) => (
              <Adiv {...headerGroup.getHeaderGroupProps()} className="tr">
                {headerGroup.headers.map((column) => (
                  <Adiv {...column.getHeaderProps(column.getSortByToggleProps())} config={column} className="th">
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
                  </Adiv>
                ))}
              </Adiv>
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
    </div>
  )
}

export default RTable