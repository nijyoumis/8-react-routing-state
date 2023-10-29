import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { useState } from "react";
import MessageList from "../components/MessageList";
import { useLocation } from "react-router-dom";
import { isToUser, owner } from "../atom";
import { useRecoilState, useRecoilValue } from "recoil";
import messageData from "../assets/messageData.json";

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
  const [chats, setChats] = useState([]);
  const [newChat, setNewChat] = useState("");
  const { state } = useLocation();
  const [userState, setUserState] = useRecoilState(isToUser);
  const ownerName = useRecoilValue(owner);

  const allRooms = messageData.chattings;
  const selectedRoom = allRooms[roomid - 1];

  useEffect(() => {
    setUserState(true);
  }, []);

  // 새 메시지 작성시 json 파일 업데이트
  // lastChat 설정

  const addChat = (e) => {
    e.preventDefault();
    if (newChat !== "") {
      const sender = userState ? 0 : roomid;
      setChats([
        ...chats,
        {
          userid: sender,
          chat: newChat,
          time: new Date(),
        },
      ]);
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
