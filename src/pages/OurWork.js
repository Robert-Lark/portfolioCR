import React from "react";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import racer from "../img/theracer-small.png";
import goodTimes from "../img/goodtimes-small.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  SliderAnimation,
  SliderContainer,
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
} from "../Animation";

const OurWork = () => {
  return (
    <StyledWork
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
        <motion.div variants={SliderContainer}>
      <Frame1 variants={SliderAnimation}></Frame1>
      <Frame2 variants={SliderAnimation}></Frame2>
      <Frame3 variants={SliderAnimation}></Frame3>
      <Frame4 variants={SliderAnimation}></Frame4>
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
      <StyledMovie>
        <motion.h2>The Racer</motion.h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <motion.img variants={photoAnimation} src={racer} alt="racer" />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <motion.h2>Good Times </motion.h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <motion.img
            variants={photoAnimation}
            src={goodTimes}
            alt="good times"
          />
        </Link>
      </StyledMovie>
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
`;
const StyledMovie = styled.div`
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
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
