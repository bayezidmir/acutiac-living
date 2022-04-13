import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";

const Header = () => {
  const [user, setUser] = useState({});

  useState(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="feedback">Feedback</Link>
      <Link to="/contact">Contact Us</Link>
      {user?.uid ? (
        <span className="log-out" onClick={handleSignOut}>
          Log out
        </span>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <p>{user?.displayName}</p>
    </nav>
  );
};

export default Header;
