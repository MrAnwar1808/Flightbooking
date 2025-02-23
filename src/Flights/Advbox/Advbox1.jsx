
import React, { useState, useEffect } from "react";
import "./Adv.css";

// Move images array outside the component to avoid dependency issues
const images = [
  "/Images/pic1.webp",
  "/Images/pic2.webp",
  "/Images/pic3.webp",
  "/Images/pic4.jpg",
  "/Images/pic5.webp",
];

function Advbox1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []); // Now, there's no missing dependency warning

  return (
    <div className="advertisement">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Ad ${index + 1}`}
          className={index === currentIndex ? "active" : ""}
        />
      ))}
    </div>
  );
}

export default Advbox1;
