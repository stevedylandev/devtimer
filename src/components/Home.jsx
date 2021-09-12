import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import timer from "../images/timer.png";
import { motion } from "framer-motion";

const Home = () => {

  const history = useHistory();

  const routeChange = () => {
    let path = `/recipe`;
    history.push(path);
  }

  return (
    <Welcome>
      <h1>DevTimer</h1>
      <img src={timer} alt="timer" />
      <StartButton onClick={routeChange}>Get Started</StartButton>
    </Welcome>
  )
};


const Welcome = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  img {
    width: auto;
    height: 35vh
  }
`;

const StartButton = styled(motion.button)`
  padding: 1rem 5rem;
  border-radius: 30px;
  background: #ECEFF4;
  color: #2E3440;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

export default Home;


