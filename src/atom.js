import { atom } from "recoil";
import friendsData from "./assets/friendsData.json";
import messageData from "./assets/messageData.json";

export const userInfo = atom({
  key: "userInfo",
  default: friendsData.users,
});

export const owner = atom({
  key: "ownerName",
  default: "Yujin",
});

export const isToUser = atom({
  key: "isToUser",
  default: true,
});

export const message = atom({
  key: "message",
  default: messageData.chattings,
}); //default 값은 모든 채팅방 정보

//마지막 메시지
