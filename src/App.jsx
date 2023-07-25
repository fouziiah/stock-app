import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import About from './pages/About';
import "./index.css";
import Stock from './pages/Stock';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
       
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path='/:symbol' element={<Stock/>}/>

      </Routes>
    </div>
  );
}

export default App;


