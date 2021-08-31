import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Welcome>
      <h1>DevTimer</h1>
      <StartButton>Continue</StartButton>
    </Welcome>
  )
};


const Welcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const StartButton = styled.button`
  border: none;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #E5E9F0;
  cursor: pointer;
  color: #2E3440;
  font-size: 16px;
`;

export default Home;


