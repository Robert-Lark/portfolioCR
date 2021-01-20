import React from "react";
//Import Icons
import sass from "../img/Tools/sass.svg";
import motion from "../img/Tools/motion.png";
import styledC from "../img/Tools/styledcomponents1.png";
import material from "../img/Tools/material_ui.png";
import grid from "../img/Tools/grid.jpeg";
import blisk from "../img/Tools/Blisk.jpg";
import greensock from "../img/Tools/greensock.png";
import figma from "../img/Tools/figma.png";
//Styles
import {StyledTools, StyledDescription} from "../styles";
import styled from "styled-components";
import {scrollReveal} from "../Animation";
import {useScroll} from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledServices
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledDescription>
        <h2>
          The <span>tools</span> I use.
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img alt="icon" src={sass} />
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img alt="icon" src={material} />
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img alt="icon" src={motion} />
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img alt="icon" src={greensock} />
            </div>
          </StyledCard>
        </StyledCards>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img alt="icon" src={styledC} />
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img alt="icon" src={grid} />
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img alt="icon" src={figma} />
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img alt="icon" src={blisk} />
            </div>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
    </StyledServices>
  );
};

const StyledServices = styled(StyledTools)`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;

  h2 {
    padding-bottom: 5rem;
  }
  @media (min-width: 1400px) {
text-align: center;
}
@media (max-width: 1300px) {
    justify-content: center;
  }
`;
const StyledCards = styled.div`
  display: grid;
  grid-template-columns: 80px 80px 80px 80px;
  grid-template-rows: 10px 1fr;
  gap: 150px;
  @media (min-width: 1400px) {
    justify-content: center;
    grid-template-columns: 10% 10% 10% 10%;
  grid-template-rows: 40px 1fr;
  gap: 150px;
  }
  @media (max-width: 1300px) {
    justify-content: center;
 width: 100vw;
 height: 40vh;
 grid-template-columns: 40% 40%;
 grid-template-rows: 20% 20%;
gap: 20%;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 100px 100px;
  grid-template-rows: 10px 10px 1fr;
  gap: 150px;
  }
  @media (max-width: 600px) {

    grid-template-columns: 50px 50px;
  grid-template-rows: 10px 10px 1fr;
  gap: 150px;
  }
  @media (max-width: 400px) {
    grid-template-columns: 10px 10px;
  grid-template-rows: 10px 10px 1fr;
  gap: 150px;
  }
`;
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    img {
      float: left;
      width: 200px;
      height: 150px;
      object-fit: cover;
      border-radius: 20px;
    }
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
    @media (max-width: 1300px) {
      img {
      float: left;
      width: 150px;
      height: 100px;
      object-fit: cover;
      border-radius: 20px;
      margin: 100px;
  }
    @media (max-width: 600px) {
      img {
      float: left;
      width: 150px;
      height: 100px;
      object-fit: cover;
      border-radius: 20px;
    }
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
    }
  }
    @media (max-width: 400px) {
      img {
      float: left;
      width: 150px;
      height: 100px;
      object-fit: cover;
      border-radius: 20px;
    }
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
    }
`;

export default ServicesSection;
