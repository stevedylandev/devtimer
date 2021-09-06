import React from "react";
// Components
import Recipe from "../components/Recipe";

const RecipePage = ({ inputSeconds, setInputSeconds }) => {
  return (
    <Recipe inputSeconds={inputSeconds} setInputSeconds={setInputSeconds} />
  )
}

export default RecipePage;
