import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Swap from './Pages/Swap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<LandingPage/>} />
        <Route path="/swap" element={<Swap/>} />
      </Routes>
    </Router>
  );
}

export default App;