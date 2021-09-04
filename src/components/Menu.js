import React from "react"; 
import styled from "styled-components";

const Menu = () => {
  return (
    <MenuContainer>
      <MenuList>
        <li><h1>Home</h1></li>
        <li><h1>Recipe</h1></li>
      </MenuList>
    </MenuContainer>
  )
};


const MenuContainer = styled.div`
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
