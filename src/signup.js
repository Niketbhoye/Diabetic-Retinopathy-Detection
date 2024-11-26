import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation and signup logic here
    // ...
  };

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/blindness-detection"); // Redirect to Blindness Detection after signup
  };

  return (
    <div className="signup-container">
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        {/*<input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        */}
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>

        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        {/*<label htmlFor="confirmPassword">Confirm Password:</label>

        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        */}
        <br />
        <button type="submit" onClick={handleSignup}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default Signup;
