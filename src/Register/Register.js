import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <div className="logIn-form">
      <div>
        <h2>Create new Account</h2>
        <form onSubmit="">
          <input type="email" placeholder="enter your email" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="enter your password"
          />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Re-enter your password"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>

        <p>
          Already have an account? <Link to="/login"> Log In</Link>
        </p>
        <div>-------or-------</div>
        <h4>Sign in with Google</h4>
        <button className="btn-regular">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
