import Select from 'react-select'

export const CustomDropdown = () => {
  const list: Array<any> = [
    { icon: "🛠️", label: "Written in TypeScript", value: 'l1', prefix: 'test-prefix' }
  ]
  const optionFormatter = (data: any, formatOptionLabelMeta: any) => {
    console.log(data)
    console.log(formatOptionLabelMeta)
    return (
      <>
        <span style={{ color: '#666' }}>{data.prefix}</span>&nbsp;&nbsp;&nbsp;
        <span>{data.label}</span>
      </>
    )
  }

  return (
    <div className="custom-dropdown">
      <h3>React Select</h3>
      <Select options={list} formatOptionLabel={optionFormatter} />
    </div>
  )
}