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
import insomnia from "../img/Tools/insomnia.jpg";
import redux from "../img/Tools/Redux.png";
import sql from "../img/Tools/sql.svg";
import sanity from "../img/Tools/sanity.png";

//Styles
import {StyledTools, StyledDescription} from "../styles";
import styled from "styled-components";
import {scrollReveal} from "../Animation";
import {useScroll} from "./useScroll";

const image = [
  sass,
  insomnia,
  motion,
  redux,
  styledC,
  material,
  sql,
  grid,
  blisk,
  sanity,
  greensock,
  figma,
];

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
      </StyledDescription>
      <StyledCards>
        {image.map((tool) => (
          <StyledCard>
            <div className="icon">
              <img alt="icon" src={tool} />
            </div>
          </StyledCard>
        ))}
      </StyledCards>
    </StyledServices>
  );
};

const StyledServices = styled(StyledTools)`
  text-align: center;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  overflow: hidden;
  text-align: center;

  h2 {
    padding-bottom: 5rem;
  }
  @media (min-width: 1400px) {
  }
  @media (max-width: 1300px) {
  }
`;
const StyledCards = styled.div`
  display: grid;
  grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1rem;
  @media (max-width: 400px) {
    grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 40px;
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
      width: 200px;
      height: 150px;
      object-fit: cover;
      border-radius: 20px;
      margin: 10px;
  }
    }
    @media (max-width: 600px) {
      img {
      float: left;
      width: 150px;
      height: 115px;
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
