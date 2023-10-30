import React, { useState, useEffect } from "react";
import ButtonFooter from "../components/ButtonFooter";
import Header from "../components/Header";
import styled from "styled-components";
import UserInfo from "../components/UserInfo";
import SearchUser from "../components/SearchUser";
import ProfileModal from "../components/ProfileModal";
import { userInfo, isFriends, searchingState } from "../atom";
import { useRecoilValue, useRecoilState } from "recoil";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px;
`;
const TempDiv = styled.div`
  flex: 1;
`;

const ProfileDiv = styled.h2`
  padding: 3px;
  margin: 3px;
  border-bottom: 1px solid white;
`;

const Friends = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState();
  const users = useRecoilValue(userInfo);
  const [pageState, setPageState] = useRecoilState(isFriends);
  const [isSearching, setIsSearching] = useRecoilState(searchingState);

  useEffect(() => {
    setPageState(true);
    return () => {
      setIsSearching(false);
    };
  }, []);

  const onClickProfile = (user) => {
    setIsModalOpen(true);
    setSelectedUser(user);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Wrapper>
        <Header headText={"Friends"} leftChild={"<"} rightChild={"🔍"} />
        <TempDiv>
          <>{pageState && isSearching && <SearchUser></SearchUser>}</>
          <>
            {!isSearching && (
              <>
                <ProfileDiv>My profile</ProfileDiv>
                <div>
                  {users.map(
                    (user) =>
                      user.userid === 0 && (
                        <div
                          key={user.userid}
                          onClick={() => onClickProfile(user)}
                        >
                          <UserInfo
                            key={user.userid}
                            name={user.name}
                            status={user.profileMessage}
                            id={user.userid}
                          ></UserInfo>
                        </div>
                      )
                  )}
                </div>
                <ProfileDiv>Friends</ProfileDiv>
                <div>
                  {users.map(
                    (user) =>
                      user.userid !== 0 && (
                        <div
                          key={user.userid}
                          onClick={() => onClickProfile(user)}
                        >
                          <UserInfo
                            key={user.userid}
                            name={user.name}
                            status={user.profileMessage}
                            id={user.userid}
                          ></UserInfo>
                        </div>
                      )
                  )}
                </div>
              </>
            )}
          </>
        </TempDiv>
        <ButtonFooter></ButtonFooter>
      </Wrapper>
      <>
        {isModalOpen && (
          <ProfileModal
            selectedUser={selectedUser}
            closeModal={closeModal}
          ></ProfileModal>
        )}
      </>
    </>
  );
};

export default Friends;
