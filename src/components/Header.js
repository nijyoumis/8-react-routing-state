import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { isToUser, searchingState } from "../atom";
import { useRecoilState } from "recoil";

const StyledHeader = styled.header`
  padding-top: 20px;
  padding-bottom: 7px;
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
  const [userState, setUserState] = useRecoilState(isToUser);
  const [searching, setSearching] = useRecoilState(searchingState);

  const navigate = useNavigate();

  const handleToggle = () => {
    setUserState(!userState);
  };
  const handleSearch = () => {
    setSearching(!searching);
  };

  return (
    <StyledHeader>
      <LeftButton
        onClick={() => {
          navigate(-1);
        }}
      >
        {leftChild}
      </LeftButton>
      <HeaderText onClick={handleToggle}>{headText}</HeaderText>
      <RightButton onClick={handleSearch}>{rightChild}</RightButton>
    </StyledHeader>
  );
};
export default Header;
