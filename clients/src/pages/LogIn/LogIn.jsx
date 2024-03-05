import React from "react";
import { NavLink} from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="signup">
      <form>
        <h3 className="title">Log In</h3>
        <div className="form__content">
          <input className="user__input" type="text" placeholder="Email" />
          <input
            className="user__input"
            type="password"
            placeholder="Password"
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
