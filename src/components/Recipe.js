import React from "react";
import styled from "styled-components";

const Recipe = () => {
  return (
    <RecipeContainer>
      <RecipeForm>
        <h1>Recipe</h1>
        <RecipeInput />
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
  height: 50vh;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RecipeInput = styled.input`
  border: none;
  padding: 0rem 2rem;
`;

export default Recipe;
