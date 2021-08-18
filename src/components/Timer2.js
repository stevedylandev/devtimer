import React from "react";
import styled from "styled-components";
import Burger from "./Burger.js";

const Timer = () => {


  //   const clockify = () => {
  //     let mins = Math.floor((inputSeconds / 60) % 60);
  //     let seconds = Math.floor(inputSeconds % 60);
  // 
  //     let displayMins = mins < 10 ? `0${mins}` : mins;
  //     let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
  // 
  //     return {
  //       displayMins,
  //       displaySeconds,
  //     };
  //   };

  return (
    <>
      <Burger />
      <ClockContainer>
        <Clock>
          <h1>Developer</h1>
          <h2>
            12:00
          </h2>
          <PauseButton>
            Start
          </PauseButton>
        </Clock>
      </ClockContainer>
    </>
  );
};

const Clock = styled.div`
  height: 50vh;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 90px;
  }
`;

const ClockContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PauseButton = styled.button`
  border: none;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #cfbba3;
  cursor: pointer;
  color: #3f444a;
`;

export default Timer;
