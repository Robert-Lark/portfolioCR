import React from "react";
import styled from "styled-components";
import { StyledAbout } from "../styles";
import { motion } from "framer-motion";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from "../Animation";
import { useScroll } from "./useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledFaq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Queastions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start">
          <div className="answer">
            <motion.p variant={scrollReveal}>Lorem ipsum dolor sit amet.</motion.p>
            <motion.p variant={scrollReveal}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quas
              ad quaerat, esse placeat recusandae?
            </motion.p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <motion.p variant={scrollReveal}>Lorem ipsum dolor sit amet.</motion.p>
            <motion.p variant={scrollReveal}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quas
              ad quaerat, esse placeat recusandae?
            </motion.p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods?">
          <div className="answer">
            <motion.p variant={scrollReveal}>Lorem ipsum dolor sit amet.</motion.p>
            <motion.p variant={scrollReveal}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quas
              ad quaerat, esse placeat recusandae?
            </motion.p>
          </div>
        </Toggle>
        <Toggle title="What Products Do You Offer?">
          <div className="answer">
            <motion.p variant={scrollReveal}>Lorem ipsum dolor sit amet.</motion.p>
            <motion.p variant={scrollReveal}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quas
              ad quaerat, esse placeat recusandae?
            </motion.p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
