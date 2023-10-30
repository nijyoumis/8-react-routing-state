import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { message } from "../atom";

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 320px;
  padding: 10px 0px 10px 0px;
  &:hover {
    background-color: white;
  }
  border-bottom: 1px solid #a98b59;
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
  width: 200px;
`;

const UserName = styled.div`
  align-self: flex-start;
  margin: 3px;
`;

const LastMessage = styled.div`
  color: gray;
  margin: 3px;
`;
const Time = styled.div`
  color: gray;
  font-size: small;
`;
// chats page에서 마지막 chat의 time 정보를 가져와야함.

const ChatInfo = ({ name, id }) => {
  const chatData = useRecoilValue(message);

  const getNewestMessage = (id) => {
    const currRoom = chatData[id - 1];
    const currRoomData = currRoom.chats;
    const lastMessage = currRoomData[currRoomData.length - 1];
    return [lastMessage.chat, lastMessage.time];
  };
  const info = getNewestMessage(id);
  const lastText = info[0];
  const dt = new Date(info[1]);
  const lastTime = dt.getMonth() + 1 + "월 " + dt.getDate() + "일";

  return (
    <UserWrapper>
      <UserImg src={`${process.env.PUBLIC_URL}/img/${id}.jpg`} />
      <InfoWrapper>
        <UserName>{name}</UserName>
        <LastMessage>{lastText}</LastMessage>
      </InfoWrapper>
      <Time>{lastTime}</Time>
    </UserWrapper>
  );
};

export default ChatInfo;
