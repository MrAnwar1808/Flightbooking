import React, { useState } from "react";
// import './Auth.css';

function Signinpage({ onNavigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert("Login successful!");
      onNavigate("Home"); // Navigate to Home
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Sign In</button>
      {/* <p>
        Don't have an account?{" "}
        <a href="#" role="button" onClick={() => onNavigate("Signup")}>
        Sign up here
        </a>
     </p> */}

    </div>
  );
}

export default Signinpage;
