import React, { useState } from "react";
import { userInfo } from "../atom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import UserInfo from "./UserInfo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInput = styled.input`
  height: 25px;
  width: 315px;
  border-radius: 3px;
  border: none;
  background-color: white;
  padding: 3px;
`;

const SectionBorder = styled.h2`
  padding: 3px;
  margin: 3px;
  border-bottom: 1px solid black;
  margin: 10px;
`;

const SearchUser = () => {
  const [input, setInput] = useState("");
  const users = useRecoilValue(userInfo);

  const getValue = (e) => {
    setInput(e.target.value.toLowerCase());
  };
  const searched = users.filter((item) =>
    item.name.toLowerCase().includes(input)
  );
  return (
    <Wrapper>
      <UserInput placeholder="   Find friends!" onChange={getValue} />
      <SectionBorder>Searching ..</SectionBorder>
      {searched.map((item) => (
        <UserInfo
          key={item.userid}
          id={item.userid}
          name={item.name}
          status={item.profileMessage}
        />
      ))}
    </Wrapper>
  );
};

export default SearchUser;
