import React, { useContext } from "react";
import "./useContextCss.css";
import { ThemeContext } from "../ThemeContext";
import { UserContext } from "../UserContext";

function Header() {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome {user}!</h1>
    </header>
  );
}

export default Header;
