import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
`;

const LeftButton = styled.button`
  justify-content: start;
  width: 25%;
  border-radius: 100px;
  border: 1px solid black;
  cursor: pointer;
  background-color: white;
`;

const RightButton = styled.button`
  justify-content: end;
  width: 25%;
  border-radius: 100px;
  border: 1px solid black;
  cursor: pointer;
  background-color: white;
`;
const HeaderText = styled.span`
  width: 50%;
  justify-content: center;
  font-size: 20px;
  padding: 0 0 0 5px;
`;

const Header = ({ headText, leftChild, rightChild }) => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <LeftButton
        onClick={() => {
          navigate(-1);
        }}
      >
        {leftChild}
      </LeftButton>
      <HeaderText>{headText}</HeaderText>
      <RightButton>{rightChild}</RightButton>
    </StyledHeader>
  );
};
export default Header;
