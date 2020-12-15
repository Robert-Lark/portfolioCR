import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import athlete from "../img/athlete-small.png";
// import racer from "../img/theracer-small.png";
// import goodTimes from "../img/goodtimes-small.png";
import styled from "styled-components";

import PythonLogo from "../img/pythonLogo.png";
import ScrollTop from "../Components/ScrollTop";
import ReactCert from "../img/ReactCert.png";
import lambdaLogo from "../img/lambdaLogo.png";
import bJSLogo from "../img/begginerJsLogo.png";
import ES6Logo from "../img/ES6Logo.jpg";
import begginerReactLog from "../img/begginerReactLogo.png";
import wesBosLogo from "../img/wesBosLogo.png";
import lambdaSmallLogo from "../img/LambdaSmallLogo.png";
import nodeLogo from "../img/nodeLogo.jpg";
import devEdLogo from "../img/devEdLogo.jpg";
import udemyLogo from "../img/udemyLogo.png";
import materialUiLogo from "../img/materialUILogo.jpg";
import creativeReactLogo from "../img/creativeReact.png";
import { motion } from "framer-motion";
import {
  SliderAnimation,
  SliderContainer,
  pageAnimation,
  // fade,
  // photoAnimation,
  // lineAnimation,
} from "../Animation";
//import { useScroll } from "../Components/useScroll";

const OurWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const [element, controls] = useScroll();
  // const [element2, controls2] = useScroll();
  return (
    <StyledWork
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      {/* <Frame1> */}

      {/* </Frame1> */}

      <TitleDiv>
        <h1>QUALIFICATIONS</h1>
      </TitleDiv>
      <FrameCont variants={SliderContainer}>
        <StyledImage
          variants={SliderAnimation}
          src={lambdaSmallLogo}
          alt="logo"
        />
        <StyledImage variants={SliderAnimation} src={wesBosLogo} alt="logo" />
        <StyledImage variants={SliderAnimation} src={devEdLogo} alt="logo" />
        <StyledImage variants={SliderAnimation} src={udemyLogo} alt="logo" />
        <StyledImage
          variants={SliderAnimation}
          src={materialUiLogo}
          alt="logo"
        />
        <StyledImage variants={SliderAnimation} src={PythonLogo} alt="logo" />
      </FrameCont>
      <TitleInfoDiv>
        <h2>
          Here you can find information about my education and the
          qualifications and endorsements I have recieved.
        </h2>
      </TitleInfoDiv>
      <LambdaDiv>
        <LogoImg src={lambdaLogo} alt="lambdaLogo" />
        <CourseTitleDiv>FULL STACK WEB DEVELOPMENT</CourseTitleDiv>
      </LambdaDiv>
      <LambdaInfoDiv>
        INFO ON LAMBDA Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Illo, odio repudiandae officiis exercitationem impedit voluptatum
        blanditiis architecto, odit labore, soluta nobis sapiente amet sunt
        fuga?
      </LambdaInfoDiv>
      <BegJSDiv>
        <LogoImg
          src={bJSLogo}
          alt="lambdaLogo"
          style={{ width: "75%", borderRadius: "10%" }}
        />
        <CourseTitleDiv>Begginer JS</CourseTitleDiv>
      </BegJSDiv>
      <InfoOnBegJSDiv>
        Info On Begginner JS Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Illo, odio repudiandae officiis exercitationem impedit voluptatum
        blanditiis architecto, odit labore, soluta nobis sapiente amet sunt
        fuga?
      </InfoOnBegJSDiv>
      <DivImageOfLambdaEndorsement>
        <ImageOfEndorsement src={ReactCert} alt="cert" />
      </DivImageOfLambdaEndorsement>
      <DivImageOfBegJSEndorsement>
        <ImageOfEndorsement src={ReactCert} alt="cert" />
      </DivImageOfBegJSEndorsement>
      <BegReactDiv>
        <Es6Div>
          <LogoImg
            src={begginerReactLog}
            alt="lambdaLogo"
            style={{ width: "75%", borderRadius: "10%" }}
          />
          <CourseTitleDiv>Begginer React</CourseTitleDiv>
        </Es6Div>
      </BegReactDiv>
      <InfoOnBegReactDiv>
        Info on begginer React Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Illo, odio repudiandae officiis exercitationem impedit
        voluptatum blanditiis architecto, odit labore, soluta nobis sapiente
        amet sunt fuga?
      </InfoOnBegReactDiv>
      <DivImageOfBegReactEndorsement>
        <ImageOfEndorsement src={ReactCert} alt="cert" />
      </DivImageOfBegReactEndorsement>
      <Es6Div>
        <LogoImg
          src={ES6Logo}
          alt="lambdaLogo"
          style={{ width: "75%", borderRadius: "10%" }}
        />
        <CourseTitleDiv>ES6 For Everyone</CourseTitleDiv>
      </Es6Div>
      <InfoOnEs6Div>
        InfoOnEs6Div Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Illo, odio repudiandae officiis exercitationem impedit voluptatum
        blanditiis architecto, odit labore, soluta nobis sapiente amet sunt
        fuga?
      </InfoOnEs6Div>
      <DivImageOfes6Endorsement>
        <ImageOfEndorsement src={ReactCert} alt="cert" />
      </DivImageOfes6Endorsement>
      <NodeDiv>
        <LogoImg
          src={nodeLogo}
          alt="lambdaLogo"
          style={{ width: "75%", borderRadius: "10%" }}
        />
      </NodeDiv>
      <CourseTitleDiv>The Complete Node.js Developer Course (3rd Edition)</CourseTitleDiv>
      <InfoOnNodeDiv>
        INFO ON NODE Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Illo, odio repudiandae officiis exercitationem impedit voluptatum
        blanditiis architecto, odit labore, soluta nobis sapiente amet sunt
        fuga?
      </InfoOnNodeDiv>
      <DivImageOfNodeEndorsement>
        <ImageOfEndorsement src={ReactCert} alt="cert" />
      </DivImageOfNodeEndorsement>
      <CreativeReactDiv>
        <LogoImg
          src={creativeReactLogo}
          alt="lambdaLogo"
          style={{ width: "75%", borderRadius: "10%" }}
        />
        <CourseTitleDiv>The Creative React Course</CourseTitleDiv>
      </CreativeReactDiv>
      <InfoOnCreativeReactDiv>
        Info on Creative React Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Illo, odio repudiandae officiis exercitationem impedit
        voluptatum blanditiis architecto, odit labore, soluta nobis sapiente
        amet sunt fuga?
      </InfoOnCreativeReactDiv>
      <DivImageOfCreativeReactEndorsement>
        <ImageOfEndorsement src={ReactCert} alt="cert" />
      </DivImageOfCreativeReactEndorsement>
      {/* 
      <LambdaDiv>NAME OF SCHOOL</LambdaDiv>

      <NameOfProgramDiv>INFO ON PROGRAM</NameOfProgramDiv>
      <NameOfProgramDiv></NameOfProgramDiv>
      <NameOfSchooDiv>NAME OF SCHOOL</NameOfSchooDiv>

      <NameOfProgramDiv>INFO ON PROGRAM</NameOfProgramDiv>
      <NameOfProgramDiv></NameOfProgramDiv>
      <NameOfSchooDiv>NAME OF SCHOOL</NameOfSchooDiv>

      <NameOfProgramDiv>INFO ON PROGRAM</NameOfProgramDiv>
      <NameOfProgramDiv></NameOfProgramDiv>
      <DivImageOfEndorsement>
      <ImageOfEndorsement src={ReactCert} alt="cert"></ImageOfEndorsement>
      </DivImageOfEndorsement>
      <DivImageOfEndorsement>
      <ImageOfEndorsement src={ReactCert} alt="cert"></ImageOfEndorsement>
      </DivImageOfEndorsement>
      <NameOfSchooDiv>NAME OF SCHOOL</NameOfSchooDiv>
      <NameOfSchooDiv>NAME OF SCHOOL</NameOfSchooDiv>
      <NameOfProgramDiv>INFO ON PROGRAM</NameOfProgramDiv>
      <NameOfProgramDiv>INFO ON PROGRAM</NameOfProgramDiv>
      <DivImageOfEndorsement>
      <ImageOfEndorsement src={ReactCert} alt="cert"></ImageOfEndorsement>
      </DivImageOfEndorsement>
      <DivImageOfEndorsement>
      <ImageOfEndorsement src={ReactCert} alt="cert"></ImageOfEndorsement>
      </DivImageOfEndorsement>
      <NameOfSchooDiv>NAME OF SCHOOL</NameOfSchooDiv>
      <NameOfSchooDiv>NAME OF SCHOOL</NameOfSchooDiv>
      <NameOfProgramDiv>INFO ON PROGRAM</NameOfProgramDiv>
      <NameOfProgramDiv>INFO ON PROGRAM</NameOfProgramDiv> */}
      {/* <StyledMovie>
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
      </StyledMovie> */}
      <ScrollTop />
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 100px;
  /* grid-template-rows: repeat(auto-fit, minmax(100px, 1fr)); */
  grid-gap: 20px;
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

const TitleDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 1 / -2;
  grid-row: 1 / span 1;
`;
const TitleInfoDiv = styled.div`
  h2 {
    font-size: 3rem;
  }
  grid-column: 1 / span 2;
  grid-row: 2 / span 2;
`;

const FrameCont = styled(motion.div)`
  grid-column: 3 / span 1;
  grid-row: span 15;
  display: flex;
  flex-direction: column;
`;
const LogoImg = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 100%;
`;

const CourseTitleDiv = styled(motion.div)`

`

const LambdaDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: 4 / span 1;
`;
const LambdaInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: 5 / span 1;
`;

const DivImageOfLambdaEndorsement = styled.div`
  grid-row: 6 / span 7;
`;

const BegJSDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / span 1;
  grid-row: 4 / span 1;
`;

const InfoOnBegJSDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / span 1;
  grid-row: 5 / span 1;
`;

const DivImageOfBegJSEndorsement = styled.div`
  grid-column: 2 / span 1;
  grid-row: 6 / span 7;
`;

const BegReactDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: 13 / span 1;
`;
const InfoOnBegReactDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: 14 / span 1;
`;

const DivImageOfBegReactEndorsement = styled.div`
  grid-row: 15 / span 7;
`;
const Es6Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / 1;
  grid-row: 13 / span 1;
`;
const InfoOnEs6Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / 1;
  grid-row: 14 / span 1;
`;

const DivImageOfes6Endorsement = styled.div`
  grid-column: 2 / 1;
  grid-row: 15 / span 7;
`;
const NodeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: 22 / span 1;
`;
const InfoOnNodeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: 23 / span 1;
`;

const DivImageOfNodeEndorsement = styled.div`
  grid-row: 24 / span 7;
`;
const CreativeReactDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / 1;
  grid-row: 22 / span 1;
`;

const InfoOnCreativeReactDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / 1;
  grid-row: 23 / span 1;
`;
const DivImageOfCreativeReactEndorsement = styled.div`
  grid-column: 2 / 1;
  grid-row: 24 / span 7;
`;

const ImageOfEndorsement = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 100%;
`;

const StyledImage = styled(motion.img)`
  margin-top: 25px;
  width: 80%;
`;

export default OurWork;
