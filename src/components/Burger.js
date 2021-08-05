import React from "react";
import styled from "styled-components";

const Burger = () => {
  return (
    <BurgerContainer>
      <Line1 />
      <Line2 />
      <Line3 />
    </BurgerContainer>
  );
};

const BurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 25px;
  position: absolute;
  top: 10%;
  right: 10%;
  pointer: cursor;
`;

const Line1 = styled.div`
  width: 40px;
  height: 2px;
  background: #cfbba3;
`;

const Line2 = styled.div`
  width: 40px;
  height: 2px;
  background: #cfbba3;
`;

const Line3 = styled.div`
  width: 40px;
  height: 2px;
  background: #cfbba3;
`;

export default Burger;
