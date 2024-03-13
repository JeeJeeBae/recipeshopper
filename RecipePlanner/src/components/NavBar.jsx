import React from "react";
// import styles from "./components/NavBar.module.css";
// import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navBar">
      <nav>
        <ul>
          <li>
            <NavLink>Main</NavLink>
          </li>
          <li>
            <NavLink>Members</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
