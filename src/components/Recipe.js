import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const Recipe = () => {
  
  const history = useHistory();
  const routeChange = () =>{ 
    let path = `/timer`; 
    history.push(path);
  }
  
  return (
    <RecipeContainer>
      <RecipeForm>
        <h1>Recipe</h1>
        <RecipeInput type="text" />
          <StartButton type="submit" onClick={routeChange}>
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

const RecipeInput = styled.input`
  border: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  background: #AFBFC6;
  color: #3f444a;
  font-size: 16px;
  text-align: center;
  :focus {
    outline: none;
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
