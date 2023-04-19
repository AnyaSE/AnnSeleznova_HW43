import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/Userlist";
import Album from "./pages/Album";
import Photo from "./pages/Photos"
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/userlist" element={<UserList />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/photo/::albumId" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;