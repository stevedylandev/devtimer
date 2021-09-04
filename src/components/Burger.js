import React, {useState} from "react";
import styled from "styled-components";
import Lottie from "react-lottie";

import animationData from "../animations/menuBurger.json";

const Burger = ({menuOpen, setMenuOpen}) => {

  const [isPaused, setIsPaused] = useState(false)
  
  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const animationOptions = {
    loop: false, 
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <BurgerContainer onClick={menuHandler}>
      <Lottie options={animationOptions} height={70} width={70} isPaused={isPaused}  />
    </BurgerContainer>
  );
};

const BurgerContainer = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  z-index: 20;
`;


export default Burger;
