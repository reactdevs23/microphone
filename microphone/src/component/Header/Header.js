import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [singIn, setSignIn] = useState(false);
  return (
    <div id="header" className={styles.header}>
      <p className={styles.blank}></p>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Thyself </h2>
      </div>
      <div className={styles.signinSignUp}>
        {singIn && <p className={styles.user}>Maverickkuhn@gmail.com</p>}
        {singIn ? (
          <button
            className={styles.button}
            onClick={() => setSignIn((prev) => !prev)}
          >
            Sign out
          </button>
        ) : (
          <button
            className={styles.button}
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
