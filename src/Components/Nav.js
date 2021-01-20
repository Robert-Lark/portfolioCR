import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {useLocation} from "react-router-dom";

const Nav = () => {
  const {pathname} = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Rob Lark
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <StyledLine
            transition={{duration: 0.75}}
            initial={{width: "0%"}}
            animate={{width: pathname === "/" ? "100%" : "0%"}}
          />
        </li>
        <li>
          <Link to="/qualifications"> Qualifications</Link>
          <StyledLine
            transition={{duration: 0.75}}
            initial={{width: "0%"}}
            animate={{width: pathname === "/qualifications" ? "100%" : "0%"}}
          />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <StyledLine
            transition={{duration: 0.75}}
            initial={{width: "0%"}}
            animate={{width: pathname === "/contact" ? "100%" : "0%"}}
          />
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
  position: sticky;
  top: 0;
  z-index: 10;
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
    font-size: 2rem;
    @media (max-width: 470px) {
      font-size: 1rem;
      margin: 0 20%;
    }
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    #logo {
      display: inline-block;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
  @media (max-width: 600px) {
    //overflow: hidden;
 margin-left: 0px;

 
}
`;
const StyledLine = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    height: 0.3rem;
    background: #23d997;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 0%;
  }
`;
export default Nav;
