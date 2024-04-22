import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [navList, setNavList] = useState(false);
const [ShowRegisterInForm, setShowRegisterInForm ] =useState(false);
  const handleSignInClick = () => {
    setShowSignInForm(true);
  };
  const handleRegisterClick = () => {
    setShowRegisterInForm(true);
  }

  const handleCloseSignInForm = () => {
    setShowSignInForm(false);
  };

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/logo.png" alt="" />
          </div>
          <div className="nav">
          <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>

          </div>
          <div className="button flex">
            
            <button className="btn1" onClick={handleSignInClick}>
              <i className="fa fa-sign-out"></i> Sign In
            </button>
          </div>

          <div className="button flex">
            
            <button className="btn1" onClick={handleRegisterClick}>
              <i className="fa fa-sign-out"></i> Register
            </button>
          </div>


          </div>
      </header>

      {showSignInForm && (
        <div className="signin-modal">
          <div className="signin-form">
          <p> adresse e-mail</p>  <input type="text" placeholder="Adresse e-mail" required/>
          <p> mot de passe </p>  <input type="password" placeholder="Mot de passe" required/>
            <button onClick={handleCloseSignInForm}>Close</button>
            <br/>
            <button>Sign In</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
