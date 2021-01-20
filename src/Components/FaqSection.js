import React from "react";
import styled from "styled-components";
import {StyledAbout} from "../styles";
import {motion} from "framer-motion";
import Toggle from "./Toggle";
import {AnimateSharedLayout} from "framer-motion";
import {scrollReveal} from "../Animation";
import {useScroll} from "./useScroll";

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
        Contact <span>Me</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Email">
          <div className="answer">
            <motion.p variant={scrollReveal}>robert.lark87@gmail.com</motion.p>
          </div>
        </Toggle>
        <Toggle title="Social Media">
          <div className="answer">
            <motion.p variant={scrollReveal}>
              <div className="list">
                <a href="https://github.com/Robert-Lark">
                  <motion.p>Github</motion.p>
                </a>
                <a href="https://www.instagram.com/burntskies25/">
                  <motion.p>Instagram Personal</motion.p>
                </a>
                <a href="https://www.instagram.com/quietcalmrecords/">
                  <motion.p>Instagram Quiet Calm Records</motion.p>
                </a>
                <a href="https://twitter.com/RobLark4">
                  <motion.p>Twitter</motion.p>
                </a>
                <a href="https://bandcamp.com/deadfactory">
                  <motion.p>Bandcamp</motion.p>
                </a>
                <a href="https://soundcloud.com/quietcast">
                  <motion.p>Soundcloud</motion.p>
                </a>
                <a href="https://www.discogs.com/user/quietcalm">
                  <motion.p>Discogs</motion.p>
                </a>
              </div>
            </motion.p>
          </div>
        </Toggle>
        <Toggle title="Photography">
          <div className="answer">
            <motion.p variant={scrollReveal}>
              You can view my Photography here:
            </motion.p>
            <a href="https://dreamstoday14-blog.tumblr.com/">
              <motion.p variant={scrollReveal}>DREAMS TODAY</motion.p>
            </a>
          </div>
        </Toggle>
        <Toggle title="Radio Show">
          <div className="answer">
            <motion.p variant={scrollReveal}>
              Tune into my monthly Vinyl only Radio Show hosted on True Vinyl
              Alternative here:
            </motion.p>
            <a href="https://www.quietcalmrecords.com/quiet-calm-radio">
              <motion.p variant={scrollReveal}>Quiet Calm Radio</motion.p>
            </a>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  text-align: center;
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
    a {
      text-decoration: none;
    }

    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      a {
        text-decoration: none;
      }
    }
  }
`;

export default FaqSection;
