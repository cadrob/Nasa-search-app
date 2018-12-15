import React from "react";
import "../App.css";
import { Link } from "@reach/router";

const Header = props => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <header className="mainHeader">NASA Search</header>
    </Link>
  );
};

export default Header;
