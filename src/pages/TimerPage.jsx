import React from "react";
import DeveloperTimer from "../components/DeveloperTimer";
import StopBathTimer from "../components/StopBathTimer";



const TimerPage = ({
  pause,
  setPause,
  inputSeconds,
  setInputSeconds,
  devSeconds,
  setDevSeconds,
  fixSeconds,
  setFixSeconds,
  stopBathSeconds,
  setStopBathSeconds,
  rinseSeconds,
  setRinseSeconds,
  wettingAgentSeconds,
  setWettingAgentSeconds,
  intervalSeconds,
  setIntervalSeconds
}) => {
  return (
    <DeveloperTimer
      inputSeconds={inputSeconds}
      setInputSeconds={setInputSeconds}
      devSeconds={devSeconds}
      setDevSeconds={setDevSeconds}
      fixSeconds={fixSeconds}
      setFixSeconds={setFixSeconds}
      stopBathSeconds={stopBathSeconds}
      setStopBathSeconds={setStopBathSeconds}
      rinseSeconds={rinseSeconds}
      setRinseSeconds={setRinseSeconds}
      wettingAgentSeconds={wettingAgentSeconds}
      setWettingAgentSeconds={setWettingAgentSeconds}
      intervalSeconds={intervalSeconds}
      setIntervalSeconds={setIntervalSeconds}
      pause={pause}
      setPause={setPause}
    />
  )
}

export default TimerPage;
