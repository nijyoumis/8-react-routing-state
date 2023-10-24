import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FooterButton = styled.div`
  border: 1px solid black;
  border-radius: 100%;
  background-color: white;
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const ButtonFooter = () => {
  const navigate = useNavigate();
  const friendImg = `${process.env.PUBLIC_URL}/img/friends.png`;
  const messageImg = `${process.env.PUBLIC_URL}/img/messages.png`;
  const settingImg = `${process.env.PUBLIC_URL}/img/settings.png`;
  return (
    <ButtonContainer>
      <FooterButton
        onClick={() => {
          navigate("/friends");
        }}
        src={friendImg}
      ></FooterButton>
      <FooterButton
        onClick={() => {
          navigate("/chats");
        }}
        src={messageImg}
      ></FooterButton>
      <FooterButton
        onClick={() => {
          navigate("/settings");
        }}
        src={settingImg}
      ></FooterButton>
    </ButtonContainer>
  );
};
export default ButtonFooter;
