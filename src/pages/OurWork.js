import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import racer from "../img/theracer-small.png";
import goodTimes from "../img/goodtimes-small.png";
import styled from "styled-components";
import CSSLogo from "../img/cssLogo.png";
import HTMLLogo from "../img/htmlLogo.png";
import NodeLogo from "../img/NODELOGOO.png";
import ReactDb from "../img/reactLogo.png";
import JSLogo from "../img/JS.png";
import ScrollTop from "../Components/ScrollTop";

import { motion } from "framer-motion";
import {
  SliderAnimation,
  SliderContainer,
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
} from "../Animation";
import { useScroll } from "../Components/useScroll";

const OurWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <StyledWork
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <motion.div variants={SliderContainer}>
        <Frame1>
          <StyledImage variants={SliderAnimation} src={NodeLogo} alt="logo" />
          <StyledImage variants={SliderAnimation} src={ReactDb} alt="logo" />
          <StyledImage variants={SliderAnimation} src={CSSLogo} alt="logo" />
          <StyledImage variants={SliderAnimation} src={JSLogo} alt="logo" />
          <StyledImage variants={SliderAnimation} src={HTMLLogo} alt="logo" />
        </Frame1>
      </motion.div>
      <StyledMovie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <StyledHide>
            <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
          </StyledHide>
        </Link>
      </StyledMovie>
      <StyledMovie
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <motion.h2>The Racer</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-racer">
          <motion.img variants={photoAnimation} src={racer} alt="racer" />
        </Link>
      </StyledMovie>
      <StyledMovie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <motion.h2>Good Times </motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/good-times">
          <motion.img
            variants={photoAnimation}
            src={goodTimes}
            alt="good times"
          />
        </Link>
      </StyledMovie>
      <ScrollTop />
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300) {
    padding: 2rem 2rem;
  }
`;
const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const StyledHide = styled.div`
  overflow: hidden;
`;

//frameAnimation

const Frame1 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  top: 10%;
  right: 15%;
`;

const StyledImage = styled(motion.img)`
  width: 15%;
`;

export default OurWork;
