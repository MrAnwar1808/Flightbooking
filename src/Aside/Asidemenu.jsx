import React from "react";
import { Link } from 'react-router-dom';
import './Asidemenu.css'  

function Asidemenu() {
  return (
    <div>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Link to="/" className="sidebar-link">✈️ Flights</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/hotels" className="sidebar-link">🏨 Hotels</Link>
          </li>
          <li className="sidebar-item">
            <Link to="#bus" className="sidebar-link">🚌 Bus <span style={{ backgroundColor: "#e03e00", color: "white", padding: "5px", borderRadius: "5px", fontSize: "12px" }}> New</span></Link>
          </li>
          <li className="sidebar-item">
            <Link to="#offers" className="sidebar-link">🎆 Offers</Link>
          </li>
          <li className="sidebar-item">
            <Link to="#my-trips" className="sidebar-link">🧳 My Trips</Link>
          </li>
          <li className="sidebar-item">
            <Link to="#cleartrip-for-work" className="sidebar-link">🧑‍💼 Cleartrip for Work</Link>
          </li>
          <li className="sidebar-item">
            <Link to="#support" className="sidebar-link">🎧 Support</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Asidemenu;
