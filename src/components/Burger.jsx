import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {line1Animation, line2Animation, line3Animation} from "../animations";


const Burger = ({menuOpen, setMenuOpen}) => {

  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <BurgerContainer onClick={menuHandler}>
      <Line variants={line1Animation} animate={menuOpen ? "active" : "inactive"} />
      <Line variants={line2Animation} animate={menuOpen ? "active" : "inactive"} />
      <Line variants={line3Animation} animate={menuOpen ? "active" : "inactive"} />
    </BurgerContainer>
  );
};

const BurgerContainer = styled(motion.div)`
  position: absolute;
  top: 5%;
  right: 5%;
  z-index: 20;
`;

const Line = styled(motion.div)`
  width: 50px;
  height: 3px;
  background: #ECEFF4;
  margin: 0.75rem 0rem;
`;


export default Burger;
