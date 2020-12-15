import React, { useEffect } from "react";
import styled from "styled-components";
import advancedReactLogo from "../img/advancedReactLogo.png";
import ScrollTop from "../Components/ScrollTop";
import ReactCert from "../img/ReactCert.png";
import lambdaLogo from "../img/lambdaLogo.png";
import PythonProgramLogo from "../img/PythonProgramLogo.png";
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
import creativeCodingClubLogo from "../img/creativeCodingClubLogo.jpg";
import masterGatsbyLogo from "../img/masterGatsby.png";
import AdvancedCSSLogo from "../img/AdvancedCssAndSass.jpg";
import cssGrid from "../img/cssGrid.png";
import { useScroll } from "../Components/useScroll";
import { motion } from "framer-motion";
import {
  SliderAnimation,
  SliderContainer,
  pageAnimation,
  fade,
} from "../Animation";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledWork
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <TitleDiv variants={fade}>
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
        <StyledImage
          variants={SliderAnimation}
          src={creativeCodingClubLogo}
          alt="logo"
        />
      </FrameCont>
      <TitleInfoDiv>
        <motion.h2 variants={fade}>
          Here you can find information about my education and the
          qualifications and endorsements I have recieved.
        </motion.h2>
      </TitleInfoDiv>
      {/* LAMBDA */}
      <LambdaDiv>
        <LogoImg src={lambdaLogo} alt="lambdaLogo" />
        <CourseTitleDiv>FULL STACK WEB DEVELOPMENT</CourseTitleDiv>
      </LambdaDiv>
      <LambdaInfoDiv>
        <div style={{ textAlign: "center" }}>
          <h5 style={{ marginBottom: "10px" }}>
            INFO ON THE PROGRAM : Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dignissimos rerum magnam quod sed aliquid aperiam
            optio ex quo quaerat quia? Repellendus nemo velit minima ipsa labore
            vitae ipsum! Debitis possimus nisi, eaque fugit rem saepe vel odit
            ipsa dolor corporis accusamus architecto rerum voluptas laboriosam,
            ipsum, facilis soluta id voluptatem.
          </h5>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ul style={{ paddingRight: "40px" }}>
            <li>GraphQL Schema</li>
            <li>Queries and Mutations</li>
            <li>Resolvers</li>
            <li>Cache Management</li>
            <li>Sending Email</li>
          </ul>
          <ul>
            <li>Charging Credit Cards</li>
            <li>Pagination</li>
            <li>Forms in React</li>
            <li>Unit Testing</li>
            <li>Mounting vs Shallow Rendering</li>
          </ul>
        </div>
      </LambdaInfoDiv>
      <DivImageOfLambdaFP>
        <ImageOfFinalProject src={ReactCert} alt="cert" />
        <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
      </DivImageOfLambdaFP>
      {/* ADVANCED REACT */}
      <AdvancedReactDiv>
        <LogoImg
          src={advancedReactLogo}
          alt="lambdaLogo"
          style={{ width: "75%", borderRadius: "10%" }}
        />
      </AdvancedReactDiv>
      <InfoOnAdvancedReactDiv>
        <div style={{ textAlign: "center" }}>
          <h5 style={{ marginBottom: "10px" }}>
            INFO ON THE PROGRAM : Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dignissimos rerum magnam quod sed aliquid aperiam
            optio ex quo quaerat quia? Repellendus nemo velit minima ipsa labore
            vitae ipsum! Debitis possimus nisi, eaque fugit rem saepe vel odit
            ipsa dolor corporis accusamus architecto rerum voluptas laboriosam,
            ipsum, facilis soluta id voluptatem.
          </h5>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ul style={{ paddingRight: "40px" }}>
            <li>GraphQL Schema</li>
            <li>Queries and Mutations</li>
            <li>Resolvers</li>
            <li>Cache Management</li>
            <li>Sending Email</li>
          </ul>
          <ul>
            <li>Charging Credit Cards</li>
            <li>Pagination</li>
            <li>Forms in React</li>
            <li>Unit Testing</li>
            <li>Mounting vs Shallow Rendering</li>
          </ul>
        </div>
      </InfoOnAdvancedReactDiv>
      <DivImageOfAdvancedReactFP>
        <ImageOfFinalProject src={ReactCert} alt="cert" />
        <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
      </DivImageOfAdvancedReactFP>
      {/* NODE */}
      <motion.div
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <NodeDiv>
          <LogoImg
            src={nodeLogo}
            alt="lambdaLogo"
            style={{ width: "75%", borderRadius: "10%" }}
          />
          The Complete Node.js Developer Course (3rd Edition)
        </NodeDiv>
        <InfoOnNodeDiv>
          <div style={{ textAlign: "center" }}>
            <h5 style={{ marginBottom: "10px" }}>
              INFO ON THE PROGRAM : Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dignissimos rerum magnam quod sed aliquid
              aperiam optio ex quo quaerat quia? Repellendus nemo velit minima
              ipsa labore vitae ipsum! Debitis possimus nisi, eaque fugit rem
              saepe vel odit ipsa dolor corporis accusamus architecto rerum
              voluptas laboriosam, ipsum, facilis soluta id voluptatem.
            </h5>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ul style={{ paddingRight: "40px" }}>
              <li>GraphQL Schema</li>
              <li>Queries and Mutations</li>
              <li>Resolvers</li>
              <li>Cache Management</li>
              <li>Sending Email</li>
            </ul>
            <ul>
              <li>Charging Credit Cards</li>
              <li>Pagination</li>
              <li>Forms in React</li>
              <li>Unit Testing</li>
              <li>Mounting vs Shallow Rendering</li>
            </ul>
          </div>
        </InfoOnNodeDiv>
        <DivImageOfNodeFP>
          <ImageOfFinalProject src={ReactCert} alt="cert" />
          <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
        </DivImageOfNodeFP>
        {/* PYTHON */}
        <PythonDiv>
          <LogoImg
            src={PythonProgramLogo}
            alt="PythonProgramLogo"
            style={{ width: "75%", borderRadius: "10%" }}
          />
        </PythonDiv>
        <InfoOnPythonDiv>
          <div style={{ textAlign: "center" }}>
            <h5 style={{ marginBottom: "10px" }}>
              INFO ON THE PROGRAM : Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dignissimos rerum magnam quod sed aliquid
              aperiam optio ex quo quaerat quia? Repellendus nemo velit minima
              ipsa labore vitae ipsum! Debitis possimus nisi, eaque fugit rem
              saepe vel odit ipsa dolor corporis accusamus architecto rerum
              voluptas laboriosam, ipsum, facilis soluta id voluptatem.
            </h5>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ul style={{ paddingRight: "40px" }}>
              <li>GraphQL Schema</li>
              <li>Queries and Mutations</li>
              <li>Resolvers</li>
              <li>Cache Management</li>
              <li>Sending Email</li>
            </ul>
            <ul>
              <li>Charging Credit Cards</li>
              <li>Pagination</li>
              <li>Forms in React</li>
              <li>Unit Testing</li>
              <li>Mounting vs Shallow Rendering</li>
            </ul>
          </div>
        </InfoOnPythonDiv>
        <DivImageOfPythonFP>
          <ImageOfFinalProject src={ReactCert} alt="cert" />
          <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
        </DivImageOfPythonFP>
        {/* ES6 */}
        <Es6Div>
          <LogoImg
            src={ES6Logo}
            alt="lambdaLogo"
            style={{ width: "75%", borderRadius: "10%" }}
          />
        </Es6Div>
        <InfoOnEs6Div>
          <div style={{ textAlign: "center" }}>
            <h5 style={{ marginBottom: "10px" }}>
              INFO ON THE ES6 PROGRAM : Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dignissimos rerum magnam quod sed aliquid
              aperiam optio ex quo quaerat quia? Repellendus nemo velit minima
              ipsa labore vitae ipsum! Debitis possimus nisi, eaque fugit rem
              saepe vel odit ipsa dolor corporis accusamus architecto rerum
              voluptas laboriosam, ipsum, facilis soluta id voluptatem.
            </h5>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ul style={{ paddingRight: "40px" }}>
              <li>GraphQL Schema</li>
              <li>Queries and Mutations</li>
              <li>Resolvers</li>
              <li>Cache Management</li>
              <li>Sending Email</li>
            </ul>
            <ul>
              <li>Charging Credit Cards</li>
              <li>Pagination</li>
              <li>Forms in React</li>
              <li>Unit Testing</li>
              <li>Mounting vs Shallow Rendering</li>
            </ul>
          </div>
        </InfoOnEs6Div>
        <DivImageOfes6FP>
          <ImageOfFinalProject src={ReactCert} alt="cert" />
          <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
        </DivImageOfes6FP>
        {/* MASTER GATSBY */}
        <MasterGatsbyDiv>
          <LogoImg
            src={masterGatsbyLogo}
            alt="lambdaLogo"
            style={{ width: "75%", borderRadius: "10%" }}
          />
        </MasterGatsbyDiv>
        <InfoOnMasterGatsbyDiv>
          <div style={{ textAlign: "center" }}>
            <h5 style={{ marginBottom: "10px" }}>
              INFO ON THE PROGRAM : Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dignissimos rerum magnam quod sed aliquid
              aperiam optio ex quo quaerat quia? Repellendus nemo velit minima
              ipsa labore vitae ipsum! Debitis possimus nisi, eaque fugit rem
              saepe vel odit ipsa dolor corporis accusamus architecto rerum
              voluptas laboriosam, ipsum, facilis soluta id voluptatem.
            </h5>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ul style={{ paddingRight: "40px" }}>
              <li>GraphQL Schema</li>
              <li>Queries and Mutations</li>
              <li>Resolvers</li>
              <li>Cache Management</li>
              <li>Sending Email</li>
            </ul>
            <ul>
              <li>Charging Credit Cards</li>
              <li>Pagination</li>
              <li>Forms in React</li>
              <li>Unit Testing</li>
              <li>Mounting vs Shallow Rendering</li>
            </ul>
          </div>
        </InfoOnMasterGatsbyDiv>
        <DivImageOfMasterGatsbyFP>
          <ImageOfFinalProject src={ReactCert} alt="cert" />
          <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
        </DivImageOfMasterGatsbyFP>
        {/* MATERIAL UI */}
      </motion.div>
      <motion.div
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <MaterialUIDiv>
          <LogoImg
            src={materialUiLogo}
            alt="materialUiLogo"
            style={{ width: "75%", borderRadius: "10%" }}
          />
        </MaterialUIDiv>
        <InfoOnMaterialUIDiv>
          <div style={{ textAlign: "center" }}>
            <h5 style={{ marginBottom: "10px" }}>
              INFO ON THE PROGRAM : Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dignissimos rerum magnam quod sed aliquid
              aperiam optio ex quo quaerat quia? Repellendus nemo velit minima
              ipsa labore vitae ipsum! Debitis possimus nisi, eaque fugit rem
              saepe vel odit ipsa dolor corporis accusamus architecto rerum
              voluptas laboriosam, ipsum, facilis soluta id voluptatem.
            </h5>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ul style={{ paddingRight: "40px" }}>
              <li>GraphQL Schema</li>
              <li>Queries and Mutations</li>
              <li>Resolvers</li>
              <li>Cache Management</li>
              <li>Sending Email</li>
            </ul>
            <ul>
              <li>Charging Credit Cards</li>
              <li>Pagination</li>
              <li>Forms in React</li>
              <li>Unit Testing</li>
              <li>Mounting vs Shallow Rendering</li>
            </ul>
          </div>
        </InfoOnMaterialUIDiv>
        <DivImageOfMaterialUIFP>
          <ImageOfFinalProject src={ReactCert} alt="cert" />
          <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
        </DivImageOfMaterialUIFP>
        {/* ADVANCED CSS & SASS */}
        <AdvancedCSSDiv>
          <LogoImg
            src={AdvancedCSSLogo}
            alt="lambdaLogo"
            style={{ width: "75%", borderRadius: "10%" }}
          />
        </AdvancedCSSDiv>
        <InfoOnAdvancedCSSDiv>
          <div style={{ textAlign: "center" }}>
            <h5 style={{ marginBottom: "10px" }}>
              INFO ON THE PROGRAM : Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dignissimos rerum magnam quod sed aliquid
              aperiam optio ex quo quaerat quia? Repellendus nemo velit minima
              ipsa labore vitae ipsum! Debitis possimus nisi, eaque fugit rem
              saepe vel odit ipsa dolor corporis accusamus architecto rerum
              voluptas laboriosam, ipsum, facilis soluta id voluptatem.
            </h5>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ul style={{ paddingRight: "40px" }}>
              <li>GraphQL Schema</li>
              <li>Queries and Mutations</li>
              <li>Resolvers</li>
              <li>Cache Management</li>
              <li>Sending Email</li>
            </ul>
            <ul>
              <li>Charging Credit Cards</li>
              <li>Pagination</li>
              <li>Forms in React</li>
              <li>Unit Testing</li>
              <li>Mounting vs Shallow Rendering</li>
            </ul>
          </div>
        </InfoOnAdvancedCSSDiv>
        <DivImageOfAdvancedCSSFP>
          <ImageOfFinalProject src={ReactCert} alt="cert" />
          <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
        </DivImageOfAdvancedCSSFP>
        {/* CREATIVE REACT & REDUX */}
        <CreativeReactDiv>
          <LogoImg
            src={creativeReactLogo}
            alt="creativeReactLogo"
            style={{ width: "75%", borderRadius: "10%" }}
          />
        </CreativeReactDiv>
        <InfoOnCreativeReactDiv>
          <div style={{ textAlign: "center" }}>
            <h5 style={{ marginBottom: "10px" }}>
              INFO ON THE PROGRAM : Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dignissimos rerum magnam quod sed aliquid
              aperiam optio ex quo quaerat quia? Repellendus nemo velit minima
              ipsa labore vitae ipsum! Debitis possimus nisi, eaque fugit rem
              saepe vel odit ipsa dolor corporis accusamus architecto rerum
              voluptas laboriosam, ipsum, facilis soluta id voluptatem.
            </h5>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ul style={{ paddingRight: "40px" }}>
              <li>GraphQL Schema</li>
              <li>Queries and Mutations</li>
              <li>Resolvers</li>
              <li>Cache Management</li>
              <li>Sending Email</li>
            </ul>
            <ul>
              <li>Charging Credit Cards</li>
              <li>Pagination</li>
              <li>Forms in React</li>
              <li>Unit Testing</li>
              <li>Mounting vs Shallow Rendering</li>
            </ul>
          </div>
        </InfoOnCreativeReactDiv>
        <DivImageOfCreativeReactFP>
          <ImageOfFinalProject src={ReactCert} alt="cert" />
          <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
        </DivImageOfCreativeReactFP>
        {/* BEGGINNER REACT */}
        <BegReactDiv>
          <LogoImg
            src={begginerReactLog}
            alt="begginerReactLogo"
            style={{ width: "75%", borderRadius: "10%" }}
          />
        </BegReactDiv>
        <InfoOnBegReactDiv>
          <div style={{ textAlign: "center" }}>
            <h5 style={{ marginBottom: "10px" }}>
              INFO ON THE PROGRAM : Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dignissimos rerum magnam quod sed aliquid
              aperiam optio ex quo quaerat quia? Repellendus nemo velit minima
              ipsa labore vitae ipsum! Debitis possimus nisi, eaque fugit rem
              saepe vel odit ipsa dolor corporis accusamus architecto rerum
              voluptas laboriosam, ipsum, facilis soluta id voluptatem.
            </h5>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ul style={{ paddingRight: "40px" }}>
              <li>GraphQL Schema</li>
              <li>Queries and Mutations</li>
              <li>Resolvers</li>
              <li>Cache Management</li>
              <li>Sending Email</li>
            </ul>
            <ul>
              <li>Charging Credit Cards</li>
              <li>Pagination</li>
              <li>Forms in React</li>
              <li>Unit Testing</li>
              <li>Mounting vs Shallow Rendering</li>
            </ul>
          </div>
        </InfoOnBegReactDiv>
        <DivImageOfBegReactFP>
          <ImageOfFinalProject src={ReactCert} alt="cert" />
          <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
        </DivImageOfBegReactFP>
        {/* BEGGINER JS */}
      </motion.div>
      <BegJSDiv>
        <LogoImg
          src={bJSLogo}
          alt="bJSLogo"
          style={{ width: "75%", borderRadius: "10%" }}
        />
      </BegJSDiv>
      <InfoOnBegJSDiv>
        <div style={{ textAlign: "center" }}>
          <h5 style={{ marginBottom: "10px" }}>
            INFO ON THE PROGRAM : Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dignissimos rerum magnam quod sed aliquid aperiam
            optio ex quo quaerat quia? Repellendus nemo velit minima ipsa labore
            vitae ipsum! Debitis possimus nisi, eaque fugit rem saepe vel odit
            ipsa dolor corporis accusamus architecto rerum voluptas laboriosam,
            ipsum, facilis soluta id voluptatem.
          </h5>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ul style={{ paddingRight: "40px" }}>
            <li>GraphQL Schema</li>
            <li>Queries and Mutations</li>
            <li>Resolvers</li>
            <li>Cache Management</li>
            <li>Sending Email</li>
          </ul>
          <ul>
            <li>Charging Credit Cards</li>
            <li>Pagination</li>
            <li>Forms in React</li>
            <li>Unit Testing</li>
            <li>Mounting vs Shallow Rendering</li>
          </ul>
        </div>
      </InfoOnBegJSDiv>
      <DivImageOfBegJSFP>
        <ImageOfFinalProject src={ReactCert} alt="cert" />
        <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
      </DivImageOfBegJSFP>
      {/* CSS GRID */}
      <CSSGridDiv>
        <LogoImg
          src={cssGrid}
          alt="cssGridLogo"
          style={{ width: "75%", borderRadius: "10%" }}
        />
      </CSSGridDiv>
      <InfoOnCSSGridDiv>
        <div style={{ textAlign: "center" }}>
          <h5 style={{ marginBottom: "10px" }}>
            INFO ON THE PROGRAM : Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dignissimos rerum magnam quod sed aliquid aperiam
            optio ex quo quaerat quia? Repellendus nemo velit minima ipsa labore
            vitae ipsum! Debitis possimus nisi, eaque fugit rem saepe vel odit
            ipsa dolor corporis accusamus architecto rerum voluptas laboriosam,
            ipsum, facilis soluta id voluptatem.
          </h5>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ul style={{ paddingRight: "40px" }}>
            <li>GraphQL Schema</li>
            <li>Queries and Mutations</li>
            <li>Resolvers</li>
            <li>Cache Management</li>
            <li>Sending Email</li>
          </ul>
          <ul>
            <li>Charging Credit Cards</li>
            <li>Pagination</li>
            <li>Forms in React</li>
            <li>Unit Testing</li>
            <li>Mounting vs Shallow Rendering</li>
          </ul>
        </div>
      </InfoOnCSSGridDiv>
      <DivImageOfCSSGridFP>
        <ImageOfFinalProject src={ReactCert} alt="cert" />
        <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
      </DivImageOfCSSGridFP>
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
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;
const TitleInfoDiv = styled(motion.div)`
  h2 {
    font-size: 3rem;
  }
  grid-column: 1 / span 2;
  grid-row: 2 / span 2;
  @media (max-width: 700px) {
    h2 {
      font-size: 2rem;
    }
  }
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

const CourseTitleDiv = styled(motion.div)``;
//LAMBDA 1
const LambdaDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: 4 / span 1;
`;
const LambdaInfoDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: 5 / span 1;
`;
const DivImageOfLambdaFP = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-row: 6 / span 4;
`;
//ADVANCED REACT 2
const AdvancedReactDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / span 1;
  grid-row: 4 / span 1;
`;
const InfoOnAdvancedReactDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / span 1;
  grid-row: 5 / span 1;
`;
const DivImageOfAdvancedReactFP = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-column: 2 / span 1;
  grid-row: 6 / span 4;
`;
//NODE 1
const NodeDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: 10 / span 1;
`;
const InfoOnNodeDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: 11 / span 1;
`;
const DivImageOfNodeFP = styled(motion.div)`
  grid-row: 12 / span 4;
`;
//PYTHON 2
const PythonDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / span 1;
  grid-row: 10 / span 1;
`;
const InfoOnPythonDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / span 1;
  grid-row: 11 / span 1;
`;
const DivImageOfPythonFP = styled(motion.div)`
  grid-column: 2 / span 1;
  grid-row: 12 / span 4;
`;
//ES6 1
const Es6Div = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  grid-row: 16 / span 1;
`;
const InfoOnEs6Div = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  grid-row: 17 / span 1;
`;

const DivImageOfes6FP = styled(motion.div)`
  grid-row: 18 / span 4;
`;
//MASTER GATSBY 2
const MasterGatsbyDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / 1;
  grid-row: 16 / span 1;
`;
const InfoOnMasterGatsbyDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / 1;
  grid-row: 17 / span 1;
`;
const DivImageOfMasterGatsbyFP = styled(motion.div)`
  grid-column: 2 / 1;
  grid-row: 18 / span 4;
`;

//MATERIALUI 1
const MaterialUIDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: 22 / span 1;
`;
const InfoOnMaterialUIDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: 23 / span 1;
`;
const DivImageOfMaterialUIFP = styled(motion.div)`
  grid-row: 24 / span 4;
`;
//ADVANCEDCSSANDSASS 2
const AdvancedCSSDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / 1;
  grid-row: 22 / span 1;
`;
const InfoOnAdvancedCSSDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / 1;
  grid-row: 23 / span 1;
`;
const DivImageOfAdvancedCSSFP = styled(motion.div)`
  grid-column: 2 / 1;
  grid-row: 24 / span 4;
`;
//CREATIVE REACT 1
const CreativeReactDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: 28 / span 1;
`;

const InfoOnCreativeReactDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: 29 / span 1;
`;
const DivImageOfCreativeReactFP = styled(motion.div)`
  grid-row: 30 / span 4;
`;

//BEGGINNERREACT 2
const BegReactDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / 1;
  grid-row: 28 / span 1;
`;
const InfoOnBegReactDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / 1;
  grid-row: 29 / span 1;
`;
const DivImageOfBegReactFP = styled(motion.div)`
  grid-column: 2 / 1;
  grid-row: 30 / span 4;
`;
//BEGGINERJS 1
const BegJSDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: 34 / span 1;
`;
const InfoOnBegJSDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: 35 / span 1;
`;
const DivImageOfBegJSFP = styled(motion.div)`
  grid-row: 36 / span 4;
`;
//CSSGRID 2
const CSSGridDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / 1;
  grid-row: 34 / span 1;
`;
const InfoOnCSSGridDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2 / 1;
  grid-row: 35 / span 1;
`;
const DivImageOfCSSGridFP = styled(motion.div)`
  grid-column: 2 / 1;
  grid-row: 36 / span 4;
`;
//IMAGES
const ImageOfFinalProject = styled.img`
  border-radius: 20px;
  padding: 3%;
  width: 50%;
  max-height: 100%;
`;
const ImageOfFinalProjectCode = styled.img`
  border-radius: 20px;
  padding: 3%;
  width: 50%;
  max-height: 100%;
`;
const StyledImage = styled(motion.img)`
  margin-top: 25px;
  width: 80%;
  border-radius: 10%;
`;

export default OurWork;
