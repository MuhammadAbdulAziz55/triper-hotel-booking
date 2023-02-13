import React from "react";
import "./TopHeader.css";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="header-top hidden md:block lg:block ">
      <div className=" auto-container">
        <div className="wrapper-box  ">
          <div className="left-column ">
            <ul className="contact-info box-style-one">
              <li>
                <a href="mailto:info@webmail.com">info@webmail.com</a>
              </li>
              <li className="separator">|</li>
              <li>
                <a href="tel: 01918935859"> 01918935859</a>
              </li>
            </ul>
          </div>
          <div className="right-column  box-style-two">
            <div className="login justify-">
              <Link to="/login">Login</Link>
            </div>
            <div className="sign-up text-white">
              <Link to="/sign-up">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
