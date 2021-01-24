import React, {useEffect} from "react";
import styled from "styled-components";
import advancedReactLogo from "../img/advancedReactLogo.png";
import lambdaLogo from "../img/lambdaLogo.png";
import ES6Logo from "../img/ES6Logo.jpg";
import nodeLogo from "../img/nodeLogo.jpg";
import materialUiLogo from "../img/materialUILogo.jpg";
import creativeReactLogo from "../img/creativeReact.png";
import AdvancedCSSLogo from "../img/AdvancedCssAndSass.jpg";
import cssGrid from "../img/cssGrid.png";

const data = [
  {
    img: lambdaLogo,
    info:
      "I graduate from Lambda's twelve month Full Stack Web Development program at the end of March. With a heavy focus on teamwork and leadership skills Lambda has provided me a strong foundation for entering the web dev workforce.",
    li: [
      "HTML",
      "CSS",
      "Compilers",
      "CLI's",
      "Javascript",
      "React",
      "Redux",
      "Node",
      "Python",
      "Profesional Development",
    ],
  },
  {
    img: advancedReactLogo,
    info:
      "I really enjoy working within the React framework. This full spectrum course only increased my enthisiasm. Taught by the inimitable Wes Bos it showed me how to create a full online presence from scratch using some very complex packages and tools.",
    li: [
      "GraphQL Schema",
      "Queries and Mutations",
      "Resolvers",
      "Cache Management",
      "Sending Email",
      "Charging Credit Cards",
      "Pagination",
      "Forms",
      "Unit Testing",
      "Mounting vs Shallow Rendering",
    ],
  },
  {
    img: nodeLogo,
    info:
      "A 35 hour all encompassing course on development using NodeJs. Taught by Andrew Mead and Rob Percival it is one of the highest rated Node courses on the online learning platform Udemy. Topics covered included but were not limited to:",
    li: [
      "Call Stacks, Callback Queues, and the Event Loop",
      "Making/Customizing HTTP Requests",
      "Handling Errors",
      "Static Assets",
      "Dynamic Pages with Templating",
      "The Query String",
      "SSH Keys",
      "MongoDB and NoSQL Databases",
      "REST APIs and Mongoose",
      "Securely Storing Passwords",
    ],
  },
  {
    img: ES6Logo,
    info:
      "This amazing course from Wes Bos helped me a great deal solving coding challenges using the latest updates to Javascript. No topic was left untouched and I feel confident in my abilities to tackle challenging problems using JS:",
    li: [
      "Sets",
      "Async + Await",
      "Array .some() and .every()",
      "The ...rest param",
      "Object Literal Upgrades",
      "Chaining Promises + Flow Control",
      "ESLint",
      "JavaScript Modules",
      "Polyfilling ES6 for Older Browsers",
      "Proxies",
    ],
  },
  {
    img: materialUiLogo,
    info:
      "One of my favorite styling libraries to work with, this extensive course taught me the ins and outs of Material UI. Using it's features to create both mobile and desktop first projects it is a library I draw on alot when working.",
    li: [
      "Image Optimization",
      "Styling Themes",
      "Using Tabs",
      "Using Menus",
      "Responsive Design",
      "Using Drawers",
      "Using Lists",
      "Using Grids",
      "Animation Configuration",
      "Testing",
    ],
  },
  {
    img: AdvancedCSSLogo,
    info:
      "This 28 hour course covered all there is to know about css compilers and Sass. I had alot of fun working with the various tools that Sass provides and have used the skills I learned in the course in every projects since completion.",
    li: [
      "Compilers",
      "Media Queries",
      "Global Styles",
      "Resets",
      "Animation Libraries",
      "Functional Styling",
      "Flexbox",
      "NPM for Styling",
      "Tracks",
      "Viewports",
    ],
  },
  {
    img: creativeReactLogo,
    info:
      "This amazing course taught by the one and only Dev Ed showed me how to combine beautiful javascript functions as JSX with creative css and animation using Framer Motion and Styled Components.",
    li: [
      "Styled Components",
      "Framer Motion",
      "Typographic Design",
      "Color Theory",
      "Modals",
      "Lazy Loading",
      "Image Optimization",
      "Displaying API Data",
      "Figma",
      "Layout Design",
    ],
  },
  {
    img: cssGrid,
    info:
      "This firefox sponsored course taught me all about the exciting new way of rending content. Relying heavily on the Firefox dev-tools it has given me the confidence to quickly and easily render data to a page in an aesthically pleasing way.",
    li: [
      "Firefox Dev-tools",
      "Units of Measurement",
      "Template Columns & Rows",
      "Max-fill / Max-Fit",
      "FR units",
      "Minmax",
      "Repeat Functions",
      "CSS Variables",
      "Naming Lines",
      "Implicit and Explicit Tracks",
    ],
  },
];

const Test = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledWork style={{background: "#fff"}}>
      <TitleDiv>
        <h1>QUALIFICATIONS</h1>
      </TitleDiv>

      <TitleInfoDiv>
        <h2>
          Here you can find information about my education and the
          qualifications and endorsements I have recieved.
        </h2>
      </TitleInfoDiv>

      {data.map((data) => {
        return (
          <CoursesGrid>
            <Logo>
              <img src={data.img} alt="Logo" />
            </Logo>
            <Info>
              <h3>{data.info}</h3>
            </Info>
            <List>
              <h2>I Learned</h2>
              {data.li.map((listItem) => (
                <ul style={{listStyleType: "none"}}>
                  <li key={listItem}>{listItem}</li>
                </ul>
              ))}
            </List>
            <Line></Line>
          </CoursesGrid>
        );
      })}
    </StyledWork>
  );
};

const StyledWork = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  @media (min-width: 1800px) {
    margin: 0 10%;
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const TitleDiv = styled.div`
  font-size: 3rem;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const TitleInfoDiv = styled.div`
  padding: 3rem;
  width: 80vw;
  h2 {
    font-size: 2rem;
  }
`;

const CoursesGrid = styled.div`
  height: 100%;
  padding: 1rem;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(0, 1fr 1fr);
  @media (min-height: 930px) {
    height: 65vh;
  }
  @media (min-width: 900px) {
    height: auto;
  }
`;

const Logo = styled.div`
  width: 50vw;
  padding: 2rem;
  @media (max-width: 600px) {
    width: 60vw;
  }
  @media (max-width: 400px) {
    width: 75vw;
  }
  img {
    border-radius: 20px;
    max-width: 50%;
    @media (max-width: 900px) {
      max-width: 80%;
    }
    @media (max-width: 600px) {
      max-width: 100%;
    }
  }
`;
const Info = styled.div`
  height: auto;
  h3 {
    font-size: 2rem;
    color: black;
    font-weight: lighter;
    @media (min-width: 1800px) {
      font-size: 1.5rem;
      padding: 0 25px;
    }
  }
  
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    padding: 1rem;
    color: black;
  }

  li {
    font-size: 2rem;
    @media (min-width: 1800px) {
      font-size: 1rem;
    }
    @media (max-width: 400px) {
      font-size: 1.5rem;
    }
  }
  margin-bottom: 5px;
`;
const Line = styled.div`
  padding: 5rem 5rem 0rem 5rem;
  border-top: 2px solid black;
  height: 1px;
  width: 80vw;
  @media (min-width: 1800px) {
    width: 60vw;
    padding-top: 25px;
     
    }
    
`;

export default Test;
