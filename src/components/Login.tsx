import React, { useState } from "react";
import LoginButtons from "./LoginButtons";

const LoginPage = () => {
  // The login view
  // The login view
  return (
    <div className="flex items-center justify-center min-h-screen  px-4 sm:px-6 lg:px-8 ">
      <div className="w-full max-w-[450px] h-full space-y-8">
        <div className="relative p-4 rounded-lg bg-surface-black card-glow p-6">
          {/* Video container with absolute positioning */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
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
            <h1 className="text-color-secondary text-xl text-center z-10">
              Login to tria Demo
            </h1>
          </div>
          <LoginButtons />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
