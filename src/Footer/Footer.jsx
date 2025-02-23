
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
           
            <div className="footer-logo">
                <img src="/Images/footerlogo.jpg" alt="footerlogo" />
            </div>

    
           <div>
           <div className="footer-content">
                <ul className="footer-links">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>FAQs</li>
                    <li>Support</li>
                    <li>Blog</li>
                    <li>Mobile</li>
                    <li>Collections</li>
                    <li>Cleartrip for Business</li>
                    <li>Gift Cards</li>
                </ul>
            </div>

      
            <div className="footer-bottom">
                <p>© 2023 Cleartrip Pvt. Ltd. · Privacy · Terms of Use · Grievance Redressal</p>

                <div className="footer-social">
                    <p>Connect with us:</p>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={25} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={25} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={25} />
                        </a>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
}

export default Footer;
