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
