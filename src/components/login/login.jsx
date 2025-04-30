import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    chrome.storage.local.set(
      {
        userEmail: email,
        userPassword: password,
      },
      () => {
        if (chrome.runtime.lastError) {
          console.error("Error setting data:", chrome.runtime.lastError);
        } else {
          alert("Email and password saved successfully!");
          console.log("Stored:", { userEmail: email, userPassword: password });
        }
      }
    );
  };

  return (
    <>
      <div className="container">
        <div className="form-container login-container">
          <form action="#" method="POST" onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?{" "}
            <Link to="/SignUp" className="dropdown-link">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
