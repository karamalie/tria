import React, { useState } from "react";
import LoginButtons from "./LoginButtons";
import { useRecoilState } from "recoil";
import { LoginAtom } from "@/recoil";
import LoginInput from "./LoginInput";
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};
const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const LoginPage = () => {
  const [loginState, setLoginState] = useRecoilState(LoginAtom);

  const back = () => {
    setLoginState("login");
  };
  return (
    <div className="flex items-center justify-center min-h-screen  px-4 sm:px-6 lg:px-8 ">
      <div className="w-full max-w-[450px] h-[800px] space-y-8 bg-black">
        <div className="relative p-4 rounded-lg card-glow p-6">
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
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover opacity-60"
              src="https://s3-figma-videos-production-sig.figma.com/video/1147787743358927679/TEAM/3d5f/2bb9/-379c-4922-a6ff-00eb2f7c36d8?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XH1PVnYjykDCg5WFil6S9alDSqsZB9hvcZ6vfWR8GRjpNX4oqANa3y5gzHC52jkO0~5wVzwJmsinYwq9xGQqoA7Y1hJT3K~yXIY~CS7-xEFndPfKBN1ifdnlLpHhhcCS73oIKFXfLXuHebdkNuLo67cR~XXAfSxJrEagtmiqK~-no-1O8-hZe9ufiDcbEKYUc-jPanKcryrCuAB1ilBX-zkAxf8oiwf0jq3M74CCg9whO6BQ0Ws2NNE96ncI~myiaTpqCKQUV~A3YsV8sqwxK~jg7Wx~GKY2I5Qcw91-pF8geEnhP8irFCQjvDW2g3hzpnLyeENtQfIbKlJ~CTLVkQ__" // Replace with your video path
            ></video>
          </div>

          {/* Text container with relative positioning to stack above the video */}
          <div className="relative flex flex-col items-center my-40">
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
          {loginState === "login" && <LoginButtons />}
          {loginState === "input" && <LoginInput />}
          {loginState === "authenticated" && <LoginButtons />}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
