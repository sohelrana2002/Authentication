import React from "react"
import { BrowserRouter, Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import LogIn from './pages/LogIn/LogIn';
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./shared/Navbar/Navbar";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
