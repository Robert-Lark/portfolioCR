import React from "react";
import home1 from "../img/home1.png";
import {titleAnimation, photoAnimation} from "../Animation";
import Wave from "./Wave";
import styled from "styled-components";
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../styles";
import CSSLogo from "../img/cssLogo.png";
import HTMLLogo from "../img/htmlLogo.png";
import NodeLogo from "../img/NODELOGOO.png";
import ReactDb from "../img/reactLogo.png";
import JSLogo from "../img/JS.png";


import {motion} from "framer-motion";

const BandcampAboutSection = () => {
  return (
    <StyledAbout exit="exit">
      <StyledDescription>
        <motion.div>
          <Wave />
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              Making 
              <span style={{color: "#EC3944"}}> Art</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
            not <span>content</span> 
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation} style={{marginBottom: "50px"}}>
             using:
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <StyledContainer variants={titleAnimation}>
              <StyledLogoContainer>
                <StyledLogo src={HTMLLogo} alt="null" style={{width: "100%"}} />
                <p>HTML</p>
              </StyledLogoContainer>
              <StyledLogoContainer>
                <StyledLogo src={CSSLogo} alt="null" style={{width: "100%"}} />
                <p>CSS</p>
              </StyledLogoContainer>
              <StyledLogoContainer>
                <StyledLogo src={JSLogo} alt="null" style={{width: "100%"}} />
                <p>JAVASCRIPT</p>
              </StyledLogoContainer>

              <StyledLogoContainer>
                <StyledLogo
                  src={NodeLogo}
                  alt="null"
                  style={{
                    width: "190%",
                  }}
                />
                <p>NODE</p>
              </StyledLogoContainer>
              <StyledLogoContainer>
                <StyledLogo src={ReactDb} alt="null" style={{width: "150%"}} />
                <p>REACT</p>
              </StyledLogoContainer>
            </StyledContainer>
          </StyledHide>
        </motion.div>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="Photo of Rob Lark"
        />
      </StyledImage>
    </StyledAbout>
  );
};
const StyledContainer = styled(motion.div)`
  margin-top: "5%";
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  @media (max-width: 500px) {
  }
`;
const StyledLogoContainer = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLogo = styled(motion.img)`
  width: 15%;
`;

export default BandcampAboutSection;
