import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import LoginButtons from "./LoginButtons";
import { useRecoilState } from "recoil";
import { AccountsAtom, LoginAtom } from "@/recoil";
import LoginInput from "./LoginInput";
import { Transition } from "react-transition-group";
import { useSDK } from "@metamask/sdk-react";
import { EventType, ServiceStatus } from "@metamask/sdk-communication-layer";
const DotLottiePlayer = dynamic(
  () => import("@dotlottie/react-player").then((mod) => mod.DotLottiePlayer),
  { ssr: false }
);
import "@dotlottie/react-player/dist/index.css";
import dynamic from "next/dynamic";
import LoggedIn from "./LoggedIn";
import CryptoWallet from "./Wallet";
const duration = 150;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0, maxHeight: "0px", overflow: "hidden" },
  entered: { opacity: 1, maxHeight: "300px", overflow: "hidden" },
  exiting: { opacity: 0, maxHeight: "0px", overflow: "hidden" },
  exited: { opacity: 0, maxHeight: "0px", overflow: "hidden" },
  unmounted: { opacity: 0, maxHeight: "0px", overflow: "hidden" },
};

const LoginPage = () => {
  const [loginState, setLoginState] = useRecoilState(LoginAtom);
  const { sdk, connected, connecting } = useSDK();
  const [, setAccounts] = useRecoilState(AccountsAtom);
  const back = () => {
    setLoginState("login");
  };

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const videoContainer = videoContainerRef.current;

    if (!video || !videoContainer) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = videoContainer?.getBoundingClientRect();
      if (video && rect?.left) {
        const x = event.clientX - rect.left;
        const percent = x / rect.width;
        video.currentTime = percent * video.duration;
      }
    };

    const handleMouseLeave = () => {
      video?.play();
    };

    videoContainer?.addEventListener("mousemove", handleMouseMove);
    videoContainer?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      videoContainer?.removeEventListener("mousemove", handleMouseMove);
      videoContainer?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [videoRef.current, videoContainerRef.current]);

  const connect = async () => {
    try {
      console.log("connecting");
      sdk
        ?.connect()
        .then((res) => console.log(setAccounts(res as string[])))
        .catch((err) => console.log(err));
      // console.log(accounts);
      //
    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };

  useEffect(() => {
    if (!sdk) {
      return;
    }
    console.log("test");
    const onChainChanged = (chain: unknown) => {
      console.log(`App::useEfect on 'chainChanged'`, chain);
    };

    const onInitialized = () => {
      console.debug(`App::useEffect on _initialized`);
    };

    const onAccountsChanged = (accounts: unknown) => {
      console.log(`App::useEfect on 'accountsChanged'`, accounts);
    };

    const onConnect = (_connectInfo: any) => {
      console.log(`App::useEfect on 'connect'`, _connectInfo);
    };

    const onDisconnect = (error: unknown) => {
      console.log(`App::useEfect on 'disconnect'`, error);
    };

    const onServiceStatus = (_serviceStatus: ServiceStatus) => {
      console.debug(`sdk connection_status`, _serviceStatus);
    };

    window.ethereum?.on("chainChanged", onChainChanged);

    window.ethereum?.on("_initialized", onInitialized);

    window.ethereum?.on("accountsChanged", onAccountsChanged);

    window.ethereum?.on("connect", onConnect);

    window.ethereum?.on("disconnect", onDisconnect);

    sdk.on(EventType.SERVICE_STATUS, onServiceStatus);

    return () => {
      console.debug(`App::useEffect cleanup activeprovider events`);
      window.ethereum?.removeListener("chainChanged", onChainChanged);
      window.ethereum?.removeListener("_initialized", onInitialized);
      window.ethereum?.removeListener("accountsChanged", onAccountsChanged);
      window.ethereum?.removeListener("connect", onConnect);
      window.ethereum?.removeListener("disconnect", onDisconnect);
      sdk.removeListener(EventType.SERVICE_STATUS, onServiceStatus);
    };
  }, [sdk]);

  // if (connecting) return <div></div>;

  return (
    <div className="flex items-center justify-center min-h-screen  px-4 sm:px-6 lg:px-8 ">
      <div className="w-full max-w-[450px] h-[800px] space-y-8 bg-black rounded-lg">
        <div className="relative h-full p-4 rounded-lg card-glow p-6">
          {loginState === "input" && (
            <div
              className="absolute top-2 left-2 cursor-pointer z-10"
              onClick={back}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M20.5315 24.6825L15.0302 19.1813C14.3805 18.5316 14.3805 17.4684 15.0302 16.8188L20.5315 11.3175"
                    stroke="#FAFAFA"
                    stroke-width="1.6875"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
          )}

          {/* Video container with absolute positioning */}
          <div
            className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg"
            ref={videoContainerRef}
          >
            {/* {connecting && (
              <DotLottiePlayer
                src="https://lottie.host/cbfd486a-7d38-47e8-a39f-2c82eaa9d1f3/JED5ZIpUUv.lottie"
                autoplay
                loop
                className="w-full h-full object-cover opacity-40"
              ></DotLottiePlayer>
            )}
            {(!connected || !connecting) && ( */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover opacity-70"
              src="https://s3-figma-videos-production-sig.figma.com/video/1147787743358927679/TEAM/3d5f/2bb9/-379c-4922-a6ff-00eb2f7c36d8?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XH1PVnYjykDCg5WFil6S9alDSqsZB9hvcZ6vfWR8GRjpNX4oqANa3y5gzHC52jkO0~5wVzwJmsinYwq9xGQqoA7Y1hJT3K~yXIY~CS7-xEFndPfKBN1ifdnlLpHhhcCS73oIKFXfLXuHebdkNuLo67cR~XXAfSxJrEagtmiqK~-no-1O8-hZe9ufiDcbEKYUc-jPanKcryrCuAB1ilBX-zkAxf8oiwf0jq3M74CCg9whO6BQ0Ws2NNE96ncI~myiaTpqCKQUV~A3YsV8sqwxK~jg7Wx~GKY2I5Qcw91-pF8geEnhP8irFCQjvDW2g3hzpnLyeENtQfIbKlJ~CTLVkQ__" // Replace with your video path
            ></video>
            {/* // )} */}
          </div>

          {/* Text container with relative positioning to stack above the video */}
          <div className="relative flex flex-col items-center my-32">
            <div className="flex justify-center mb-4">
              {/* Include your logo here */}
              <div className="p-2 ml-6">
                <img src="/logo.svg" height={94} width={94}></img>
              </div>
            </div>
            <h1 className="text-color-secondary text-2xl text-center z-10 w-28">
              Login to <strong>tria</strong> Demo
            </h1>
          </div>
          {!connected && (
            <div className="pb-6">
              <Transition
                in={loginState === "login"}
                timeout={duration}
                mountOnEnter
                unmountOnExit
              >
                {(state) => (
                  <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
                    <LoginButtons connect={connect} />
                  </div>
                )}
              </Transition>
              <Transition
                in={loginState === "input"}
                timeout={duration}
                mountOnEnter
                unmountOnExit
              >
                {(state) => (
                  <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
                    <LoginInput />
                  </div>
                )}
              </Transition>
            </div>
          )}
          {connected && <LoggedIn />}
          {!connected && (
            <div className="absolute bottom-6 left-0 right-0 mx-auto z-10 text-center">
              <div className="flex w-auto justify-center space-x-2">
                <img src="/mini-logo.svg" height={14} width={14}></img>
                <p className="text-gray-400 text-xs">Powered by Tria</p>
              </div>
            </div>
          )}
        </div>

        {/* {loginState === "authenticated" && <LoginButtons />} */}
      </div>
      {connected && <CryptoWallet></CryptoWallet>}
    </div>
  );
};

export default LoginPage;
