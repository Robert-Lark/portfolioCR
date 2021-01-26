import React from "react";
import {motion} from "framer-motion";
import styled from "styled-components";
import placeholder from "../img/Placeholders/placeholder.png";
const ContactUs = () => {
  return (
    <AboutMeContainer>
      <Box0>
        <h2>
          I love to work hard and to try new things. Be it working as a herd
          manager on Ranch, Bartending at Toronto's busiest BBQ joint or working
          as a nature guide in a World Heritage Site. 2020 saw me dive headfirst
          into my lifelong goal of learning to build and manage online environments.
        </h2>
        <img src={placeholder} alt="about" />
        <img src={placeholder} alt="about" />
      </Box0>
      <Box1 className="alternate">
        <h2>
          The great outdoors are my second home and I was truly spoilt to have
          grown up in New Zealand where there are thousands of multi-day trails
          throughout the untouched wilderness. I am proud to have completed
          several 7-10 day long solo expeditions one of which earned me the Duke
          of Edinburgh award.
        </h2>
        <img src={placeholder} alt="about" />
        <img src={placeholder} alt="about" />
      </Box1>
      <Box2>
        <h2>
          Few things get me more excited then life's big questions. One of the
          best and most life-changing experiences I have had was the year I
          spent at a Philosophical retreat located in a small alpine village in
          the Swiss Alps.
        </h2>
        <img src={placeholder} alt="about" />
        <img src={placeholder} alt="about" />
      </Box2>
      <Box3 className="alternate">
        <h2>
          I am a giant animal lover and hope one day to have a small farm with
          all manner of animals. Pictured is BamBam my Maine Coon and Betty and
          Wilma (a Frizle and a Silkie Chicken).
        </h2>
        <img src={placeholder} alt="about" />
        <img src={placeholder} alt="about" />
      </Box3>
      <Box4>
        <h2>
          I love to travel and am very proud of the circle of friends I have all
          over the world. To date I have visited over 30 countries across five
          continents, but by far my favorite place to explore is western europe.
        </h2>
        <img src={placeholder} alt="about" />
        <img src={placeholder} alt="about" />
      </Box4>
      <Box5 className="alternate">
        <h2>
          I love the peacefull state my minds falls in when out in the garden.
          Together with my Wife we grow over 50 kinds of vegetable.
        </h2>
        <img src={placeholder} alt="about" />
        <img src={placeholder} alt="about" />
      </Box5>
      <Box6>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus
          dolorum quis, recusandae ipsam vero corporis mollitia consequatur
          eveniet veritatis a numquam dicta velit itaque.
        </h2>
        <img src={placeholder} alt="about" />
        <img src={placeholder} alt="about" />
      </Box6>
      <Box7 className="alternate">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus
          dolorum quis, recusandae ipsam vero corporis mollitia consequatur
          eveniet veritatis a numquam dicta velit itaque.
        </h2>
        <img src={placeholder} alt="about" />
        <img src={placeholder} alt="about" />
      </Box7>
    </AboutMeContainer>
  );
};

const AboutMeContainer = styled(motion.div)`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 1fr);
  gap: 5rem;
  background: #fff;
  justify-items: center;
  padding: 2rem;
  div {
    box-shadow: 0px 0px 10px 4px #e0e0e0;
    border: 1px solid #daf1ff;
    padding: 5rem;
    border: 1px solid gold;
    width: 85vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .alternate {
    flex-direction: row-reverse;
  }
  h2 {
    width: 20vw;
    font-size: 1.5rem;
  }
  img {
    width: 20vw;
  }
`;

const Box0 = styled(motion.div)``;
const Box1 = styled(motion.div)`
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  padding: 5rem;
  border: 1px solid gold;
  width: 75vw;
`;
const Box2 = styled(motion.div)`
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  padding: 5rem;
  border: 1px solid gold;
  width: 75vw;
`;
const Box3 = styled(motion.div)`
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  padding: 5rem;
  border: 1px solid gold;
  width: 75vw;
`;
const Box4 = styled(motion.div)`
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  padding: 5rem;
  border: 1px solid gold;
  width: 75vw;
`;
const Box5 = styled(motion.div)`
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  padding: 5rem;
  border: 1px solid gold;
  width: 75vw;
`;
const Box6 = styled(motion.div)`
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  padding: 5rem;
  border: 1px solid gold;
  width: 75vw;
`;
const Box7 = styled(motion.div)`
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  padding: 5rem;
  border: 1px solid gold;
  width: 75vw;
`;

export default ContactUs;
