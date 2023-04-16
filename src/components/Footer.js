import React from "react";
import "../css/Footer.css";
import logo from "../assets/logo.png";

import {BsGithub} from "react-icons/bs"
import {AiFillLinkedin,AiFillInstagram} from "react-icons/ai"

function Footer() {
  return (
    <div className="footer-section">
      <div className="left-footer">
        <img className="logo-img" src={logo} alt="Dhruvil Lakhtaria"></img>
        <a href="#top" class="top-btn">
          TOP
        </a>
      </div>
      <div className="right-footer">
        <p className="footer-text">
          NOTHING TO SEE HERE EXCEPT MY NAME WRITTEN IN STYLISH FONT and A SUPER
          HANDY BUTTON THAT TAKES YOU TO THE TOP.
        </p>
        <div className="footer-icons">
          <div className="contact-me">
            <p>CONTACT ME :</p>
            <div className="mail">
            <a href="mailto:lakhtariadhruvil123@fmail.com">
            <span class="fill-right">lakhtariadhruvil123@gmail.com</span> 
            </a>
            </div>
                <div className="footer-message-icons">
                    <div className="contact-icon"><a  href="https://www.instagram.com/dhruvil.lakhtaria/"><AiFillInstagram/></a></div>
                    <div className="contact-icon"><a href="https://www.linkedin.com/in/dhruvil-lakhtaria/"><AiFillLinkedin/> </a></div>
                    <div className="contact-icon"><a href="https://github.com/Dhruvil-Lakhtaria"><BsGithub /></a></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
