import React, {useEffect} from "react";
import styled from "styled-components";
import advancedReactLogo from "../img/advancedReactLogo.png";
import ScrollTop from "../Components/ScrollTop";

import lambdaLogo from "../img/lambdaLogo.png";
import ES6Logo from "../img/ES6Logo.jpg";
import nodeLogo from "../img/nodeLogo.jpg";
import materialUiLogo from "../img/materialUILogo.jpg";
import creativeReactLogo from "../img/creativeReact.png";
import AdvancedCSSLogo from "../img/AdvancedCssAndSass.jpg";
import cssGrid from "../img/cssGrid.png";
import {useScrollq} from "../Components/useScroll";

import {pageAnimation, fade} from "../Animation";

const BandcampQual = () => {
  const [element, controls] = useScrollq();
  const [element1, controls1] = useScrollq();
  const [element2, controls2] = useScrollq();
  const [element3, controls3] = useScrollq();
  const [element4, controls4] = useScrollq();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledWork
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{background: "#fff"}}
    >
      <TitleDiv variants={fade}>
        <h1>QUALIFICATIONS</h1>
      </TitleDiv>
      <TitleInfoDiv>
        <h2 variants={fade} style={{textAlign: "center"}}>
          Here you can find information about my education and the
          qualifications and endorsements I have recieved.
        </h2>
      </TitleInfoDiv>
      <CoursesGrid>
        {/* LAMBDA */}
        <IQGrid>
          <Logo>
            <LogoImg src={lambdaLogo} alt="lambdaLogo" />
          </Logo>
          <Line></Line>
          <Info>
            <div style={{textAlign: "center"}}>
              <h5 style={{marginBottom: "10px"}}>
                I graduate from Lambda's twelve month Full Stack Web
                Development program at the end of March. With a heavy focus on
                teamwork and leadership skills Lambda has provided me a strong
                foundation for entering the web dev workforce.
              </h5>
            </div>
            <div
              style={{display: "flex", flexDirection: "row"}}
              className="lambda"
            >
              <ul style={{paddingRight: "40px"}}>
                <li>HTML</li>
                <li>CSS</li>
                <li>Compilers</li>
                <li>CLI's</li>
                <li>Javascript</li>
              </ul>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Node</li>
                <li>Python</li>
                <li>Profesional Development</li>
              </ul>
            </div>
          </Info>
        </IQGrid>
        {/* ADVANCED REACT */}
        <IQGrid>
          <Logo>
            <LogoImg src={advancedReactLogo} alt="lambdaLogo" />
          </Logo>
          <Line></Line>
          <Info>
            <div style={{textAlign: "center"}}>
              <h5 style={{marginBottom: "10px"}}>
                I really enjoy working within the React framework. This full
                spectrum course only increased my enthisiasm. Taught by the
                inimitable Wes Bos it showed me how to create a full online
                presence from scratch using some very complex packages and
                tools.
              </h5>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
              <ul style={{paddingRight: "40px"}}>
                <li>GraphQL Schema</li>
                <li>Queries and Mutations</li>
                <li>Resolvers</li>
                <li>Cache Management</li>
                <li>Sending Email</li>
              </ul>
              <ul>
                <li>Charging Credit Cards</li>
                <li>Pagination</li>
                <li>Forms</li>
                <li>Unit Testing</li>
                <li>Mounting vs Shallow Rendering</li>
              </ul>
            </div>
          </Info>
        </IQGrid>
        {/* NODE */}
        <IQGrid>
          <Logo
            variants={fade}
            animate={controls}
            initial="hidden"
            ref={element}
          >
            <LogoImg src={nodeLogo} alt="lambdaLogo" />
          </Logo>
          <Line></Line>
          <Info>
            <div style={{textAlign: "center"}}>
              <h5 style={{marginBottom: "10px"}}>
                A 35 hour all encompassing course on development using NodeJs.
                Taught by Andrew Mead and Rob Percival it is one of the highest
                rated Node courses on the online learning platform Udemy. Topics
                covered included but were not limited to:
              </h5>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
              <ul style={{paddingRight: "40px"}}>
                <li>Call Stacks, Callback Queues, and the Event Loop</li>
                <li>Making/Customizing HTTP Requests</li>
                <li>Handling Errors</li>
                <li>Static Assets</li>
                <li>Dynamic Pages with Templating</li>
              </ul>
              <ul>
                <li>The Query String</li>
                <li>SSH Keys</li>
                <li>MongoDB and NoSQL Databases</li>
                <li>REST APIs and Mongoose</li>
                <li>Securely Storing Passwords</li>
              </ul>
            </div>
          </Info>
        </IQGrid>
        {/* ES6 */}
        <IQGrid>
          <Logo
            variants={fade}
            animate={controls1}
            initial="hidden"
            ref={element1}
          >
            <LogoImg src={ES6Logo} alt="lambdaLogo" />
          </Logo>
          <Line></Line>
          <Info>
            <div style={{textAlign: "center"}}>
              <h5 style={{marginBottom: "10px"}}>
                This amazing course from Wes Bos helped me a great deal solving
                coding challenges using the latest updates to Javascript. No
                topic was left untouched and I feel confident in my abilities to
                tackle challenging problems using JS:
              </h5>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
              <ul style={{paddingRight: "40px"}}>
                <li>Sets</li>
                <li>Async + Await</li>
                <li>Array .some() and .every()</li>
                <li>The ...rest param</li>
                <li>Object Literal Upgrades</li>
              </ul>
              <ul>
                <li>Chaining Promises + Flow Control</li>
                <li>ESLint</li>
                <li>JavaScript Modules</li>
                <li>Polyfilling ES6 for Older Browsers</li>
                <li>Proxies</li>
              </ul>
            </div>
          </Info>
        </IQGrid>
        {/* MATERIAL UI */}
        <IQGrid>
          <Logo
            variants={fade}
            animate={controls2}
            initial="hidden"
            ref={element2}
          >
            <LogoImg src={materialUiLogo} alt="materialUiLogo" />
          </Logo>
          <Line></Line>
          <Info>
            <div style={{textAlign: "center"}}>
              <h5 style={{marginBottom: "10px"}}>
                One of my favorite styling libraries to work with, this
                extensive course taught me the ins and outs of Material UI.
                Using it's features to create both mobile and desktop first
                projects it is a library I draw on alot when working.
              </h5>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
              <ul style={{paddingRight: "40px"}}>
                <li>Image Optimization</li>
                <li>Styling Themes</li>
                <li>Using Tabs</li>
                <li>Using Menus</li>
                <li>Responsive Design</li>
              </ul>
              <ul>
                <li>Using Drawers</li>
                <li>Using Lists</li>
                <li>Using Grids</li>
                <li>Animation Configuration</li>
                <li>Testing</li>
              </ul>
            </div>
          </Info>
        </IQGrid>
        {/* ADVANCED CSS & SASS */}
        <IQGrid>
          <Logo
            variants={fade}
            animate={controls2}
            initial="hidden"
            ref={element2}
          >
            <LogoImg src={AdvancedCSSLogo} alt="lambdaLogo" />
          </Logo>
          <Line></Line>
          <Info>
            <div style={{textAlign: "center"}}>
              <h5 style={{marginBottom: "10px"}}>
                This 28 hour course covered all there is to know about css
                compilers and Sass. I had alot of fun working with the various
                tools that Sass provides and have used the skills I learned in
                the course in every projects since completion.
              </h5>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
              <ul style={{paddingRight: "40px"}}>
                <li>Compilers</li>
                <li>Media Queries</li>
                <li>Global Styles</li>
                <li>Resets</li>
                <li>Animation Libraries</li>
              </ul>
              <ul>
                <li>Functional Styling</li>
                <li>Flexbox</li>
                <li>NPM for Styling</li>
                <li>Tracks</li>
                <li>Viewports</li>
              </ul>
            </div>
          </Info>
        </IQGrid>
        {/* CREATIVE REACT & REDUX */}
        <IQGrid style={{marginTop: "60px"}}>
          <Logo
            variants={fade}
            animate={controls3}
            initial="hidden"
            ref={element3}
            className="move-up"
          >
            <LogoImg src={creativeReactLogo} alt="creativeReactLogo" />
          </Logo>
          <Line></Line>
          <Info>
            <div style={{textAlign: "center"}}>
              <h5 style={{marginBottom: "10px"}}>
                This amazing course taught by the one and only Dev Ed showed me
                how to combine beautiful javascript functions as JSX with
                creative css and animation using Framer Motion and Styled
                Components.
              </h5>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
              <ul style={{paddingRight: "40px"}}>
                <li>Styled Components</li>
                <li>Framer Motion</li>
                <li>Typographic Design</li>
                <li>Color Theory</li>
                <li>Modals</li>
              </ul>
              <ul>
                <li>Lazy Loading</li>
                <li>Image Optimization</li>
                <li>Displaying API Data</li>
                <li>Figma</li>
                <li>Layout Design</li>
              </ul>
            </div>
          </Info>
        </IQGrid>

        {/* CSS GRID */}
        <IQGrid style={{margin: "60px 0"}}>
          <Logo
            variants={fade}
            animate={controls4}
            initial="hidden"
            ref={element4}
            className="move-up"
          >
            <LogoImg src={cssGrid} alt="cssGridLogo" />
          </Logo>
          <Line></Line>
          <Info>
            <div style={{textAlign: "center"}}>
              <h5 style={{marginBottom: "10px"}}>
                This firefox sponsored course taught me all about the exciting
                new way of rending content. Relying heavily on the Firefox
                dev-tools it has given me the confidence to quickly and easily
                render data to a page in an aesthically pleasing way.
              </h5>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}  className="bottom">
              <ul style={{paddingRight: "40px"}}>
                <li>Firefox Dev-tools</li>
                <li>Units of Measurement</li>
                <li>Template Columns & Rows</li>
                <li>Max-fill / Max-Fit</li>
                <li>FR units</li>
              </ul>
              <ul>
                <li>Minmax</li>
                <li>Repeat Functions</li>
                <li>CSS Variables</li>
                <li>Naming Lines</li>
                <li>Implicit and Explicit Tracks</li>
              </ul>
            </div>
          </Info>
        </IQGrid>
      </CoursesGrid>
      <ScrollTop />
    </StyledWork>
  );
};

const StyledWork = styled.div`
  padding: 5rem 10rem;
  h5 {
    padding: 17px;
    font-size: 2rem;
    font-weight: normal;
    @media (max-width: 600px) {
      font-size: 1rem;
      padding: 10px;
    }
  }
  ul {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
      margin-left: 45px;
    }
    @media (orientation: landscape) and (max-width: 600px) {
      margin-left: 45px;
}

  }
  li {
    font-size: 1.5rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 600px) {
    height: 100%;
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 470px) {
  }
`;
const Line = styled.div`
  border-top: 2px solid black;
  height: 1px;
  @media (max-width: 1400px) {
    display: none;
  }
  @media (max-width: 900px) {
    display: none;
  }
  @media (max-width: 470px) {
    width: 30rem;
  }
`;
const CoursesGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
  grid-gap: 20px;
  grid-auto-rows: 400px 20px 100px;
  @media (min-width: 1600px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
    grid-gap: 20px;
    grid-auto-rows: 400px 20px 300px;
  }
  @media (max-width: 900px) {
    width: 80vw;
    height: 90%;
    grid-template-columns: 80vw;
    grid-gap: 70px;
    grid-auto-rows: 150px 10px 200px;
    div {
      width: 80vw;
    }
    h5 {
      font-size: 2rem;
    }
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    h5 {
      font-size: 2rem;
    }
  }
  @media (max-width: 470px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const IQGrid = styled.div`
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  grid-gap: 1rem;
  @media (max-width: 900px) {
    grid-gap: 2rem;
  }
  @media (max-width: 600px) {
    .move-up {
      height: 20rem;
      margin-top: -80px;
    }
  }
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 10px;
  }
`;
const TitleInfoDiv = styled.div`
  h2 {
    font-size: 3rem;
  }
  grid-column: 1 / span 2;
  grid-row: 2 / span 2;
  @media (max-width: 700px) {
    h2 {
      font-size: 2rem;
      text-align: center;
    }
  }
`;
// const FrameCont = styled.div`
//   grid-column: 3 / span 1;
//   grid-row: span 15;
//   display: flex;
//   flex-direction: column;
// `;

const LogoImg = styled.img`
  /* width: 75%;
  border-radius: 10%; */
`;
const Logo = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 45vw;
    position: absolute;
    max-width: 75%;
    border-radius: 10%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (min-width: 1400px) {
      width: 45vw;
    }
  }
  @media (max-width: 900px) {
    width: 45vw;
  }
  @media (max-width: 470px) {
    width: 30rem;
    height: 10rem;
    margin-top: 25px;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .bottom{
    @media (max-width: 600px) {
      margin-bottom: 50px;
  }
  .lambda {
    @media (max-width: 600px) {
      
      ul {
        margin-left: 80px;
      }
    }
    @media (max-width: 400px) {
      
      ul {
        margin-left: 50px;
      }
    }
  }
  @media (max-width: 900px) {
    width: 45vw;

    h5 {
      font-size: 2rem;
    }
  }
  @media (max-width: 470px) {
    width: 30rem;
    ul {
      width: 35vw;
      display: flex;
      flex-direction: column;
      align-items: left;
      li {
        font-size: 1rem;
      }
    }
  }
`;

//IMAGES

export default BandcampQual;
