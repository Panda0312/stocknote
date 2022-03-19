
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { StyledDropdown } from './components/CustomDropdown';
import { Counter } from './components/Counter';
import RTable from './components/RTable';
import StyledCounter from './components/styled/StyledCounter';
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="app-nav">
          <Link to={'/'}>Custom Dropdown</Link>|
          <Link to={'/react-table'}>React Table</Link>|
          <Link to={'/counter'}>Counter</Link>
        </nav>
        <Routes>
          <Route path="/" element={<StyledDropdown className='styled-dropdown' />} />
          <Route path="/react-table" element={<RTable />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
