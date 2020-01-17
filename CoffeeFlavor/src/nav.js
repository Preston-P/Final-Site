import React from "react";
import styled from "styled-components";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";

function Nav() {
  const navstyle = {
    color: "white",
    textDecoration: "none"
  };
  return (
    <Navbar>
      <nav>
        <h3>Have a taste </h3>
        <ul>
          <Link style={navstyle} to="/">
            <li>Home</li>
          </Link>

          <Link style={navstyle} to="/Brew">
            <li>Brew</li>
          </Link>
        </ul>
      </nav>
    </Navbar>
  );
}

export default Nav;
