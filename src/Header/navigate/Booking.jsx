
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingHeader from "./BookingHeader";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingHeader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;




import { useNavigate } from "react-router-dom";

function BookingHeader() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <img src="/Images/th.jpg" alt="cleartrip" />
      <button className="btn" onClick={() => navigate("/login")}>Log in/ Sign up</button>
    </div>
  );
}



import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleSignupRedirect = () => navigate("/signup");

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign In</button>
      <p>Don't have an account? <a href="#" onClick={handleSignupRedirect}>Sign up here</a></p>
    </div>
  );
}



import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const handleLoginRedirect = () => navigate("/login");

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Re-enter Password" />
      <input type="text" placeholder="Phone Number" />
      <button>Sign Up</button>
      <p>Already have an account? <a href="#" onClick={handleLoginRedirect}>Sign in here</a></p>
    </div>
  );
}
