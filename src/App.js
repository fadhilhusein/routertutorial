import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Bookeeper!</h1>
      <nav style={
      {borderBottom: 'solid 1px',
      padding: "1rem"}
      }>
        <Link to='/invoices'>Invoices</Link>
        <Link to='/expenses'>Expenses</Link>
        <Link to='/home'>Home</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
