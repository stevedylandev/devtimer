import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const Timer = ({ inputSeconds, setInputSeconds, pause, setPause }) => {
  let intervalRef = useRef();

  const tick = () => { setInputSeconds((prev) => prev - 1) };

  useEffect(() => {
    if (inputSeconds === 0) {
      clearInterval(intervalRef.current);
      setPause(true);
    }
  }, [inputSeconds, setPause]);

  const pauseButtonHandle = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(tick, 1000);
    }
    setPause((prev) => !pause);
  };

  const clockify = () => {
    let mins = Math.floor((inputSeconds / 60) % 60);
    let seconds = Math.floor(inputSeconds % 60);

    let displayMins = mins < 10 ? `0${mins}` : mins;
    let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

    return {
      displayMins,
      displaySeconds,
    };
  };

  return (
    <>
      <ClockContainer>
        <Clock>
          <h1>Developer</h1>
          <h2>
            {clockify().displayMins}:{clockify().displaySeconds}
          </h2>
          <PauseButton onClick={pauseButtonHandle}>
            {pause ? <FontAwesomeIcon icon={faPlay} size="2x" /> : <FontAwesomeIcon icon={faPause} size="2x" />}
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
  background: #E5E9F0;
  cursor: pointer;
  color: #2E3440;
`;

export default Timer;
