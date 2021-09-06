import React from "react"; 
import styled from "styled-components";
import {motion} from "framer-motion";
import {dropDown} from "../animations";
import {useHistory} from "react-router-dom";

const Menu = ({menuOpen, setMenuOpen}) => {
  
  const history = useHistory();
  
  const routeChangeHome = () =>{ 
    let path = `/`; 
    history.push(path);
    setMenuOpen(false);
  }
  
  const routeChangeRecipe = () =>{ 
    let path = `/recipe`; 
    history.push(path);
    setMenuOpen(false);
  }

  return (
    <MenuContainer initial="inactive" variants={dropDown} animate={menuOpen ? "active" : "inactive"}>
      <MenuList>
        <li onClick={routeChangeHome}>Home</li>
        <li onClick={routeChangeRecipe}>Recipe</li>
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
  li {
    text-align: center;
    font-size: 64px;
    font-weight: 600;
    margin: 4rem 0rem;
    cursor: pointer;
  }
`

export default Menu;
