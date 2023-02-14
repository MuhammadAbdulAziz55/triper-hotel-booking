import React, { useContext } from "react";
import "./TopHeader.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const TopHeader = () => {
  const { user, logOut } = useContext(AuthContext);
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
            <div className="login ">
              {user?.email ? (
                <button className="text-white " onClick={logOut}>
                  Log out
                </button>
              ) : (
                <>
                  <Link className="mr-4" to="/login">
                    Login
                  </Link>
                  <Link to="/sign-up">Sign up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
