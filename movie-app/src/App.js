import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import  NavBar  from './Navbar/Navbar';
import FavList from './FavList/FavList';
import Home from './Home/Home';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <NavBar/>
      <Routes>
          <Route path='/trending' exact  element={<Home/>} />
          <Route path='/favorite' exact element={<FavList/>}/>
      </Routes>
    </div>

  );
}

export default App;
