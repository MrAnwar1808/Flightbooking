import React, { useState } from "react";
import './Auth.css';

function SignUppage({ onNavigate }) {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", password: "", reenterPassword: "", phoneNumber: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    if (formData.password !== formData.reenterPassword) {
      alert("Passwords do not match");
      return;
    }
    sessionStorage.setItem("user", JSON.stringify({ email: formData.email, password: formData.password }));
    alert("Sign up successful! You can now log in.");
    onNavigate("Signin"); // Redirect to Sign In
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <input type="password" name="reenterPassword" placeholder="Re-enter Password" onChange={handleChange} />
      <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
      <button onClick={handleSignup}>Sign Up</button>
      {/* <p>
        Already have an account? <a href="#" onClick={() => onNavigate("Signin")}>Click here to Sign In</a>
      </p> */}
    </div>
  );
}

export default SignUppage;
