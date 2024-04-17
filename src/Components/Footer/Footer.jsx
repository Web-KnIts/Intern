import React from "react";
import "./footer.css";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <div className="Ncode__footer-container">
      <div className="Ncode__footer-leftside">
            <h1>Let's help you navigate your next !</h1>
            <p>© 2024</p>
        </div>
        <div className="Ncode__footer-rightside">
            <div className="Ncode__footer-links">
            <h1>Ncode<span>Ai</span></h1>
            <div className="Ncode__footer-links-btn">
                <button>Contact Us</button>
                <p><a href="https://mailchimp.com/contact/abuse/">Report Us</a></p>
            </div>
            <div className="Ncode__footer-social">
                <p><a href=""><FaXTwitter color="#05386b" size="25px"/></a></p>
                <p><a href=""><FaFacebook color="#05386b" size="25px"/></a></p>
                <p><a href=""><FaInstagram color="#05386b" size="25px"/></a></p>
            </div>
            </div> 
        </div>
    </div>
  );
}

export default Footer;
