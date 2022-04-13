import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const handleGoogleRegister = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };
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
        Log In with{" "}
        <span className="google-signin" onClick={handleGoogleRegister}>
          Google
        </span>{" "}
      </p>
      <p>
        Do not have an Account? <Link to="/signup">Register Now</Link>
      </p>
    </div>
  );
};

export default Login;
