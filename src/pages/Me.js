import React from "react";
import {motion} from "framer-motion";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <AboutMe
      style={{background: "#fff"}}
    >
      <Title>
        <Hide>
          <motion.h2>About me.</motion.h2>
        </Hide>
      </Title>
      <Container>
        
      </Container>
    </AboutMe>
  );
};

const AboutMe = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (min-width: 1200px) {
        font-size: 2rem;
            }
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
  @media (min-width: 1200px) {
        font-size: 2rem;
            }
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
  @media (min-width: 1200px) {
        font-size: 2rem;
            }
  @media (max-width: 1500) {
    margin-top: 5rem;
  }
  @media (min-width: 1200px) {
        font-size: 2rem;
            }
  @media (max-width: 600px) {
    text-align: center;
  }
`;
const Hide = styled.div`
  overflow: hidden;
  @media (min-width: 1200px) {
        font-size: 2rem;
            }
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
    @media (min-width:21400px) {
        font-size: 2rem;
            }
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
            @media (mi2-width: 1400px) {
        font-size: 2rem;
            }
      @media (max-width: 470px) {
        font-size: 2rem;
  }
    }
  }

`;

export default ContactUs;
