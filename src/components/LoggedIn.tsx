import React, { useEffect, useState } from "react";

import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";
import { useRecoilState } from "recoil";
import { EthBalanceAtom, LoginAtom, WalletAtom } from "@/recoil";

const LoggedIn = () => {
  const [, setWalletOpen] = useRecoilState(WalletAtom);
  const [ethBalance] = useRecoilState(EthBalanceAtom);
  const { sdk } = useSDK();

  const disconnect = () => {
    if (sdk) {
      sdk.terminate();
    }
  };
  const toggleWallet = () => {
    setWalletOpen((prev) => !prev);
  };

  return (
    <div className="z-10 relative bg-neutral-900 p-4 rounded-xl transition-opacity">
      <div className="relative z-10 flex flex-col sm:flex-row gap-4">
        <button
          onClick={disconnect}
          className="w-full flex items-center px-4 py-2 rounded-md border border-neutral-700 text-white"
        >
          <div className="flex justify-center mr-2 items-center">
            <img src="/metamask.png" height={20} width={20}></img>
          </div>
          Disconnect
        </button>
        <button
          onClick={toggleWallet}
          className="w-full px-4 py-2 flex items-center rounded-md border border-neutral-700 text-white"
        >
          <div className="flex justify-center mr-2 items-center">
            <img src="/metamask.png" height={20} width={20}></img>
          </div>
          Toggle wallet
        </button>
      </div>
      {ethBalance.length > 0 && <div>Your ETH Balance is : {ethBalance} </div>}
    </div>
  );
};

export default LoggedIn;
