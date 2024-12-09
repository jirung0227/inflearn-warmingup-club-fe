import React from "react";
import "./Nav.css";

export const Nav = () => {
  return (
    <nav className="nav">
      <img
        alt="Netflix Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        className="nav__logo"
        onClick={() => {
          window.location.reload();
        }}
      />
      <img
        alt="User logged"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        className="nav__avatar"
      />
    </nav>
  );
};
