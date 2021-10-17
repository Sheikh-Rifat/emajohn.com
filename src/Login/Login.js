import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirectUrl = location.state?.from || "/";
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirectUrl);
    });
  };
  return (
    <div className="logIn-form">
      <div>
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="enter your email" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="enter your password"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>

        <p>
          New to ema john? <Link to="/register"> Create new account</Link>
        </p>
        <div>-------or-------</div>
        <h4>Sign in with Google</h4>
        <button className="btn-regular" onClick={handleGoogleLogin}>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
