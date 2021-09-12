import React from "react";
import DeveloperTimer from "../components/DeveloperTimer";


const TimerPage = ({ inputSeconds, setInputSeconds, pause, setPause }) => {
  return (
    <DeveloperTimer inputSeconds={inputSeconds} setInputSeconds={setInputSeconds} pause={pause} setPause={setPause} />
  )
}

export default TimerPage;
