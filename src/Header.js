import React, { useState } from "react";

const Header = () => {
  const [singIn, setSignIn] = useState(true);
  return (
    <div id="header" className="header">
      <p className="blank"></p>
      <div className="headingContainer">
        <h2 className="heading">Thyself </h2>
      </div>
      <div className="signinSignUp">
        {singIn && <p className="user">Maverickkuhn@gmail.com</p>}
        {singIn ? (
          <button
            className="signButton"
            onClick={() => setSignIn((prev) => !prev)}
          >
            Sign out
          </button>
        ) : (
          <button
            className="signButton"
            onClick={() => setSignIn((prev) => !prev)}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
