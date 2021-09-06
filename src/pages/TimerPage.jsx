import React from "react";
import Timer from "../components/Timer.js";


const TimerPage = ({ inputSeconds, setInputSeconds, pause, setPause }) => {
  return (
    <Timer inputSeconds={inputSeconds} setInputSeconds={setInputSeconds} pause={pause} setPause={setPause} />
  )
}

export default TimerPage;
