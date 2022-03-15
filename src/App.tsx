import { Routes, Route, Link } from 'react-router-dom'
import { CustomDropdown } from './components/CustomDropdown';
import RTable from './components/RTable';
import './App.css'

function App () {
  return (
    <div className="App">
      <nav className="app-nav">
        <Link to={'/'}>Custom Dropdown</Link>|
        <Link to={'/react-table'}>React Table</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CustomDropdown />} />
        <Route path="/react-table" element={<RTable />} />
      </Routes>
    </div>
  );
}

export default App;
