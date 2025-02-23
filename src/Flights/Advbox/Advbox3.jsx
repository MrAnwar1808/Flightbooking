import React, { useState } from "react";
import "./Advertbox.css"; // Import the CSS file

function Advertisebox() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div className="advert-container">
        <div className="advert-content">
          <div className="advert-text">
            <p>
              <span style={{ color: "blueviolet", fontWeight:"bold"}}>
                Flexible flight bookings with{" "}
              </span>
              Clear Choice{" "}
              <span style={{ color: "blueviolet", fontWeight:"bold" }}>Max</span>
            </p>
            <p>
              Free cancellation or free date change starting from ₹499. T&C
              apply.
            </p>
          </div>

          <button className="advert-btn">Learn more</button>
        </div>
        <button className="advert-remove" onClick={() => setIsVisible(false)}>
          X
        </button>
      </div>
    )
  );
}

export default Advertisebox;
