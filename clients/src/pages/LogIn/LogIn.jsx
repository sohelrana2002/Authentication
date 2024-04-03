import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  const [userLogIn, setUserLogIn] = useState({
    email: "",
    password: ""
  });

  // ====handle user input====
  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    setUserLogIn({
      ...userLogIn,
      [name]: value,
    });
  };
  // console.log(userLogIn);

  // ====handle submit=====
  const handleLogInSubmit = async (e) =>{
    e.preventDefault();
  }


  return (
    <div className="signup">
      <form onSubmit={handleLogInSubmit}>
        <h3 className="title">Log In</h3>

        <div className="form__content">
          {/* =====email==== */}
          <input
            className="user__input"
            type="text"
            placeholder="Email"
            name="email"
            value={userLogIn.email}
            onChange={handleInput}
          />

          {/* ====password====== */}
          <input
            className="user__input"
            type="password"
            placeholder="Password"
            name="password"
            value={userLogIn.password}
            onChange={handleInput}
          />
        </div>

        <NavLink className="forget">
          <p>Forget password?</p>
        </NavLink>
        <button type="submit" className="btn">
          Log In
        </button>

        <p className="text">
          Don't have an account? <NavLink to="/sign-up">Create one</NavLink>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
