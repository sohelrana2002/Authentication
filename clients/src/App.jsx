import React from "react"
import { BrowserRouter, Router, Route, Routes} from "react-router-dom";
import LogIn from './pages/LogIn/LogIn';
import SignUp from "./pages/SignUp/SignUp";

function App() {

  return (
    <div className="container app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
