import { atom } from "recoil";
import friendsData from "./assets/friendsData.json";
import messageData from "./assets/messageData.json";

export const userInfo = atom({
  key: "userInfo",
  default: friendsData.users,
}); // --> 친구 검색에 사용 !

//friends page일때만 search 하도록 friends page인지?
export const isFriends = atom({
  key: "isFriendsPage",
  default: false,
});

export const searchingState = atom({
  key: "searching",
  default: false,
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
