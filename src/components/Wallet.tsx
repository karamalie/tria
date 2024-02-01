import React, { useCallback, useEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"; // Ensure these are installed and imported correctly
import { ScrollArea } from "@radix-ui/themes";
import NavigationBar from "./NavigationBar";
import { AccountsAtom, EthBalanceAtom, WalletAtom } from "@/recoil";
import { useRecoilState } from "recoil";
import Web3 from "web3";

interface CryptoAsset {
  symbol: string;
  amount: string;
  icon: string; // URL to the asset's icon
}

const CryptoWallet: React.FC = () => {
  const [accounts, setAccounts] = useRecoilState(AccountsAtom);
  const [walletOpen, setWalletOpen] = useRecoilState(WalletAtom); // This should be fetched from your backend or crypto wallet service
  const [ethBalance, setEthBalance] = useRecoilState(EthBalanceAtom);
  const [isMinimized, setIsMinimized] = useState(false);
  const [assets] = useState<CryptoAsset[]>([
    // This should be fetched from your backend or crypto wallet service
    { symbol: "MATIC", amount: "$10.094", icon: "/polygon.svg" },
    { symbol: "ETH", amount: "$20.094", icon: "/ethereum.svg" },
    { symbol: "MATIC", amount: "$10.094", icon: "/polygon.svg" },
    { symbol: "ETH", amount: "$20.094", icon: "/ethereum.svg" },
    // Add other assets here
  ]);
  const maxHeight = walletOpen ? "525px" : "0px";
  const contentMaxHeight = !isMinimized ? "190px" : "0";
  const contentOpacity = !isMinimized ? "1" : "0";
  // Handle the toggle of the wallet display
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  const toggleExpand = () => {
    setWalletOpen(!walletOpen);
  };

  useEffect(() => {
    const fetchBalance = async () => {
      if (accounts && accounts.length > 0) {
        const balance = await getAccountBalance();
        console.log("balance", balance);
        setEthBalance(balance);
      }
    };

    fetchBalance();
  }, [accounts]);

  const getAccountBalance = async (): Promise<string> => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== "undefined") {
      const web3 = new Web3(window.ethereum);

      try {
        // Request account access
        await window.ethereum.enable();

        // Get the first account
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        // Get the balance
        const balanceWei = await web3.eth.getBalance(account);
        return web3.utils.fromWei(balanceWei, "ether");
      } catch (error: any) {
        console.error(`An error occurred: ${error.message}`);
        throw error;
      }
    } else {
      console.log("MetaMask is not installed!");
      throw new Error("MetaMask is not installed");
    }
  };

  return (
    <div className="fixed bottom-0 w-full  sm:mb-2 sm:mr-2 right-0 sm:max-w-xs w-full text-white rounded-lg shadow-lg overflow-hidden z-50">
      <div className="relative flex justify-center translate-nav">
        <button className="cursor-pointer relative" onClick={toggleExpand}>
          <img
            src="togglewallet.svg"
            width={110}
            height={34}
            alt="Toggle Wallet"
          />
          <span className="absolute inset-0 flex justify-center items-center">
            {walletOpen ? (
              <ChevronDownIcon className="w-5 h-5 text-white" />
            ) : (
              <ChevronUpIcon className="w-5 h-5 text-white" />
            )}
          </span>
        </button>
      </div>
      <div
        className={`${
          !walletOpen ? "" : "border-t border-r border-l border-neutral-800"
        } w-full bg-surface-black  text-white rounded-t-lg shadow-lg overflow-hidden z-50 transition-all duration-300`}
        style={{ maxHeight: maxHeight }}
      >
        {/* {!isExpanded && ( */}
        <div
          className={`transition-opacity duration-300 ${
            walletOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="flex items-center justify-between px-4 pt-4 cursor-pointer bg-surface-black rounded-t-lg"
            onClick={toggleMinimize}
          >
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <img
                  src="/profilephoto.svg"
                  alt="Profile"
                  height={24}
                  width={24}
                />
                <span className="text-color-secondary/70">thekaypo@tria</span>
              </div>
              {isMinimized ? (
                <ChevronUpIcon className="w-4 h-4 text-white" />
              ) : (
                <ChevronDownIcon className="w-4 h-4 text-white" />
              )}
            </div>
            <div className="flex items-center space-x-2">
              <img src="/copy.svg" height={18} width={18}></img>
              <img src="/polygon.svg" height={24} width={24}></img>
            </div>
          </div>
          <div
            className="p-4 transition-all duration-500 ease-in-out"
            style={{
              maxHeight: contentMaxHeight,
              opacity: contentOpacity,
              overflow: "hidden", // Prevent content from overflowing during transition
            }}
          >
            <div
              id="wallet-card"
              className="relative p-4 rounded-lg z-0 bg-blue-gradient"
            >
              <img
                src="/card-bg.svg"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
                style={{ zIndex: -1 }}
              ></img>
              <div className="flex space-x-2 mb-1 z-20">
                <div className="text-color-secondary/70">Assets Up</div>
                <div className="flex items-center justify-center rounded-full px-2 text-sm bg-green-700/60 text-green-200">
                  2.5%
                </div>
              </div>

              <div className="text-3xl font-bold mb-5 z-20">$1838.83</div>

              <div className="flex justify-between space-x-2 z-20">
                <button className=" w-full flex justify-center items-center space-x-2 bg-surface-black/50 rounded-lg px-4 py-2">
                  <img src="/crypto.svg" height={24} width={24}></img>
                  <span>Buy</span>
                </button>
                <button className=" w-full flex justify-center items-center space-x-2 bg-surface-black/50 rounded-lg px-4 py-2">
                  <img src="/sendcrypto.svg" height={24} width={24}></img>
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
          <ScrollArea
            type="always"
            scrollbars="vertical"
            style={{ height: 200 }}
          >
            <div className="px-1">
              {assets.map((asset, index) => (
                <div
                  key={index}
                  className=" my-2 p-3 cursor-pointer hover:bg-neutral-800 rounded-lg"
                >
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center space-x-2">
                      <img
                        src={asset.icon}
                        alt={asset.symbol}
                        height={40}
                        width={40}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-bold"> {asset.symbol}</div>
                        <div className="rounded-full border border-neutral-800 p-1 w-6 h-6">
                          <img
                            src="/matic-mini.svg"
                            className="rounded-full w-full h-full"
                          ></img>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>{asset.amount}</div>
                      <div className="text-sm text-color-tertiary">1 POL</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          {/* Additional content */}
          <div className="flex justify-center py-2">
            <div className="rounded-full border border-neutral-800 p-2">
              <NavigationBar />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          !walletOpen
            ? "border border-neutral-800 rounded-lg"
            : " border border-b border-neutral-800 rounded-b-lg"
        } bg-surface-black flex w-auto justify-center space-x-2 py-2 `}
      >
        <img src="/mini-logo.svg" height={14} width={14}></img>
        <p className="text-gray-400 text-xs">Powered by Tria</p>
      </div>
    </div>
  );
};

export default CryptoWallet;
