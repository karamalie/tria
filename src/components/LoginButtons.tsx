import React, { useEffect, useState } from "react";

import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";
import { useRecoilState } from "recoil";
import { AccountsAtom, LoginAtom } from "@/recoil";
import { DotLottiePlayer } from "@dotlottie/react-player";

interface LoginButtonsProps {
  connect: () => void;
}
const LoginButtons = ({ connect }: LoginButtonsProps) => {
  const [, setLoginState] = useRecoilState(LoginAtom);
  const [isHovering, setIsHovering] = useState(false);
  const { connecting } = useSDK();

  const signIn = () => {
    setLoginState("input");
  };

  return (
    <div className="z-10 relative bg-surface-dark p-4 rounded-xl transition-opacity">
      <div className="relative z-10 space-y-4">
        <button
          onClick={signIn}
          className="relative w-full flex items-center px-3 py-1.5  rounded-xl text-white bg-purple-gradient group"
        >
          <div className="absolute inset-0 bg-dark-purple-gradient opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
          <div
            onMouseEnter={() => setIsHovering(true)} // Set hover state to true
            onMouseLeave={() => setIsHovering(false)} // Set hover state to false
            className="relative flex items-center  w-full h-full"
          >
            <div className="rounded-full bg-white w-8 h-8 mr-2 flex items-center justify-center">
              <img
                src="/google.png"
                height={20}
                width={20}
                alt="Google"
                style={{ display: isHovering ? "none" : "block" }}
              />

              <DotLottiePlayer
                src="https://lottie.host/a49e847c-e1e7-401d-b085-f9717b084bab/ZCurmQyvh3.lottie"
                autoplay
                loop
                style={{ display: isHovering ? "block" : "none" }}
              ></DotLottiePlayer>
            </div>
            Continue with Google
          </div>
        </button>
        <button className="w-full flex items-center justify-left px-3 py-1.5 border border-transparent rounded-xl text-white bg-color-surface/80 hover:bg-color-surface/60">
          <div className="rounded-full bg-white w-8 h-8 mr-2 flex items-center justify-center">
            <img src="/twitter.svg" height={20} width={20}></img>
          </div>
          Continue with X
        </button>
      </div>
      <div className="relative z-10 flex items-center justify-between my-4">
        <span className="w-1/2 border-b border-gray-600"></span>
        <p className="text-xs text-center text-gray-400 uppercase mx-4">or</p>
        <span className="w-1/2 border-b border-gray-600"></span>
      </div>
      <div className="relative z-10 flex flex-col sm:flex-row gap-4">
        <button
          onClick={connect}
          disabled={connecting}
          className="hover:bg-neutral-900 w-full flex items-center justify-center px-4 py-2 rounded-lg border border-neutral-700 text-white"
        >
          <div className="flex justify-center mr-2 items-center">
            <img src="/metamask.png" height={20} width={20}></img>
          </div>
          Metamask
        </button>
        <button className="hover:bg-neutral-900 w-full px-4 py-2 flex justify-center items-center rounded-lg border border-neutral-700 text-white">
          <div className="flex justify-center mr-2 items-center">
            <img src="/walletconnect.png" height={20} width={20}></img>
          </div>
          WalletConnect
        </button>
      </div>
    </div>
  );
};

export default LoginButtons;
