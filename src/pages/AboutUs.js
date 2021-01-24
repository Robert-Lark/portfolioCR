import React, {useEffect} from "react";
//import AboutSection from "../Components/AboutSection";
import BandcampAboutSection from "../Components/BandcampAbout";
//import ServicesSection from "../Components/ServicesSection";
import Tools from "../Components/Tools"
import ProjectsHome from "../Components/ProjectsHome";
import FaqSection from "../Components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
import ScrollTop from "../Components/ScrollTop";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <BandcampAboutSection />
      <Tools />
      <ProjectsHome/>
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};


export default AboutUs;
