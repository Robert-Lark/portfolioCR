import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import styled from "styled-components";
import bambam from "../img/AboutMe/bambam.jpg";
import chickens from "../img/AboutMe/chickens.jpg";
import phil1 from "../img/AboutMe/phil1.jpg";
import phil2 from "../img/AboutMe/phil2.png";
import work1 from "../img/AboutMe/work1.png";
import work from "../img/AboutMe/work.png";
import hiking1 from "../img/AboutMe/hiking.jpg";
import hiking2 from "../img/AboutMe/hiking2.jpg";
import travel1 from "../img/AboutMe/travel1.png";
import travel from "../img/AboutMe/travel.jpg";
import music from "../img/AboutMe/music.png";
import music1 from "../img/AboutMe/music1.png";
import art from "../img/AboutMe/art.jpg";
import art1 from "../img/AboutMe/art1.png";
import garden1 from "../img/AboutMe/garden1.png";
import garden2 from "../img/AboutMe/garden2.jpg";

const AboutMe = () => {
const [reference, setReference] = useState(false)
useEffect(() => {
  window.scrollTo(0, 0)
}, [reference])
  const [element0, view0] = useInView({threshold: 0.6});
  const [element1, view1] = useInView({threshold: 0.6});
  const [element2, view2] = useInView({threshold: 0.6});
  const [element3, view3] = useInView({threshold: 0.6});
  const [element4, view4] = useInView({threshold: 0.6});
  const [element5, view5] = useInView({threshold: 0.6});
  const [element6, view6] = useInView({threshold: 0.6});
  const [element7, view7] = useInView({threshold: 0.6});
  return (
    <AboutMeContainer>
      <Box0 ref={element0} className={view0 ? "show" : "hide"}>
        <h2>
          I love to work hard and try new things. Be it working as a Herd
          Manager on Ranch, Bartending at Toronto's busiest BBQ joint or working
          as a Nature Guide in a World Heritage Site. 2020 saw me dive headfirst
          into my lifelong goal of learning to build and manage online
          environments.
        </h2>
        <img src={work1} alt="about" />
        <img src={work} alt="about" />
      </Box0>
      <Box1
        ref={element1}
        className={view1 ? "show alternate" : "hide alternate"}
      >
        <h2>
          The great outdoors are my second home and I was truly spoilt to have
          grown up in New Zealand where there are thousands of multi-day trails
          throughout the untouched wilderness. I am proud to have completed
          several 7-10 day long solo expeditions one of which earned me the Duke
          of Edinburgh award.
        </h2>
        <img src={hiking1} alt="about" />
        <img src={hiking2} alt="about" />
      </Box1>
      <Box2 ref={element2} className={view2 ? "show" : "hide"}>
        <h2>
          Few things get me more excited then life's big questions. One of the
          best and most life-changing experiences I have had was the year I
          spent at a philosophical retreat located in a small alpine village in
          the Swiss Alps.
        </h2>
        <img src={phil1} alt="about" />
        <img src={phil2} alt="about" />
      </Box2>
      <Box3
        ref={element3}
        className={view3 ? "show alternate" : "hide alternate"}
      >
        <h2>
          I am a giant animal lover and hope one day to have a small farm with
          all kinds of animals. Pictured is BamBam my Maine Coon and Betty,
          Pebbles and Wilma (a Frizle and two Silkie Chicken's).
        </h2>
        <img src={bambam} alt="about" />
        <img src={chickens} alt="about" />
      </Box3>
      <Box4 ref={element4} className={view4 ? "show" : "hide"}>
        <h2>
          I love to travel and am very proud of the circle of friends I have all
          over the world. To date I have visited over 30 countries across five
          continents, but by far my favorite place to explore is Western Europe.
        </h2>
        <img src={travel1} alt="about" />
        <img src={travel} alt="about" />
      </Box4>
      <Box5
        ref={element5}
        className={view5 ? "show alternate" : "hide alternate"}
      >
        <h2>
          I love the peacefull state my minds falls in when out in the garden.
          Together with my Wife we grow over 50 kinds of vegetable.
        </h2>
        <img src={garden1} alt="about" />
        <img src={garden2} alt="about" />
      </Box5>
      <Box6 ref={element6} className={view6 ? "show" : "hide"}>
        <h2>
          My biggest passion in life is engaging with music. Since 2016 I have,
          as a hobby, operated a small online vinyl record store. Occasionally I
          bring the store out of the office and participate in record fairs
          across the west coast.
        </h2>
        <img src={music} alt="about" />
        <img src={music1} alt="about" />
      </Box6>
      <Box7
        ref={element7}
        className={view7 ? "show alternate" : "hide alternate"}
      >
        <h2>
          Beyond music I love most other forms of art from film and literature
          to photograpy and installations. I have had my photographs exhibited
          in galleries in the USA & Canada and performed visual and musical
          works across Europe. 2021 will see my publish my first book. A
          colection of short stories written in on an old typewriter between
          2013 and 2016.
        </h2>
        <img src={art1} alt="about" />
        <img src={art} alt="about" />
      </Box7>
      <Button
                onClick={() => {
                  setReference(true)
                }}
              >
                Return to the top
              </Button>
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
  padding: 15rem 2rem;
  @media (max-width: 600px) {
    padding: 5rem 2rem;
  }
  div {
    box-shadow: 0px 0px 10px 4px #e0e0e0;
    border: 1px solid #daf1ff;
    border-radius: 10px;
    padding: 5rem;
    border: 1px solid gold;
    width: 85vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 1800px) {
      border: 1px solid red;
    }
    @media (max-width: 1400px) {

    }
    @media (max-width: 900px) {

    }
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;

    }
    @media (max-width: 400px) {}
  }
  .show {
    transition: opacity 1s;
    opacity: 1;
  }
  .hide {
    opacity: 0.25;
    transition: opacity 3s;
  }
  .alternate {
    flex-direction: row-reverse;
    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
  h2 {
    width: 20vw;
    font-size: 1.5rem;    
    @media (max-width: 900px) {
      width: 27vw;
    }
    @media (max-width: 600px) {
      width: 80vw;  
      text-align: center;
    }
  }
  img {
    width: 20vw;
    border-radius: 25px;
    @media (max-width: 600px) {
      width: 40vw;
      border-radius: 50px;
      margin-top: 20px;
    }
    @media (max-width: 470px) {
      width: 60vw;
      border-radius: 50px;
      margin-top: 20px;
    }
  }
`;
const Button = styled.button`

`

const Box0 = styled(motion.div)``;
const Box1 = styled(motion.div)``;
const Box2 = styled(motion.div)``;
const Box3 = styled(motion.div)``;
const Box4 = styled(motion.div)``;
const Box5 = styled(motion.div)``;
const Box6 = styled(motion.div)``;
const Box7 = styled(motion.div)``;

export default AboutMe;
