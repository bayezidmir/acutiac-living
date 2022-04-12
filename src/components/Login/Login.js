import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <h1>Log In</h1>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id=""
            required
            placeholder="Enter your Register Email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            required
            placeholder="Enter your Password"
          />
        </div>
        <button>Log In</button>
      </form>
      <p>
        Log In with <span>Google</span>{" "}
      </p>
      <p>
        Do not have an Account? <Link to="/signup">Register Now</Link>
      </p>
    </div>
  );
};

export default Login;
