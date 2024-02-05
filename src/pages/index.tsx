import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "@/components/Login";
import { MetaMaskProvider } from "@metamask/sdk-react";
import { RecoilRoot } from "recoil";

import CryptoWallet from "@/components/Wallet";

import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const host =
    typeof window !== "undefined" ? window.location.href : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: true },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Next-Metamask-Boilerplate",
      url: host, // using the host constant defined above
    },
  };

  return (
    <main>
      <RecoilRoot>
        <MetaMaskProvider debug={true} sdkOptions={sdkOptions}>
          <Theme appearance="dark">
            <Login></Login>
          </Theme>
        </MetaMaskProvider>
      </RecoilRoot>
    </main>
  );
}
