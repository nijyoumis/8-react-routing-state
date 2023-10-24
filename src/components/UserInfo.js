import React from "react";
import styled from "styled-components";

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 320px;
  &:hover {
    background-color: white;
  }
  cursor: pointer;
`;

const UserImg = styled.img`
  border: none;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  object-fit: cover;
  margin: 5px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const UserName = styled.div`
  align-self: flex-start;
  margin: 3px;
  font-size: 16px;
  font-weight: bold;
`;

const Status = styled.div`
  font-size: smaller;
  color: gray;
  margin: 3px;
`;

const UserInfo = ({ name, status, id }) => {
  return (
    <UserWrapper>
      <UserImg src={`${process.env.PUBLIC_URL}/img/${id}.jpg`} />
      <InfoWrapper>
        <UserName>{name}</UserName>
        <Status>{status}</Status>
      </InfoWrapper>
    </UserWrapper>
  );
};

export default UserInfo;
