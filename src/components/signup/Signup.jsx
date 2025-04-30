import React from "react";
import Login from "../login/login";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./signup.css"; 

function SignUp() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if(password != confirmPassword){
      alert("Passwords do not match.Please try again.");
      return;
    }

    else{
    chrome.storage.sync.set(
      {
        fullName: name,
        userEmail:email,
        userPassword:password,
      },
      () => { 
        if (chrome.runtime.lastError) {
        console.error("Error setting data:", chrome.runtime.lastError);
      } else {
        alert("Account created successfully!");
        console.log("Stored signup data:", { fullName: name, userEmail: email, userPassword: password });
      }
      }
    );
  }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create an Account</h2>
        <form action="#" method="POST" onSubmit={handleSignUp}>
          <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required />
          <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />
          <input
           type="password"
           placeholder="Password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           required />
          <input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/Login" className="dropdown-link">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
