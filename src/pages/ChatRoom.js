import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { useState } from "react";
import useToggle from "../hooks/useToggle";
import MessageList from "../components/MessageList";
import { useLocation } from "react-router-dom";

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

const ChatRoom = (props) => {
  const { id } = useParams();
  const [chats, setChats] = useState([]);
  const [newChat, setNewChat] = useState("");
  const { state } = useLocation();
  // 해당 id의 chattings 정보를 가져오기
  // ㄱ-;;
  // 토글 기능 나 아니면 친구로 바꿔야하고

  const [receiver, toggle] = useToggle("Maru");

  const addChat = (e) => {
    e.preventDefault();
    if (newChat !== "") {
      const sender = receiver === "Maru" ? "Woorie" : "Maru";
      setChats([
        ...chats,
        {
          author: sender,
          text: newChat,
          timeStamp: new Date(),
        },
      ]);
      setNewChat("");
    }
  };
  return (
    <Wrapper>
      <Header headText={state.userName} leftChild={"<"} rightChild={"⁝"} />
      <TempDiv>
        <MessageList roomid={id}></MessageList>
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
