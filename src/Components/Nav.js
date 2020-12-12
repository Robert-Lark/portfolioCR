import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const nav = () => {
  return (
    <StyledNav >
      <h1>
        <Link id="logo" to="/">
          Rob Lark
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/work"> Qualifications</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default nav;
