// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<div className="p-6">About Page</div>} />
        <Route path="/themes" element={<div className="p-6">Themes Page</div>} />
        <Route path="/approach" element={<div className="p-6">Approach Page</div>} />
        <Route path="/events" element={<div className="p-6">Events Page</div>} />
        <Route path="/join" element={<div className="p-6">Join Page</div>} />
        <Route path="/support" element={<div className="p-6">Support Page</div>} />
        <Route path="/invite" element={<div className="p-6">Invite Us Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}
