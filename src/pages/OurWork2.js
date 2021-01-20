// import React, {useEffect} from "react";
// import styled from "styled-components";
// import advancedReactLogo from "../img/advancedReactLogo.png";
// import ScrollTop from "../Components/ScrollTop";
// import ReactCert from "../img/ReactCert.png";
// import lambdaLogo from "../img/lambdaLogo.png";
// import PythonProgramLogo from "../img/PythonProgramLogo.png";
// import bJSLogo from "../img/begginerJsLogo.png";
// import ES6Logo from "../img/ES6Logo.jpg";
// import begginerReactLog from "../img/begginerReactLogo.png";
// import wesBosLogo from "../img/wesBosLogo.png";
// import lambdaSmallLogo from "../img/LambdaSmallLogo.png";
// import nodeLogo from "../img/nodeLogo.jpg";
// import devEdLogo from "../img/devEdLogo.jpg";
// import udemyLogo from "../img/udemyLogo.png";
// import materialUiLogo from "../img/materialUILogo.jpg";
// import creativeReactLogo from "../img/creativeReact.png";
// import creativeCodingClubLogo from "../img/creativeCodingClubLogo.jpg";
// import masterGatsbyLogo from "../img/masterGatsby.png";
// import AdvancedCSSLogo from "../img/AdvancedCssAndSass.jpg";
// import cssGrid from "../img/cssGrid.png";
// import {useScrollq} from "../Components/useScroll";
// import {motion} from "framer-motion";
// import {
//   SliderAnimation,
//   SliderContainer,
//   pageAnimation,
//   fade,
// } from "../Animation";

// const OurWork2 = () => {
//   const [element, controls] = useScrollq();
//   const [element1, controls1] = useScrollq();
//   const [element2, controls2] = useScrollq();
//   const [element3, controls3] = useScrollq();
//   const [element4, controls4] = useScrollq();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <StyledWork
//       exit="exit"
//       variants={pageAnimation}
//       initial="hidden"
//       animate="show"
//       style={{background: "#fff"}}
//     >
//       <TitleDiv variants={fade}>
//         <h1>QUALIFICATIONS</h1>
//       </TitleDiv>
//       {/* <FrameCont variants={SliderContainer}>
//         <StyledImage
//           variants={SliderAnimation}
//           src={lambdaSmallLogo}
//           alt="logo"
//         />
//         <StyledImage variants={SliderAnimation} src={wesBosLogo} alt="logo" />
//         <StyledImage variants={SliderAnimation} src={devEdLogo} alt="logo" />
//         <StyledImage variants={SliderAnimation} src={udemyLogo} alt="logo" />
//         <StyledImage
//           variants={SliderAnimation}
//           src={materialUiLogo}
//           alt="logo"
//         />
//         <StyledImage
//           variants={SliderAnimation}
//           src={creativeCodingClubLogo}
//           alt="logo"
//         />
//       </FrameCont> */}
//       <TitleInfoDiv>
//         <motion.h2 variants={fade}>
//           Here you can find information about my education and the
//           qualifications and endorsements I have recieved.
//         </motion.h2>
//       </TitleInfoDiv>
//       <CoursesGrid>
//         {/* LAMBDA */}
//         <IQGrid>
//           <Logo>
//             <LogoImg src={lambdaLogo} alt="lambdaLogo" />
//           </Logo>
//           <div style={{borderTop: "2px solid black"}}></div>
//           <Info>
//             <div style={{textAlign: "center"}}>
//               <h5 style={{marginBottom: "10px"}}>
//                 I graduate from Lambda's eighteen month Full Stack Web
//                 Development program at the end of March. With a heavy focus on
//                 teamwork and leadership skills Lambda has provided me a strong
//                 foundation for entering the web dev workforce.
//               </h5>
//             </div>
//             <div style={{display: "flex", flexDirection: "row"}}>
//               <ul style={{paddingRight: "40px"}}>
//                 <li>HTML</li>
//                 <li>CSS</li>
//                 <li>Compilers</li>
//                 <li>CLI's</li>
//                 <li>Javascript</li>
//               </ul>
//               <ul>
//                 <li>React</li>
//                 <li>Redux</li>
//                 <li>Node</li>
//                 <li>Python</li>
//                 <li>Profesional Development</li>
//               </ul>
//             </div>
//           </Info>
//           <FP>
//             <ImageOfFinalProject src={ReactCert} alt="cert" />
//             <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
//           </FP>
//         </IQGrid>
//         {/* ADVANCED REACT */}
//         <IQGrid>
//           <Logo>
//             <LogoImg src={advancedReactLogo} alt="lambdaLogo" />
//           </Logo>
//           <div style={{borderTop: "2px solid black"}}></div>
//           <Info>
//             <div style={{textAlign: "center"}}>
//               <h5 style={{marginBottom: "10px"}}>
//               I graduate from Lambda's eighteen month Full Stack Web
//                 Development program at the end of March. With a heavy focus on
//                 teamwork and leadership skills Lambda has provided me a strong
//                 foundation for entering the web dev workforce.
//               </h5>
//             </div>
//             <div style={{display: "flex", flexDirection: "row"}}>
//               <ul style={{paddingRight: "40px"}}>
//                 <li>GraphQL Schema</li>
//                 <li>Queries and Mutations</li>
//                 <li>Resolvers</li>
//                 <li>Cache Management</li>
//                 <li>Sending Email</li>
//               </ul>
//               <ul>
//                 <li>Charging Credit Cards</li>
//                 <li>Pagination</li>
//                 <li>Forms</li>
//                 <li>Unit Testing</li>
//                 <li>Mounting vs Shallow Rendering</li>
//               </ul>
//             </div>
//           </Info>
//           <FP>
//             <ImageOfFinalProject src={ReactCert} alt="cert" />
//             <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
//           </FP>
//         </IQGrid>
//         {/* NODE */}
//         <IQGrid>
//           <Logo
//             variants={fade}
//             animate={controls}
//             initial="hidden"
//             ref={element}
//           >
//             <LogoImg src={nodeLogo} alt="lambdaLogo" />
//           </Logo>
//           <Info>
//             <div style={{textAlign: "center"}}>
//               <h5 style={{marginBottom: "10px"}}>
//                 A 35 hour all encompassing course on development using NodeJs.
//                 Taught by Andrew Mead and Rob Percival it is one of the highest
//                 rated Node courses on the online learning platform Udemy. Topics
//                 covered included but were not limited to:
//               </h5>
//             </div>
//             <div style={{display: "flex", flexDirection: "row"}}>
//               <ul style={{paddingRight: "40px"}}>
//                 <li>Call Stacks, Callback Queues, and the Event Loop</li>
//                 <li>Making/Customizing HTTP Requests</li>
//                 <li>Handling Errors</li>
//                 <li>Static Assets</li>
//                 <li>Dynamic Pages with Templating</li>
//               </ul>
//               <ul>
//                 <li>The Query String</li>
//                 <li>SSH Keys</li>
//                 <li>MongoDB and NoSQL Databases</li>
//                 <li>REST APIs and Mongoose</li>
//                 <li>Securely Storing Passwords</li>
//               </ul>
//             </div>
//           </Info>
//           <FP>
//             <ImageOfFinalProject src={ReactCert} alt="cert" />
//             <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
//           </FP>
//         </IQGrid>
//         {/* PYTHON */}
//         <IQGrid>
//           <Logo
//             variants={fade}
//             animate={controls}
//             initial="hidden"
//             ref={element}
//           >
//             <LogoImg src={PythonProgramLogo} alt="PythonProgramLogo" />
//           </Logo>
//           <Info>
//             <div style={{textAlign: "center"}}>
//               <h5 style={{marginBottom: "10px"}}>
//                 A 35 hour all encompassing course on development using NodeJs.
//                 Taught by Andrew Mead and Rob Percival it is one of the highest
//                 rated Node courses on the online learning platform Udemy. Topics
//                 covered included but were not limited to:
//               </h5>
//             </div>
//             <div style={{display: "flex", flexDirection: "row"}}>
//               <ul>
//                 <li>Call Stacks, Callback Queues, and the Event Loop</li>
//                 <li>Making/Customizing HTTP Requests</li>
//                 <li>Handling Errors</li>
//                 <li>Static Assets</li>
//                 <li>Dynamic Pages with Templating</li>
//               </ul>
//               <ul>
//                 <li>The Query String</li>
//                 <li>SSH Keys</li>
//                 <li>MongoDB and NoSQL Databases</li>
//                 <li>REST APIs and Mongoose</li>
//                 <li>Securely Storing Passwords</li>
//               </ul>
//             </div>
//           </Info>
//           <FP>
//             <ImageOfFinalProject src={ReactCert} alt="cert" />
//             <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
//           </FP>
//         </IQGrid>
//         {/* ES6 */}
//         <IQGrid>
//           <Logo
//             variants={fade}
//             animate={controls1}
//             initial="hidden"
//             ref={element1}
//           >
//             <LogoImg src={ES6Logo} alt="lambdaLogo" />
//           </Logo>
//           <Info>
//             <div style={{textAlign: "center"}}>
//               <h5 style={{marginBottom: "10px"}}>
//                 INFO ON THE ES6 PROGRAM : Lorem ipsum dolor sit amet consectetur
//                 adipisicing elit. Dignissimos rerum magnam quod sed aliquid
//                 aperiam optio ex quo quaerat quia? Repellendus nemo velit minima
//                 ipsa labore vitae ipsum! Debitis possimus nisi, eaque fugit rem
//                 saepe vel odit ipsa dolor corporis accusamus architecto rerum
//                 voluptas laboriosam, ipsum, facilis soluta id voluptatem.
//               </h5>
//             </div>
//             <div style={{display: "flex", flexDirection: "row"}}>
//               <ul style={{paddingRight: "40px"}}>
//                 <li>GraphQL Schema</li>
//                 <li>Queries and Mutations</li>
//                 <li>Resolvers</li>
//                 <li>Cache Management</li>
//                 <li>Sending Email</li>
//               </ul>
//               <ul>
//                 <li>Charging Credit Cards</li>
//                 <li>Pagination</li>
//                 <li>Forms in React</li>
//                 <li>Unit Testing</li>
//                 <li>Mounting vs Shallow Rendering</li>
//               </ul>
//             </div>
//           </Info>
//           <FP>
//             <ImageOfFinalProject src={ReactCert} alt="cert" />
//             <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
//           </FP>
//         </IQGrid>
//         {/* MASTER GATSBY */}
//         <IQGrid>
//           <Logo
//             variants={fade}
//             animate={controls1}
//             initial="hidden"
//             ref={element1}
//           >
//             <LogoImg src={masterGatsbyLogo} alt="lambdaLogo" />
//           </Logo>
//           <Info>
//             <div style={{textAlign: "center"}}>
//               <h5 style={{marginBottom: "10px"}}>
//                 INFO ON THE PROGRAM : Lorem ipsum dolor sit amet consectetur
//                 adipisicing elit. Dignissimos rerum magnam quod sed aliquid
//                 aperiam optio ex quo quaerat quia? Repellendus nemo velit minima
//                 ipsa labore vitae ipsum! Debitis possimus nisi, eaque fugit rem
//                 saepe vel odit ipsa dolor corporis accusamus architecto rerum
//                 voluptas laboriosam, ipsum, facilis soluta id voluptatem.
//               </h5>
//             </div>
//             <div style={{display: "flex", flexDirection: "row"}}>
//               <ul style={{paddingRight: "40px"}}>
//                 <li>GraphQL Schema</li>
//                 <li>Queries and Mutations</li>
//                 <li>Resolvers</li>
//                 <li>Cache Management</li>
//                 <li>Sending Email</li>
//               </ul>
//               <ul>
//                 <li>Charging Credit Cards</li>
//                 <li>Pagination</li>
//                 <li>Forms in React</li>
//                 <li>Unit Testing</li>
//                 <li>Mounting vs Shallow Rendering</li>
//               </ul>
//             </div>
//           </Info>
//           <FP>
//             <ImageOfFinalProject src={ReactCert} alt="cert" />
//             <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
//           </FP>
//         </IQGrid>
//         {/* MATERIAL UI */}
//         <IQGrid>
//           <Logo
//             variants={fade}
//             animate={controls2}
//             initial="hidden"
//             ref={element2}
//           >
//             <LogoImg src={materialUiLogo} alt="materialUiLogo" />
//           </Logo>
//           <Info>
//             <div style={{textAlign: "center"}}>
//               <h5 style={{marginBottom: "10px"}}>
//                 INFO ON THE PROGRAM : Lorem ipsum dolor sit amet consectetur
//                 adipisicing elit. Dignissimos rerum magnam quod sed aliquid
//                 aperiam optio ex quo quaerat quia? Repellendus nemo velit minima
//                 ipsa labore vitae ipsum! Debitis possimus nisi, eaque fugit rem
//                 saepe vel odit ipsa dolor corporis accusamus architecto rerum
//                 voluptas laboriosam, ipsum, facilis soluta id voluptatem.
//               </h5>
//             </div>
//             <div style={{display: "flex", flexDirection: "row"}}>
//               <ul style={{paddingRight: "40px"}}>
//                 <li>GraphQL Schema</li>
//                 <li>Queries and Mutations</li>
//                 <li>Resolvers</li>
//                 <li>Cache Management</li>
//                 <li>Sending Email</li>
//               </ul>
//               <ul>
//                 <li>Charging Credit Cards</li>
//                 <li>Pagination</li>
//                 <li>Forms in React</li>
//                 <li>Unit Testing</li>
//                 <li>Mounting vs Shallow Rendering</li>
//               </ul>
//             </div>
//           </Info>
//           <FP>
//             <ImageOfFinalProject src={ReactCert} alt="cert" />
//             <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
//           </FP>
//         </IQGrid>
//         {/* ADVANCED CSS & SASS */}
//         <IQGrid>
//           <Logo
//             variants={fade}
//             animate={controls2}
//             initial="hidden"
//             ref={element2}
//           >
//             <LogoImg src={AdvancedCSSLogo} alt="lambdaLogo" />
//           </Logo>
//           <Info>
//             <div style={{textAlign: "center"}}>
//               <h5 style={{marginBottom: "10px"}}>
//                 INFO ON THE PROGRAM : Lorem ipsum dolor sit amet consectetur
//                 adipisicing elit. Dignissimos rerum magnam quod sed aliquid
//                 aperiam optio ex quo quaerat quia? Repellendus nemo velit minima
//                 ipsa labore vitae ipsum! Debitis possimus nisi, eaque fugit rem
//                 saepe vel odit ipsa dolor corporis accusamus architecto rerum
//                 voluptas laboriosam, ipsum, facilis soluta id voluptatem.
//               </h5>
//             </div>
//             <div style={{display: "flex", flexDirection: "row"}}>
//               <ul style={{paddingRight: "40px"}}>
//                 <li>GraphQL Schema</li>
//                 <li>Queries and Mutations</li>
//                 <li>Resolvers</li>
//                 <li>Cache Management</li>
//                 <li>Sending Email</li>
//               </ul>
//               <ul>
//                 <li>Charging Credit Cards</li>
//                 <li>Pagination</li>
//                 <li>Forms in React</li>
//                 <li>Unit Testing</li>
//                 <li>Mounting vs Shallow Rendering</li>
//               </ul>
//             </div>
//           </Info>
//           <FP>
//             <ImageOfFinalProject src={ReactCert} alt="cert" />
//             <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
//           </FP>
//         </IQGrid>
//         {/* CREATIVE REACT & REDUX */}
//         <IQGrid>
//           <Logo
//             variants={fade}
//             animate={controls3}
//             initial="hidden"
//             ref={element3}
//           >
//             <LogoImg src={creativeReactLogo} alt="creativeReactLogo" />
//           </Logo>
//           <Info>
//             <div style={{textAlign: "center"}}>
//               <h5 style={{marginBottom: "10px"}}>
//                 INFO ON THE PROGRAM : Lorem ipsum dolor sit amet consectetur
//                 adipisicing elit. Dignissimos rerum magnam quod sed aliquid
//                 aperiam optio ex quo quaerat quia? Repellendus nemo velit minima
//                 ipsa labore vitae ipsum! Debitis possimus nisi, eaque fugit rem
//                 saepe vel odit ipsa dolor corporis accusamus architecto rerum
//                 voluptas laboriosam, ipsum, facilis soluta id voluptatem.
//               </h5>
//             </div>
//             <div style={{display: "flex", flexDirection: "row"}}>
//               <ul style={{paddingRight: "40px"}}>
//                 <li>GraphQL Schema</li>
//                 <li>Queries and Mutations</li>
//                 <li>Resolvers</li>
//                 <li>Cache Management</li>
//                 <li>Sending Email</li>
//               </ul>
//               <ul>
//                 <li>Charging Credit Cards</li>
//                 <li>Pagination</li>
//                 <li>Forms in React</li>
//                 <li>Unit Testing</li>
//                 <li>Mounting vs Shallow Rendering</li>
//               </ul>
//             </div>
//           </Info>
//           <FP>
//             <ImageOfFinalProject src={ReactCert} alt="cert" />
//             <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
//           </FP>
//         </IQGrid>
//         {/* BEGGINNER REACT */}
//         <IQGrid>
//           <Logo
//             variants={fade}
//             animate={controls3}
//             initial="hidden"
//             ref={element3}
//           >
//             <LogoImg src={begginerReactLog} alt="begginerReactLogo" />
//           </Logo>
//           <Info>
//             <div style={{textAlign: "center"}}>
//               <h5 style={{marginBottom: "10px"}}>
//                 INFO ON THE PROGRAM : Lorem ipsum dolor sit amet consectetur
//                 adipisicing elit. Dignissimos rerum magnam quod sed aliquid
//                 aperiam optio ex quo quaerat quia? Repellendus nemo velit minima
//                 ipsa labore vitae ipsum! Debitis possimus nisi, eaque fugit rem
//                 saepe vel odit ipsa dolor corporis accusamus architecto rerum
//                 voluptas laboriosam, ipsum, facilis soluta id voluptatem.
//               </h5>
//             </div>
//             <div style={{display: "flex", flexDirection: "row"}}>
//               <ul style={{paddingRight: "40px"}}>
//                 <li>GraphQL Schema</li>
//                 <li>Queries and Mutations</li>
//                 <li>Resolvers</li>
//                 <li>Cache Management</li>
//                 <li>Sending Email</li>
//               </ul>
//               <ul>
//                 <li>Charging Credit Cards</li>
//                 <li>Pagination</li>
//                 <li>Forms in React</li>
//                 <li>Unit Testing</li>
//                 <li>Mounting vs Shallow Rendering</li>
//               </ul>
//             </div>
//           </Info>
//           <FP>
//             <ImageOfFinalProject src={ReactCert} alt="cert" />
//             <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
//           </FP>
//         </IQGrid>
//         {/* BEGGINER JS */}
//         <IQGrid>
//           <Logo
//             variants={fade}
//             animate={controls4}
//             initial="hidden"
//             ref={element4}
//           >
//             <LogoImg src={bJSLogo} alt="bJSLogo" />
//           </Logo>
//           <Info>
//             <div style={{textAlign: "center"}}>
//               <h5 style={{marginBottom: "10px"}}>
//                 INFO ON THE PROGRAM : Lorem ipsum dolor sit amet consectetur
//                 adipisicing elit. Dignissimos rerum magnam quod sed aliquid
//                 aperiam optio ex quo quaerat quia? Repellendus nemo velit minima
//                 ipsa labore vitae ipsum! Debitis possimus nisi, eaque fugit rem
//                 saepe vel odit ipsa dolor corporis accusamus architecto rerum
//                 voluptas laboriosam, ipsum, facilis soluta id voluptatem.
//               </h5>
//             </div>
//             <div style={{display: "flex", flexDirection: "row"}}>
//               <ul style={{paddingRight: "40px"}}>
//                 <li>GraphQL Schema</li>
//                 <li>Queries and Mutations</li>
//                 <li>Resolvers</li>
//                 <li>Cache Management</li>
//                 <li>Sending Email</li>
//               </ul>
//               <ul>
//                 <li>Charging Credit Cards</li>
//                 <li>Pagination</li>
//                 <li>Forms in React</li>
//                 <li>Unit Testing</li>
//                 <li>Mounting vs Shallow Rendering</li>
//               </ul>
//             </div>
//           </Info>
//           <FP>
//             <ImageOfFinalProject src={ReactCert} alt="cert" />
//             <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
//           </FP>
//         </IQGrid>
//         {/* CSS GRID */}
//         <IQGrid>
//           <Logo
//             variants={fade}
//             animate={controls4}
//             initial="hidden"
//             ref={element4}
//           >
//             <LogoImg src={cssGrid} alt="cssGridLogo" />
//           </Logo>
//           <Info>
//             <div style={{textAlign: "center"}}>
//               <h5 style={{marginBottom: "10px"}}>
//                 INFO ON THE PROGRAM : Lorem ipsum dolor sit amet consectetur
//                 adipisicing elit. Dignissimos rerum magnam quod sed aliquid
//                 aperiam optio ex quo quaerat quia? Repellendus nemo velit minima
//                 ipsa labore vitae ipsum! Debitis possimus nisi, eaque fugit rem
//                 saepe vel odit ipsa dolor corporis accusamus architecto rerum
//                 voluptas laboriosam, ipsum, facilis soluta id voluptatem.
//               </h5>
//             </div>
//             <div style={{display: "flex", flexDirection: "row"}}>
//               <ul style={{paddingRight: "40px"}}>
//                 <li>GraphQL Schema</li>
//                 <li>Queries and Mutations</li>
//                 <li>Resolvers</li>
//                 <li>Cache Management</li>
//                 <li>Sending Email</li>
//               </ul>
//               <ul>
//                 <li>Charging Credit Cards</li>
//                 <li>Pagination</li>
//                 <li>Forms in React</li>
//                 <li>Unit Testing</li>
//                 <li>Mounting vs Shallow Rendering</li>
//               </ul>
//             </div>
//           </Info>
//           <FP>
//             <ImageOfFinalProject src={ReactCert} alt="cert" />
//             <ImageOfFinalProjectCode src={ReactCert} alt="cert" />
//           </FP>
//         </IQGrid>
//       </CoursesGrid>
//       <ScrollTop />
//     </StyledWork>
//   );
// };

// const StyledWork = styled(motion.div)`

//   padding: 5rem 10rem;
//   h5 {
//     padding: 17px;
//     font-size: 2rem;
//     font-weight: normal;
//   }
//   ul {
//     margin-left: 20px;
//     display: flex;
//     flex-direction: column;
//   }
//   li {
//     font-size: 1.5rem;
//   }
//   h2 {
//     padding: 1rem 0rem;
//   }
//   @media (max-width: 1300) {
//     padding: 2rem 2rem;
//   }
// `;

// const CoursesGrid = styled(motion.div)`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
//   grid-gap: 20px;
//   grid-auto-rows: 700px auto auto 200px;
// `;
// const IQGrid = styled(motion.div)`
//   display: grid;
//   grid-template-rows: subgrid;
//   grid-row: span 3;
//   grid-gap: 1rem;
// `;

// const TitleDiv = styled(motion.div)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   @media (max-width: 700px) {
//     font-size: 2rem;
//   }
// `;
// const TitleInfoDiv = styled(motion.div)`
//   h2 {
//     font-size: 3rem;
//   }
//   grid-column: 1 / span 2;
//   grid-row: 2 / span 2;
//   @media (max-width: 700px) {
//     h2 {
//       font-size: 2rem;
//     }
//   }
// `;
// const FrameCont = styled(motion.div)`
//   grid-column: 3 / span 1;
//   grid-row: span 15;
//   display: flex;
//   flex-direction: column;
// `;
// const LogoImg = styled.img`
//   /* width: 75%;
//   border-radius: 10%; */
// `;
// const Logo = styled(motion.div)`
//   position: relative;
//   width: 50rem;   
//      height:20rem;
//      overflow: hidden;


//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   img {
//     position: absolute;
//      max-width: 75%;
//      border-radius: 10%;
//      top: 50%;     
//      left: 50%;
//      transform: translate( -50%, -50%);
//   }
// `;
// const Info = styled(motion.div)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
// const FP = styled(motion.div)`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
// `;
// //IMAGES
// const ImageOfFinalProject = styled.img`
//   border-radius: 20px;
//   padding: 3%;
//   width: 50%;
//   max-height: 100%;
// `;
// const ImageOfFinalProjectCode = styled.img`
//   border-radius: 20px;
//   padding: 3%;
//   width: 50%;
//   max-height: 100%;
// `;
// const StyledImage = styled(motion.img)`
//   margin-top: 25px;
//   width: 80%;
//   border-radius: 10%;
// `;

// export default OurWork2;
