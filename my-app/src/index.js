import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Album from "./pages/Album";
import Userlist from "./pages/Userlist";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Userlist />}>
          <Route path="album" element={<Album />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);