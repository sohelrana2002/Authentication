import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./SignUp.css";

const SignUp = () => {
  const [userSignUp, setUserSignUp] = useState({
    email: "",
    password: "",
    cPassword: "",
    wrongPass: false
  });

  const navigate = useNavigate();

  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    setUserSignUp({
      ...userSignUp,
      [name] : value,
    });
  }
  // console.log(userSignUp);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      if(userSignUp.password === userSignUp.cPassword){
        console.log(userSignUp);
        const res = await fetch(`http://localhost:5000/api/auth/sign-up`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userSignUp),
        });

        if(res.statusText === "Created"){
          alert("Sign Up Successfully");
          setUserSignUp({
            email: "",
            password: "",
            cPassword: "",
            wrongPass: false,
          });
          navigate("/")
        }
        // setUserSignUp({
        //   ...userSignUp,
        //   wrongPass: false,
        // });
  
        // const data = await res.json();
        console.log(res);
      }else{
        setUserSignUp({
          ...userSignUp,
          wrongPass: true,
        });
      }
    }catch(err){
      console.log(err);
    }
  }
  
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h3 className="title">Sign UP</h3>
        <div className="form__content">
          <input
            className="user__input"
            type="text"
            placeholder="Email"
            name="email"
            value={userSignUp.email}
            onChange={handleInput}
          />
          <input
            className="user__input"
            type="password"
            placeholder="Password"
            name="password"
            value={userSignUp.password}
            onChange={handleInput}
          />
          <input
            className="user__input"
            type="password"
            placeholder="Confirm password"
            name="cPassword"
            value={userSignUp.cPassword}
            onChange={handleInput}
          />
        </div>

        {
          userSignUp.wrongPass && <div className="wrongPass">
          <p>Password is'n same</p>
          </div>
        }

        <button type="submit" className="btn">Sign Up</button>

        <p className="text">Have an account? <NavLink to='/'>Log In</NavLink></p>
      </form>
    </div>
  );
};

export default SignUp;
