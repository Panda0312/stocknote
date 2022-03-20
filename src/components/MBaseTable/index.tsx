import Table from "react-base-table"

const MBaseTable = () => {
  const columns = [
    { dataKey: 'col1', key: 'col1', title: 'Column 1', width: 150 },
    { dataKey: 'col2', key: 'col2', title: 'Column 2', width: 150 },
    { dataKey: 'col3', key: 'col3', title: 'Column 3', width: 150 },
    { dataKey: 'col4', key: 'col4', title: 'Column 4', width: 150 },
    { dataKey: 'col5', key: 'col5', title: 'Column 5', width: 150 },
    { dataKey: 'col6', key: 'col6', title: 'Column 6', width: 150 }
  ]
  const data = [
    { id: 'r1', col1: 'r1-c1', col2: 'r1-c2', col3: 'r1-c3', col4: 'r1-c4', col5: 'r1-c5', col6: 'r1-c6' },
    { id: 'r2', col1: 'r2-c1', col2: 'r2-c2', col3: 'r2-c3', col4: 'r2-c4', col5: 'r2-c5', col6: 'r2-c6' },
    { id: 'r3', col1: 'r3-c1', col2: 'r3-c2', col3: 'r3-c3', col4: 'r3-c4', col5: 'r3-c5', col6: 'r3-c6' },
    { id: 'r4', col1: 'r4-c1', col2: 'r4-c2', col3: 'r4-c3', col4: 'r4-c4', col5: 'r4-c5', col6: 'r4-c6' },
    { id: 'r5', col1: 'r5-c1', col2: 'r5-c2', col3: 'r5-c3', col4: 'r5-c4', col5: 'r5-c5', col6: 'r5-c6' },
    { id: 'r6', col1: 'r6-c1', col2: 'r6-c2', col3: 'r6-c3', col4: 'r6-c4', col5: 'r6-c5', col6: 'r6-c6' },
    { id: 'r7', col1: 'r7-c1', col2: 'r7-c2', col3: 'r7-c3', col4: 'r7-c4', col5: 'r7-c5', col6: 'r7-c6' },
    { id: 'r8', col1: 'r8-c1', col2: 'r8-c2', col3: 'r8-c3', col4: 'r8-c4', col5: 'r8-c5', col6: 'r8-c6' }
  ]

  return (
    <Table
      width={800} height={400}
      columns={columns}
      data={data}
    />
  )
}
export default MBaseTable