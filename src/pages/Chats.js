import React from "react";
import Header from "../components/Header";
import ButtonFooter from "../components/ButtonFooter";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import messageData from "../assets/messageData.json";
import ChatInfo from "../components/ChatInfo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px;
  background-color: #ffff96;
  border-radius: 16px;
`;
const TempDiv = styled.div`
  flex: 1;
`;

const Chats = () => {
  const navigate = useNavigate();

  const getLastChat = (userName) => {
    const filteredChat = messageData.find(
      (chatRoom) => chatRoom.userName === userName
    ).chats;
  };

  return (
    <Wrapper>
      <Header headText={"MyChats"} leftChild={"<"} rightChild={"⁝"} />
      <TempDiv>
        <div>
          {messageData.chattings.map((chats) => (
            <div
              key={chats.roomId}
              onClick={() =>
                navigate(`/chatRoom/${chats.roomId}`, {
                  state: { userName: `${chats.userName}` },
                })
              }
            >
              <ChatInfo
                key={chats.roomId}
                name={chats.userName}
                message={"마지막메시지"}
                id={chats.roomId}
              ></ChatInfo>
            </div>
          ))}
        </div>
      </TempDiv>
      <ButtonFooter></ButtonFooter>
    </Wrapper>
  );
};

export default Chats;
