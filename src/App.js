import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Friends from "./pages/Friends";
import Home from "./pages/Home.js";
import Chats from "./pages/Chats";
import ChatRoom from "./pages/ChatRoom";
import Settings from "./pages/Settings";

const Container = styled.div`
  border: none;
  width: 340px;
  height: 700px;
  background-color: #ffe3ee;
  border-radius: 16px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/chatRoom/:roomid" element={<ChatRoom />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
