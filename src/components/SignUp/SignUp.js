import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";

const SignUp = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const handleGoogleRegister = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
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
      <h1>Register</h1>
      <form>
        <div className="input-group">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            id=""
            required
            placeholder="Enter your First Name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="sname">Sur Name</label>
          <input
            type="text"
            name="sname"
            id=""
            required
            placeholder="Enter your Family Name"
          />
        </div>
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
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id=""
            required
            placeholder="Confirm Password"
          />
        </div>
        <button>Log In</button>
      </form>
      <p>
        Sign Up with{" "}
        <span className="google-signin" onClick={handleGoogleRegister}>
          Google
        </span>{" "}
      </p>
      <p>
        Already have an Account? <Link to="/login">LogIn</Link>
      </p>
    </div>
  );
};

export default SignUp;
