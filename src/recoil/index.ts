import { atom } from "recoil";

export const LoginAtom = atom({
  key: "loginState",
  default: "login",
});

export const WalletAtom = atom<boolean>({
  key: "isWalletOpen",
  default: false,
});

export const AccountsAtom = atom<string[]>({
  key: "accounts",
  default: [],
});
