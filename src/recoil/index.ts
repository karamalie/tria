import { atom } from "recoil";

export const LoginAtom = atom({
  key: "loginState", // unique ID (with respect to other atoms/selectors)
  default: "login", // default value (aka initial value)
});
