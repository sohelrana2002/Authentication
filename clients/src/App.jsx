import React from "react"
import { BrowserRouter, Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./shared/Navbar/Navbar";
import LogIn from './pages/LogIn/LogIn';
import SignUp from "./pages/SignUp/SignUp";
import Logout from "./pages/Logout/Logout";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-out" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
