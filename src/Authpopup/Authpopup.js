import React from 'react';
import './Authpopup.css';

function Authpopup() {
  return (
    <>
      <div className="popup-container row">
        <div className="col">
          Log in with
          <i className="fab fa-google"></i>
          <i className="fab fa-facebook"></i>
          <div className="login-form">
            <input type="text" placeholder="Username or Email"></input>
            <input type="password" placeholder="Password"></input>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="col">
          Sign up with
          <i className="fab fa-google"></i>
          <i className="fab fa-facebook"></i>
          <div className="signup-form">
            <input type="text" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default Authpopup;
