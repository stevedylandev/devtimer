import React, {useState} from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const Recipe = ({inputSeconds, setInputSeconds}) => {
  
  const history = useHistory();
  const [minValue, setMinValue] = useState(0); 
  const [secsValue, setSecsValue] = useState(0); 

  const updateTimerValue = () => {
    const totalMins = minValue * 60;
    const totalSecs = totalMins + secsValue;
    setInputSeconds(totalSecs);
    console.log(inputSeconds)
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
      <RecipeForm>
        <h1>Recipe</h1>
        <RecipeInput>
          <input id="mins" type="number" value={minValue} onChange={minInputHandler} min="0" max="59" />
          <p>:</p>
          <input id="secs" type="number" value={secsValue} onChange={secsInputHandler} min="0" max="59" />
        </RecipeInput>
          <StartButton type="submit" onClick={updateTimerValue}>
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

const RecipeForm = styled.div`
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
  background: #AFBFC6;
  color: #3f444a;
  input {
    background: #AFBFC6;
    color: #3f444a;
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
  background: #cfbba3;
  cursor: pointer;
  color: #3f444a;
  align-self: center;
`;

export default Recipe;
