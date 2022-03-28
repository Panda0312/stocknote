import Select from 'react-select'
import styled from 'styled-components'

type TProps = {
  className: string;
}

const CustomDropdown = ({ className }: TProps) => {
  const list: Array<any> = [
    { icon: "🛠️", label: "Written in TypeScript", value: 'l1', prefix: 'test-prefix' },
    { icon: "🛠️", label: "Written in TypeScript", value: 'l1', prefix: 'test-prefix' },
    { icon: "🛠️", label: "Written in TypeScript", value: 'l1', prefix: 'test-prefix' },
    { icon: "🛠️", label: "Written in TypeScript", value: 'l1', prefix: 'test-prefix' },
    { icon: "🛠️", label: "Written in TypeScript", value: 'l1', prefix: 'test-prefix' },
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
      <Select
        className='my-select'
        classNamePrefix={'prefix'}
        styles={{}}
        options={list}
        formatOptionLabel={optionFormatter}
      />
      <hr />
      <div className='testStyle'>
        <div className="menu" style={{ width: 200, maxHeight: 300, border: '1px solid #ccc', overflow: 'auto' }}>
          <div style={{ maxHeight: 800, padding: 6, backgroundColor: 'green', overflow: 'auto' }}>
            <div style={{ height: 100, borderBottom: '1px solid #666' }}>a</div>
            <div style={{ height: 100, borderBottom: '1px solid #666' }}>a</div>
            <div style={{ height: 100, borderBottom: '1px solid #666' }}>a</div>
            <div style={{ height: 100, borderBottom: '1px solid #666' }}>a</div>
            <div style={{ height: 100, borderBottom: '1px solid #666' }}>a</div>
            <div style={{ height: 100, borderBottom: '1px solid #666' }}>a</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const StyledDropdown = styled(CustomDropdown)`
  [class$="-control"] {
    min-height: unset;
    height: 80px;
    width: 400px;
  }
  [class$="-menu"] {
    max-height: 200px;
    overflow: auto;
  }
`