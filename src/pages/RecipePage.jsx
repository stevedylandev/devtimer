import React from "react";
// Components
import Recipe from "../components/Recipe";

const RecipePage = ({
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
    <Recipe
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
    />
  )
}

export default RecipePage;
