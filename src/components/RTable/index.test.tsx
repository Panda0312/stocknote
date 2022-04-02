import { render, screen } from '@testing-library/react';
import RTable from '.';

describe('test rtable', () => {
  it('table render', () => {
    render(<RTable />)
    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByText('Column 1')).toBeInTheDocument()
  })
})