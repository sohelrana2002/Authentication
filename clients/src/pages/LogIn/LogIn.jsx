import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import "./LogIn.css";


const URL = "http://localhost:5000/api/auth/login";

const LogIn = () => {
  const { storeTokenInLS } = useAuthContext();

  const navigate = useNavigate();
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
    try{
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(userLogIn),
      });
      // console.log("log in form", res);

      if (res.ok) {
        alert("Log in successfully");
        const resData = await res.json();
        storeTokenInLS(resData.token);
        // console.log(resData);
        setUserLogIn({
          email: "",
          password: "",
        });
        navigate("/")
      }
    }catch(err){
      alert("Invalid credentials");
      console.log(err);
    }
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
