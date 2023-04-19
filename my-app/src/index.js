import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Userlist from './pages/Userlist';
import Album from './pages/Album';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Userlist />} />
        <Route path="/album" element={<Album />} />
      </Routes>
    </Router>
  );
}

export default App;