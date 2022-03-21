import Select from 'react-select'
import styled from 'styled-components'

type TProps = {
  className: string;
}

const CustomDropdown = ({ className }: TProps) => {
  const list: Array<any> = [
    { icon: "🛠️", label: "Written in TypeScript", value: 'l1', prefix: 'test-prefix' }
  ]
  const optionFormatter = (data: any, formatOptionLabelMeta: any) => {
    return (
      <>
        <span style={{ color: '#666' }}>{data.prefix}</span>&nbsp;&nbsp;&nbsp;
        <span>{data.label}</span>
      </>
    )
  }

  return (
    <div className={className}>
      <h3>React Select</h3>
      <Select options={list} formatOptionLabel={optionFormatter} />
    </div>
  )
}

export const StyledDropdown = styled(CustomDropdown)`
  [class$="-control"] {
    min-height: unset;
    height: 80px;
    width: 400px;
  }
`