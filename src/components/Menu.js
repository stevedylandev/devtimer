import React from "react"; 
import styled from "styled-components";
import {motion} from "framer-motion";
import {dropDown} from "../animations";

const Menu = ({menuOpen}) => {
  return (
    <MenuContainer variants={dropDown} animate={menuOpen ? "active" : "inactive"}>
      <MenuList>
        <li><h1>Home</h1></li>
        <li><h1>Recipe</h1></li>
      </MenuList>
    </MenuContainer>
  )
};


const MenuContainer = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 10;
  background: #2E3440;
`;

const MenuList = styled.ul`
  list-style: none;
`

export default Menu;
