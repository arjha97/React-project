import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './components/Home';
import Modules from './components/Modules';
import Instructor from './components/Instructor';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Sidebar/>
    <div className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/modules" element={<Modules/>} />
            <Route path="/instructor" element={<Instructor/>} />
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
