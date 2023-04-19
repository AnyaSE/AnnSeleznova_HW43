import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlist from "./pages/Userlist";
import Album from "./pages/Album";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/userlist" element={<Userlist />} />
        <Route path="/album" element={<Album />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;