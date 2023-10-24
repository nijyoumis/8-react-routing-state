import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const StartButton = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 100px;
  border: 1px solid black;
  cursor: pointer;
  background-color: white;
  font-size: 20px;
  margin: 10px 30px 20px 10px;
`;

const BackgroundImage = styled.div`
  border-radius: 16px;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: contain;
`;

const Home = () => {
  const imgSrc = `${process.env.PUBLIC_URL}/img/start.jpg`;
  const navigate = useNavigate();
  return (
    <BackgroundImage src={imgSrc}>
      <HomeContainer>
        <StartButton
          onClick={() => {
            navigate("/friends");
          }}
        >
          Click to Start!
        </StartButton>
      </HomeContainer>
    </BackgroundImage>
  );
};

export default Home;
