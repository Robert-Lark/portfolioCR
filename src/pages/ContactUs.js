import React from "react";
import {motion} from "framer-motion";
import {pageAnimation, titleAnimation} from "../Animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{background: "#fff"}}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in Touch.</motion.h2>
        </Hide>
      </Title>
      <Container>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle></Circle>
            <h2>Email: robert.lark87@gmail.com</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle></Circle>
            <h2>
              Linkedin:{" "}
              <a href="https://www.linkedin.com/in/robertlark/">Robert Lark</a>
            </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle></Circle>
            <h2>Social Media:</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <div className="list">
              <ul>
                <a href="https://www.instagram.com/burntskies25/">
                  <li>Instagram Personal</li>
                </a>
                <a href="https://www.instagram.com/quietcalmrecords/">
                  <li>Instagram Quiet Calm Records</li>
                </a>
                <a href="https://twitter.com/RobLark4">
                  <li>Twitter</li>
                </a>
                <a href="https://bandcamp.com/deadfactory">
                  <li>Bandcamp</li>
                </a>
                <a href="https://soundcloud.com/quietcast">
                  <li>Soundcloud</li>
                </a>
                <a href="https://www.discogs.com/user/quietcalm">
                  <li>Discogs</li>
                </a>
              </ul>
            </div>
          </Social>
        </Hide>
      </Container>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500) {
    padding: 2rem 2rem;
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    padding: 5rem 5rem;
  }

`;
const Container = styled.div`
  @media (max-width: 600px) {
    width: 90vw;
h2{
  font-size: 3rem;
}
    }
    @media (max-width: 470px) {
      h2{
  font-size: 2rem;
}
  }

`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500) {
    margin-top: 5rem;
  }
  @media (max-width: 600px) {
    text-align: center;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    color: black;
  }
  a {
    text-decoration: none;
  }
  .list {
    display: flex;
    flex-direction: row-reverse;
    width: 40vw;
    @media (max-width: 600px) {
      width: 85vw;
  }
  @media (max-width: 470px) {
      width: 75vw;
  }
    li {
      font-size: 3rem;
      font-weight: lighter;
      text-decoration: none;
      color: black;
      @media (max-width: 470px) {
        font-size: 2rem;
  }
    }
  }

`;

export default ContactUs;
