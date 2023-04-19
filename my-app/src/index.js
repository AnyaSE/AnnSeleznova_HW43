import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './index.css';
import UserList from './pages/Userlist';
import Album from './pages/Album'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/userlist">User List</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/userlist" element={<UserList />} />
        <Route path="/userlist/:album" element={<Album />} />
      </Routes>
    </BrowserRouter>
  </div>
);