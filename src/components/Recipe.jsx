import React, {useState} from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const Recipe = ({inputSeconds, setInputSeconds}) => {
  
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

  const routeChange = () =>{ 
    let path = `/timer`; 
    history.push(path);
  }
  
  return (
    <RecipeContainer>
      <RecipeForm onSubmit={updateTimerValue}>
        <h1>Recipe</h1>
        <RecipeInput>
          <input id="mins" type="number" value={minValue} onChange={minInputHandler} min="0" max="59" placeholder="0" required />
          <p>:</p>
          <input id="secs" type="number" value={secsValue} onChange={secsInputHandler} min="0" max="59" placeholder="00" required />
        </RecipeInput>
          <StartButton type="submit" >
            Start
          </StartButton>
      </RecipeForm>
    </RecipeContainer>
  )
};


const RecipeContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecipeForm = styled.form`
  height: 80vh;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    text-align: center;
  }
`;

const RecipeInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem 1rem;
  height: 5rem;
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

const StartButton = styled.button`
  border: none;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #ECEFF4;
  cursor: pointer;
  color: #2E3440;
  align-self: center;
`;

export default Recipe;
