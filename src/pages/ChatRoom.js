import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { useState } from "react";
import MessageList from "../components/MessageList";
import { useLocation } from "react-router-dom";
import { isToUser, message, owner } from "../atom";
import { useRecoilState, useRecoilValue } from "recoil";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: rgb(218, 233, 241);
  padding: 10px;
  border-radius: 16px;
`;
const TempDiv = styled.div`
  flex: 1;
`;

const InputForm = styled.form`
  display: flex;
  padding: 10px;
  border-top: 1px solid #eee;
  bottom: 0;
`;

const MessageInputBox = styled.input`
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 3px;
`;

const SubmitButton = styled.button`
  background-color: #f7e730;
  color: rgb(0, 0, 0);
  border: none;
  padding: 8px 12px;
  border-radius: 3px;
  cursor: pointer;
`;

const ChatRoom = () => {
  const { roomid } = useParams();
  const [newChat, setNewChat] = useState("");
  const { state } = useLocation();
  const ownerName = useRecoilValue(owner);
  const [userState, setUserState] = useRecoilState(isToUser);
  const [chatData, setChatData] = useRecoilState(message);

  useEffect(() => {
    setUserState(true);
  }, []);

  const addChat = (e) => {
    e.preventDefault();
    if (newChat !== "") {
      const sender = userState ? 0 : roomid;
      const newChatItem = {
        userid: sender,
        chat: newChat,
        time: new Date(),
      };
      const updatedChatData = chatData.map((room, index) => {
        if (index === roomid - 1) {
          return {
            ...room,
            chats: [...room.chats, newChatItem],
          };
        } else {
          return room;
        }
      });
      setChatData(updatedChatData);
      setNewChat("");
    }
  };
  return (
    <Wrapper>
      <Header
        headText={userState ? state.userName : ownerName}
        leftChild={"<"}
        rightChild={"⁝"}
      />
      <TempDiv>
        <MessageList roomid={roomid} userName={state.userName}></MessageList>
      </TempDiv>
      <InputForm onSubmit={addChat} className="input">
        <MessageInputBox
          type="text"
          value={newChat}
          onChange={(e) => setNewChat(e.target.value)}
        ></MessageInputBox>
        <SubmitButton type="submit">전송</SubmitButton>
      </InputForm>
    </Wrapper>
  );
};

export default ChatRoom;
