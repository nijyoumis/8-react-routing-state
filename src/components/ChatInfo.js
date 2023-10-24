import React from "react";
import styled from "styled-components";

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 320px;
  padding: 10px 0 10px 0;
  &:hover {
    background-color: white;
  }
  border-bottom: 1px solid black;
  cursor: pointer;
`;

const UserImg = styled.img`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin: 5px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const UserName = styled.div`
  align-self: flex-start;
  margin: 3px;
`;

const LastMessage = styled.div`
  color: gray;
  margin: 3px;
`;

const ChatInfo = ({ name, message, id }) => {
  return (
    <UserWrapper>
      <UserImg src={`${process.env.PUBLIC_URL}/img/${id}.jpg`} />
      <InfoWrapper>
        <UserName>{name}</UserName>
        <LastMessage>{message}</LastMessage>
      </InfoWrapper>
    </UserWrapper>
  );
};

export default ChatInfo;
