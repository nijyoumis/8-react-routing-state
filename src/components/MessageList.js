import React from "react";
import styled from "styled-components";
import messageData from "../assets/messageData.json";
import { useRecoilValue } from "recoil";
import { owner, isToUser } from "../atom";

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

const MessageList = ({ roomid, userName }) => {
  const sender = useRecoilValue(owner);
  const allRooms = messageData.chattings;
  const selectedRoom = allRooms[roomid - 1];
  const toUser = useRecoilValue(isToUser);

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
