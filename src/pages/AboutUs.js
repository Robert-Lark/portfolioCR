import React from "react";
//import AboutSection from "../Components/AboutSection";
import BandcampAboutSection from "../Components/BandcampAbout";
import ServicesSection from "../Components/ServicesSection";
import ProjectsHome from "../Components/ProjectsHome";
import FaqSection from "../Components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
import ScrollTop from "../Components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
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
    </motion.div>
  );
};



export default AboutUs;
