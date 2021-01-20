import React from "react";
//Import Icons
import QCImac from "../img/Projects/QCImac.png";
import QCIphone from "../img/Projects/QCIphone.png";
import QCPro from "../img/Projects/QCPro.png";
import QCRImac from "../img/Projects/QCRImac.png";
import QCRIphone from "../img/Projects/QCRIphone.png";
import QCRPro from "../img/Projects/QCRPro.png";
import SGImac from "../img/Projects/SGImac.png";
import SGIphone from "../img/Projects/SGIphone.png";
import SGPro from "../img/Projects/SGPro.png";
import TopTenImac from "../img/Projects/TopTenImac.png";
import TopTenIphone from "../img/Projects/TopTenIphone.png";
import TopTenPro from "../img/Projects/TopTenPro.png";
//Styles
import {StyledAbout} from "../styles";
import styled from "styled-components";
import {scrollReveal} from "../Animation";
import {useScroll} from "./useScroll";

const Projects = () => {
  const [element, controls] = useScroll();
  return (
    <StyledServices>
      <StyledTitle>
        <h2>
          The <span>projects</span> I have made.
        </h2>
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
        <a href="https://www.quietcast.art">
          <button>Visit</button>
        </a>
        <a href="https://github.com/Robert-Lark/newHomeFrontend">
          <button>Github</button>
        </a>
      </StyledTitle>

      <StyledTitle>
        <h2>Quiet Calm Records</h2>
        <h3>
          Quiet Calm Records is the home of the small mail-order Record Store I
          run as a hobby in my spare time. The site makes use of Responsive
          design techniques and allows the user to learn about and purchase hard
          to find vinyl and cds from my favorite artists and record labels.
        </h3>
        <StyledCards
          variants={scrollReveal}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          <QCR>
            <div className="Imac">
              <img alt="icon" src={QCRImac} />
            </div>
            <div className="Iphone">
              <img alt="icon" src={QCRIphone} />
            </div>

            <div className="Pro">
              <img alt="icon" src={QCRPro} />
            </div>
          </QCR>
        </StyledCards>
        <a href="https://www.quietcalmrecords.com">
          <button>Visit</button>
        </a>
      </StyledTitle>

      <StyledTitle>
        <h2>Top Ten Albums Of 2020</h2>
        <h3>
          Using CSS Grid Top Ten Albums of 2020 catalogues my favorite albums of
          the last year. This single-page-application makes use of Gatsby on the
          front-end and features a modal pop-out design.
        </h3>
        <StyledCards>
          <TopTen>
            <div className="Imac">
              <img alt="icon" src={TopTenImac} />
            </div>
            <div className="Iphone">
              <img alt="icon" src={TopTenIphone} />
            </div>
            <div className="Pro">
              <img alt="icon" src={TopTenPro} />
            </div>
          </TopTen>
        </StyledCards>
        <a href="https://www.quietcast.art/topten">
          <button>Visit</button>
        </a>
        <a href="https://github.com/Robert-Lark/newHomeFrontend/blob/main/src/pages/topten.js">
          <button>Github</button>
        </a>
      </StyledTitle>

      <StyledTitle>
        <h2>Sonic Architecture</h2>
        <h3>
          Hooking into the Discogs API this site displays information on my
          favorite record labels as well as a feed music related content I
          discover. It makes heavy use of Redux and framer-motion. This site was
          designed with a Mobile-first approach of responsive design and is
          optimized to look great on every screen size.
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
        <a href="https://zen-volhard-e00b02.netlify.app/">
          <button>Visit</button>
        </a>
        <a href="https://github.com/Robert-Lark/labelDash/tree/discogs">
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
  padding-right: 5rem;
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

const QCR = styled.div`
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
const TopTen = styled.div`
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
