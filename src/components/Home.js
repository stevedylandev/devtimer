import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const Home = () => {
  
  const history = useHistory();
  
  const routeChange = () =>{ 
    let path = `/recipe`; 
    history.push(path);
  }
  
  return (
    <Welcome>
      <h1>DevTimer</h1>
      <StartButton onClick={routeChange}>Continue</StartButton>
    </Welcome>
  )
};


const Welcome = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const StartButton = styled.button`
  padding: 1rem 5rem;
  border-radius: 30px;
  background: #ECEFF4;
  color: #2E3440;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

export default Home;


