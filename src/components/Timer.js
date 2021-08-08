import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Burger from "./Burger.js";

const Timer = () => {
  const [seconds, setSeconds] = useState(120);
  const [pause, setPause] = useState(false);
  let intervalRef = useRef();

  const tick = () => setSeconds((prev) => prev - 1);

  useEffect(() => {
    setPause(false);
    intervalRef.current = setInterval(tick, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const pauseButtonHandle = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(tick, 1000);
    }
    setPause((prev) => !pause);
  };

  return (
    <>
      <Burger />
      <ClockContainer>
        <Clock>
          <h1>Developer</h1>
          <h2>{seconds}</h2>
          <PauseButton onClick={pauseButtonHandle}>
            {pause ? "Start" : "Pause"}
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
