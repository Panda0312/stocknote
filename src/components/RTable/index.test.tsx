import { render, screen } from '@testing-library/react';
import RTable from '.';

describe('test rtable', () => {
  it('table render', () => {
    const { container } = render(<RTable />)
    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByText('Column 1')).toBeInTheDocument()
    expect(screen.getAllByText('Change Data')).toBeInTheDocument()
  })
})