import React, { useRef } from "react";
import styled from "styled-components";

const Layer = styled.div`
  z-index: 1500;
  display: block;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const ModalWrapper = styled.div`
  z-index: 2000;
  width: 320px;
  height: 490px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  background-color: white;
  border: none;
  border-radius: 20px;
  flex-direction: column;
`;
const ProfileImg = styled.img`
  width: 320px;
  height: 370px;
  border: none;
  border-radius: 20px 20px 0 0;
  margin: 0 0 3px 0;
`;
const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
const StatusMessage = styled.div``;

const ProfileModal = ({ closeModal, ...props }) => {
  const modalRef = useRef();
  const clickOutside = (e) => {
    if (modalRef.current && modalRef.current === e.target) {
      closeModal();
    }
  };

  const userInfo = props.selectedUser;
  return (
    <Layer ref={modalRef} onClick={clickOutside}>
      <ModalWrapper>
        <ProfileImg
          src={`${process.env.PUBLIC_URL}/img/${userInfo.userid}.jpg`}
        />
        <InfoWrapper>
          <StatusMessage>{userInfo.profileMessage}</StatusMessage>
        </InfoWrapper>
      </ModalWrapper>
    </Layer>
  );
};

export default ProfileModal;
