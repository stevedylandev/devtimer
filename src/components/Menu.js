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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const MenuList = styled.ul`
  list-style: none;
`

export default Menu;
