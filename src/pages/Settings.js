import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import ButtonFooter from "../components/ButtonFooter";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px;
  background-color: #bef5be;
  border-radius: 16px;
`;
const TempDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavigateButton = styled.button`
  font-size: 20px;
  width: 250px;
  height: 50px;
  background-color: white;
  border-radius: 100px;
  border: 1px solid gray;
  margin: 30px;
  cursor: pointer;
`;
const Settings = () => {
  const navigate = useNavigate();
  const url = "https://youtu.be/wtHra9tFISY?si=vFC7LNKDO7-VPXXZ1";
  return (
    //logout button, a tag 써서 외부 링크로 보내기
    <Wrapper>
      <Header headText={"Settings"} leftChild={"<"} rightChild={"⁝"} />
      <TempDiv>
        <NavigateButton
          onClick={() => {
            window.open(url);
          }}
        >
          🎼🎵
        </NavigateButton>
        <NavigateButton
          onClick={() => {
            navigate("/");
          }}
        >
          LogOut
        </NavigateButton>
      </TempDiv>
      <ButtonFooter></ButtonFooter>
    </Wrapper>
  );
};

export default Settings;
