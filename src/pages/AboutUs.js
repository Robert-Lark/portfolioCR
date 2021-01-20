import React from "react";
//import AboutSection from "../Components/AboutSection";
import BandcampAboutSection from "../Components/BandcampAbout";
import ServicesSection from "../Components/ServicesSection";
import ProjectsHome from "../Components/ProjectsHome";
import FaqSection from "../Components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
import ScrollTop from "../Components/ScrollTop";
import styled from "styled-components";
const AboutUs = () => {
  return (
    <Container
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <BandcampAboutSection />
      <ServicesSection />
      <ProjectsHome/>
      <FaqSection />
      <ScrollTop />
    </Container>
  );
};

const Container = styled(motion.div)`
  @media (max-width: 600px) {

    width: 100vw;
  }
`

export default AboutUs;
