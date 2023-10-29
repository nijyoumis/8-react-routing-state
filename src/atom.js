import { atom, selector } from "recoil";
import friendsData from "./assets/friendsData.json";
import messageData from "./assets/messageData.json";

export const userInfo = atom({
  key: "userInfo",
  default: friendsData.users,
});

export const owner = atom({
  key: "ownerName",
  default: "유진",
});

export const isToUser = atom({
  key: "isToUser",
  default: true,
});

//마지막 메시지
