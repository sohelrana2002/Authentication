import React, { useState } from "react";
import { NavLink} from "react-router-dom";

import "./SignUp.css";

const SignUp = () => {
  const [userSignUp, setUserSignUp] = useState({
    email: "",
    password: "",
    cPassword: "",
    wrongPass: false
  });

  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    setUserSignUp({
      ...userSignUp,
      [name] : value,
    });
  }
  console.log(userSignUp);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      if(userSignUp.password === userSignUp.cPassword){
        const res = await fetch(`/api/auth/sign-up`, {
          method: "POST",
          body: JSON.stringify(userSignUp),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
  
        // const data = await res.json();
        console.log(res);
      }else{
        setUserSignUp({
          ...userSignUp,
          wrongPass: true,
        })
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
