// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update import statement
import './App.css';
import Account from './components/account/Account';
import Sidebar from './components/sidebar/Sidebar';
import SuraqJauap from './components/suraq-jauap/SuraqJauap';
import MaqalDrop from './components/maqal-drop/MaqalDrop';
import Sozjumbaq from './components/sozjumbaq/Sozjumbaq';
import Tanda from './components/tanda/Tanda';
import Sozdly from './components/sozdly/Sozdly';
import Home from './components/home/Home';
import Adamzat from './components/adamzat/Adamzat';


function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />

        <div className='content'>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/sozdly" element={<Sozdly />} />
            <Route path="/tanda" element={<Tanda />} />
            <Route path="/maqalDrop" element={<MaqalDrop />} />
            <Route path="/suraqJauap" element={<SuraqJauap />} />
            <Route path="/sozjumbaq" element={<Sozjumbaq />} />
            <Route path="/adamzat" element={<Adamzat />} />
          </Routes>
          
          <Account />
        </div>
      </div>
    </Router>
  );
}

export default App;
