import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import Login from "../Login/Login";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  console.log(user);

  return (
    <nav className={styles.navbar}>
      {isAuthenticated ? (
        <a className={styles.title} >
          Hey {user.given_name}, Welcome to Shibang's Portfolio!
        </a>
      ) : (
        <a className={styles.title} >
          Hey user please login for more exciting features.
        </a>
      )}
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          {isAuthenticated ? (
            <a href="#" onClick={(e) => logout()}>
              Logout
            </a>
          ) : (
            <li>
              <a href="#" onClick={(e) => loginWithRedirect()}>
                Login
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
