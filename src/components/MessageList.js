import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { owner, isToUser, message } from "../atom";

const ChattingList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 560px;
  padding-top: 5px;
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
  margin-bottom: 9px;
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
  margin: 0px 8px 0px 8px;
`;

const Text = styled.div`
  display: inline-block;
  font-size: smaller;
  background-color: ${(props) =>
    props.sender === props.receiver ? "#ffee00" : "#ffffff"};
  border-radius: ${(props) =>
    props.sender === props.receiver
      ? "0px 20px 20px 20px"
      : "20px 0px 20px 20px"};
  margin: 8px 8px 0px 8px;
  padding: 8px;
  max-width: 180px;
  overflow-wrap: break-word; // 긴 단어에서 줄 바꿈허용
  white-space: pre-line;
`;

const UserImg = styled.img`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin: 8px 0px 0px 0px;
`;

const MessageList = ({ roomid, userName }) => {
  const sender = useRecoilValue(owner);
  const chatData = useRecoilValue(message);
  const toUser = useRecoilValue(isToUser);
  const selectedRoom = chatData[roomid - 1];

  return (
    <ChattingList>
      {selectedRoom.chats.map((chat) => (
        <MessageWrapper
          key={chat.time}
          sender={chat.userid === 0 ? sender : userName}
          receiver={toUser ? userName : sender}
        >
          <Time>
            {new Date(chat.time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </Time>
          <Content>
            <Author
              sender={chat.userid === 0 ? sender : userName}
              receiver={toUser ? userName : sender}
            >
              {chat.userid === 0 ? sender : userName}
            </Author>
            <Text
              sender={chat.userid === 0 ? sender : userName}
              receiver={toUser ? userName : sender}
            >
              {chat.chat}
            </Text>
          </Content>
          <UserImg
            alt="User Profile"
            sender={chat.userid === 0 ? sender : userName}
            receiver={toUser ? userName : sender}
            src={
              chat.userid === 0
                ? `${process.env.PUBLIC_URL}/img/0.jpg`
                : `${process.env.PUBLIC_URL}/img/${roomid}.jpg`
            }
          ></UserImg>
        </MessageWrapper>
      ))}
    </ChattingList>
  );
};
export default MessageList;
