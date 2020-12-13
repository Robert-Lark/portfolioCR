import React from "react";
import home1 from "../img/home1.png";
import {titleAnimation, fade, photoAnimation} from '../Animation'
import Wave from './Wave'
//import styled from "styled-components";
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../styles";

import { motion } from "framer-motion";

const AboutSection = () => {
  

  return (
    <StyledAbout exit="exit">
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>Graduate of the <span style={{color: "#EC3944"}}>Lambda School</span> of</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              <span>Full Stack Web Development</span> with a strong proficiency in 
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have proffesionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnimation} src={home1} alt="guy with a camera" />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
