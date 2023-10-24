import React from "react";
import styled from "styled-components";
import messageData from "../assets/messageData.json";
import { useRecoilValue } from "recoil";
import { owner } from "../atom";
import Chats from "../pages/Chats";

const ChattingList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 15px;
  max-height: 560px;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #9e9d95;
    border-radius: 20px;
  }
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.sender === props.receiver ? "row-reverse" : "row"};
  align-self: ${(props) =>
    props.sender === props.receiver ? "flex-start" : "flex-end"};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Time = styled.span`
  display: flex;
  font-size: smaller;
  color: #9e9d95;
  align-items: flex-end;
`;

const Author = styled.div`
  align-self: ${(props) =>
    props.sender === props.receiver ? "flex-start" : "flex-end"};
  font-size: smaller;
  margin: 0px 8px 0px 0px;
`;

const Text = styled.div`
  font-size: smaller;
  background-color: ${(props) =>
    props.sender === props.receiver ? "#ffee00" : "#ffffff"};
  border-radius: ${(props) =>
    props.sender === props.receiver
      ? "0px 20px 20px 20px"
      : "20px 0px 20px 20px"};
  margin: 8px 8px 0px 8px;
  padding: 8px;
`;

const UserImg = styled.img`
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  object-fit: cover;
  margin: 8px 0px 0px 0px;
`;

const MessageList = ({ id }) => {
  const sender = useRecoilValue(owner);
  return (
    <ChattingList>
      {messageData.chattings.map(
        (chat) =>
          chat.roomId === id &&
          chat.chats.map(() => (
            <MessageWrapper key={id} sender={sender} receiver={id}>
              <Time>
                {chat.timeStamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </Time>
              <Content>
                <Author sender={sender} receiver={chat.userName}>
                  {sender}
                </Author>
                <Text sender={sender} receiver={chat.userName}>
                  {chat.chats}
                </Text>
              </Content>
              <UserImg
                alt="User Profile"
                sender={sender}
                receiver={chat.userName}
                src={`${process.env.PUBLIC_URL}/img/${id}.jpg`}
              ></UserImg>
            </MessageWrapper>
          ))
      )}
    </ChattingList>
  );
};
export default MessageList;
