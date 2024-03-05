import React from "react";
import { NavLink} from "react-router-dom"

import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup">
      <form>
        <h3 className="title">Sign UP</h3>
        <div className="form__content">
          <input
            className="user__input"
            type="text"
            placeholder="Email"
          />
          <input
            className="user__input"
            type="password"
            placeholder="Password"
          />
          <input
            className="user__input"
            type="password"
            placeholder="Confirm password"
          />
        </div>

        <NavLink className="forget">
          <p>Forget password?</p>
        </NavLink>
        <button type="submit" className="btn">Submit</button>

        <p className="text">Have an account? <NavLink to='/'>Log In</NavLink></p>
      </form>
    </div>
  );
};

export default SignUp;
