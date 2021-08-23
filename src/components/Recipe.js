import React from "react";
import styled from "styled-components";

const Recipe = () => {
  return (
    <RecipeContainer>
      <RecipeForm>
        <h1>Recipe</h1>
        <RecipeInput />
        <RecipeInput />
        <RecipeInput />
        <RecipeInput />
        <RecipeInput />
        <RecipeInput />
        <StartButton>Start</StartButton>
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
