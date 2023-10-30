import React from "react";
import Header from "../components/Header";
import ButtonFooter from "../components/ButtonFooter";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ChatInfo from "../components/ChatInfo";
import { useRecoilValue } from "recoil";
import { message } from "../atom";

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
  const chatData = useRecoilValue(message);

  return (
    <Wrapper>
      <Header headText={"My Chats"} leftChild={"<"} rightChild={"⁝"} />
      <TempDiv>
        <div>
          {chatData.map((chats) => (
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
