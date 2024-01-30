import React, { useState } from "react";

const LoginButtons = () => {
  return (
    <div className="z-10 relative bg-neutral-900 p-4 rounded-xl">
      <div className="relative z-10 space-y-4">
        <button className="w-full flex items-center justify-left px-3 py-1.5 border border-transparent rounded-xl  text-white bg-purple-gradient">
          <div className="rounded-full bg-white w-8 h-8 mr-2 flex items-center justify-center">
            <img src="/google.png" height={20} width={20}></img>
          </div>
          Continue with Google
        </button>
        <button className="w-full flex items-center justify-left px-3 py-1.5 border border-transparent rounded-xl text-white bg-color-surface">
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
        <button className="w-full flex items-center px-4 py-2 rounded-md border border-neutral-700 text-white">
          <div className="flex justify-center mr-2 items-center">
            <img src="/metamask.png" height={20} width={20}></img>
          </div>
          Metamask
        </button>
        <button className="w-full px-4 py-2 flex items-center rounded-md border border-neutral-700 text-white">
          <div className="flex justify-center mr-2 items-center">
            <img src="/walletconnect.png" height={20} width={20}></img>
          </div>
          WalletConnect
        </button>
      </div>
      <div className="relative z-10 mt-4 text-center">
        <p className="text-gray-400 text-xs">Powered by Tria</p>
      </div>
    </div>
  );
};

export default LoginButtons;
