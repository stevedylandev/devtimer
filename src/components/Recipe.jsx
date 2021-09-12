import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const Recipe = ({ inputSeconds, setInputSeconds }) => {

  const history = useHistory();
  const [minValue, setMinValue] = useState("");
  const [secsValue, setSecsValue] = useState("");

  const updateTimerValue = () => {
    const totalMins = minValue * 60;
    const totalSecs = Number(totalMins) + Number(secsValue);
    setInputSeconds(totalSecs);
    routeChange();
  }

  const minInputHandler = (e) => {
    setMinValue(e.target.value);
  }

  const secsInputHandler = (e) => {
    setSecsValue(e.target.value);
  }

  const routeChange = () => {
    let path = `/timer`;
    history.push(path);
  }

  return (
    <RecipeContainer>
      <RecipeForm onSubmit={updateTimerValue}>
        <h1>Recipe</h1>
        <RecipeInputContainer>
          <h4>Developer</h4>
          <RecipeInput>
            <input id="mins" type="number" value={minValue} onChange={minInputHandler} min="0" max="59" placeholder="0" required />
            <p>:</p>
            <input id="secs" type="number" value={secsValue} onChange={secsInputHandler} min="0" max="59" placeholder="00" required />
          </RecipeInput>
        </RecipeInputContainer>
        <RecipeInputContainer>
          <h4>Stop Bath</h4>
          <RecipeInput>
            <input id="mins" type="number" value={minValue} onChange={minInputHandler} min="0" max="59" placeholder="0" required />
            <p>:</p>
            <input id="secs" type="number" value={secsValue} onChange={secsInputHandler} min="0" max="59" placeholder="00" required />
          </RecipeInput>
        </RecipeInputContainer>
        <RecipeInputContainer>
          <h4>Fixer</h4>
          <RecipeInput>
            <input id="mins" type="number" value={minValue} onChange={minInputHandler} min="0" max="59" placeholder="0" required />
            <p>:</p>
            <input id="secs" type="number" value={secsValue} onChange={secsInputHandler} min="0" max="59" placeholder="00" required />
          </RecipeInput>
        </RecipeInputContainer>
        <RecipeInputContainer>
          <h4>Rinse</h4>
          <RecipeInput>
            <input id="mins" type="number" value={minValue} onChange={minInputHandler} min="0" max="59" placeholder="0" required />
            <p>:</p>
            <input id="secs" type="number" value={secsValue} onChange={secsInputHandler} min="0" max="59" placeholder="00" required />
          </RecipeInput>
        </RecipeInputContainer>
        <RecipeInputContainer>
          <h4>Wetting Agent</h4>
          <RecipeInput>
            <input id="mins" type="number" value={minValue} onChange={minInputHandler} min="0" max="59" placeholder="0" required />
            <p>:</p>
            <input id="secs" type="number" value={secsValue} onChange={secsInputHandler} min="0" max="59" placeholder="00" required />
          </RecipeInput>
        </RecipeInputContainer>
        <RecipeInputContainer>
          <h4>Interval</h4>
          <RecipeInput>
            <input id="mins" type="number" value={minValue} onChange={minInputHandler} min="0" max="59" placeholder="0" required />
            <p>:</p>
            <input id="secs" type="number" value={secsValue} onChange={secsInputHandler} min="0" max="59" placeholder="00" required />
          </RecipeInput>
        </RecipeInputContainer>
        <StartButton type="submit" >
          Start
        </StartButton>
      </RecipeForm>
    </RecipeContainer>
  )
};


const RecipeContainer = styled(motion.div)`
  height: 150vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecipeForm = styled(motion.form)`
  height: 120vh;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    text-align: center;
  }
`;

const RecipeInput = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem 1rem;
  height: 4rem;
  border-radius: 30px;
  background: #ECEFF4;
  color: #2E3440;
  input {
    background: #ECEFF4;
    color: #2E3440;
    border: none;
    font-size: 38px;
    text-align: center;
    width: 30%;
    :focus {
      outline: none;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
  p {
    font-size: 38px;
  }
`;

const RecipeInputContainer = styled(motion.div)`
  margin: 1rem 0rem; 
  text-align: center;
`;

const StartButton = styled(motion.button)`
  border-radius: 30px;
  padding: 1rem 6rem;
  background: #ECEFF4;
  color: #2E3440;
  border: none;
  cursor: pointer;
  font-size: 16px;
  align-self: center;
  margin: 1rem 0rem;
`;

export default Recipe;
