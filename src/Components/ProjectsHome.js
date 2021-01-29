import React from "react";
//Import Icons
import QCImac from "../img/Projects/QCImac.png";
import QCIphone from "../img/Projects/QCIphone.png";
import QCPro from "../img/Projects/QCPro.png";

import SGImac from "../img/Projects/SGImac.png";
import SGIphone from "../img/Projects/SGIphone.png";
import SGPro from "../img/Projects/SGPro.png";

//Styles
import {StyledAbout} from "../styles";
import styled from "styled-components";
import {scrollReveal} from "../Animation";
import {useScroll} from "./useScroll";

const Projects = () => {
  const [element, controls] = useScroll();
  return (
    <StyledServices>
      <h2>
        The <span>projects</span> I have made.
      </h2>
      <StyledTitle>
        <h2>Sonic Architecture</h2>
        <h3>
          Using Redux and GraphQL this site hooks into several API's to display
          information on independent record labels as well as a feed of music
          related content. Full spectrum authentication allows users to
          sign-up/log-in and personalize their news feed & a fully secured POS
          allows customers to purchase vinyl and cd copies of their favorite
          albums.
        </h3>
        <StyledCards>
          <SG>
            <div className="Imac">
              <img alt="icon" src={SGImac} />
            </div>
            <div className="Iphone">
              <img alt="icon" src={SGIphone} />
            </div>
            <div className="Pro">
              <img alt="icon" src={SGPro} />
            </div>
          </SG>
        </StyledCards>
        <a href="https://zen-volhard-e00b02.netlify.app/" target="blank">
          <button>Visit</button>
        </a>
        <a
          href="https://github.com/Robert-Lark/labelDash/tree/discogs"
          target="blank"
        >
          <button>Github</button>
        </a>
      </StyledTitle>
      <StyledTitle>
        <h2>Quiet Cast</h2>
        <h3>
          A home for interviews and mixes from prolific artists in the ambient
          music scene. Made using headless CMS from Sanity and graphQl queries.
        </h3>
        <StyledCards
          variants={scrollReveal}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          <QC>
            <div className="Imac">
              <img alt="icon" src={QCImac} />
            </div>
            <div className="Iphone">
              <img alt="icon" src={QCIphone} />
            </div>

            <div className="Pro">
              <img alt="icon" src={QCPro} />
            </div>
          </QC>
        </StyledCards>
        <a href="https://www.quietcast.art" target="blank">
          <button>Visit</button>
        </a>
        <a href="https://github.com/Robert-Lark/newHomeFrontend" target="blank">
          <button>Github</button>
        </a>
      </StyledTitle>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (min-width: 1300px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    //align-items: center;
    //justify-content: center;
  }
`;

const StyledTitle = styled.div`
  flex: 1;
  //padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
    margin-bottom: -25px;
  }
  h3 {
    font-weight: lighter;
    font-size: 2rem;
    padding: 20px;
  }
  @media (min-width: 1300px) {
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

const StyledCards = styled.div`
  display: grid;
  grid-template-columns: 95vw;
  grid-template-rows: 30vw;
  gap: 10px;
  @media (min-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const QC = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 20px;
  .Iphone {
    img {
      width: 10vw;
      border-radius: 10px;
    }
  }
  .Imac {
    img {
      width: 30vw;
      border-radius: 40px;
    }
  }
  .Pro {
    img {
      width: 30vw;
      border-radius: 40px;
    }
  }
  .icon {
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
  @media (min-width: 1300px) {
  }
`;

const SG = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 20px;
  .Iphone {
    img {
      width: 10vw;
      border-radius: 10px;
    }
  }
  .Imac {
    img {
      width: 30vw;
      border-radius: 40px;
    }
  }
  .Pro {
    img {
      width: 30vw;
      border-radius: 40px;
    }
  }
  .icon {
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default Projects;
