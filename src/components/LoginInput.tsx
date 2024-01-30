import React, { useState } from "react";

const LoginInput = () => {
  const [username, setUsername] = useState("");
  const [usernameAvailable, setUsernameAvailable] = useState(false);

  const checkUsernameAvailability = (_newUsername: string) => {
    // This function should contain the logic to check if the username is available.
    // For demonstration purposes, I'm setting it to false.
    setUsernameAvailable(false);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    checkUsernameAvailability(event.target.value);
  };

  const handleNext = () => {
    if (usernameAvailable) {
      // Proceed with the next step
      console.log("Username is available:", username);
    } else {
      // Show an error or alert the user
      console.log("Username is not available.");
    }
  };

  return (
    <div className="z-10 relative bg-neutral-900 p-4 rounded-xl">
      <div className="pb-4">
        <h1 className="text-color-secondary text-xl">Create your tria name</h1>
      </div>
      <div className="z-10">
        <div className="pb-2">
          <div className="flex w-full pb-2">
            <div className="relative flex items-center w-full">
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Your username"
                className="w-full h-full pl-3 pr-14 py-1.5  border border-transparent rounded-xl text-sm font-medium text-white bg-color-surface"
              />
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-neutral-400">
                @tria
              </div>
            </div>

            <button className="w-1/4 ml-2 relative flex items-center px-3 py-1.5 rounded-xl text-white bg-purple-gradient group">
              <div className="absolute inset-0 bg-dark-purple-gradient opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center  w-full h-full">
                Next
              </div>
            </button>
          </div>
          {/* <p
            className={`text-xs ${
              usernameAvailable ? "text-green-500" : "text-red-500"
            }`}
          >
            {usernameAvailable
              ? "Username is available"
              : "Username not available"}
          </p> */}
        </div>
        <div>
          <div className="text-sm text-color-secondary mb-2">Reccomended:</div>
          <div className="flex space-x-2">
            {/* Map these from state or props */}
            <span className="bg-neutral-700 bg-opacity-20  border text-xs border-neutral-700 text-color-secondary px-3 py-1 rounded-full flex items-center">
              kunaaa123
            </span>
            <span className="bg-neutral-700 bg-opacity-20  border text-xs border-neutral-700 text-color-secondary px-3 py-1 rounded-full flex items-center">
              kunaaa123
            </span>
            <span className="bg-neutral-700 bg-opacity-20  border text-xs border-neutral-700 text-color-secondary px-3 py-1 rounded-full flex items-center">
              kunaaa123
            </span>
          </div>
        </div>
      </div>
      <div className="bg-neutral-700 bg-opacity-20 z-10 mt-4 text-xs text-gray-400 flex items-center border border-neutral-700 rounded-xl px-4 py-2">
        <div
          style={{ width: "32px", height: "32px" }}
          className="flex items-center mr-4"
        >
          <video
            autoPlay
            loop
            muted
            src="https://s3-figma-videos-production-sig.figma.com/video/1147787743358927679/TEAM/f261/ba1b/-5739-4249-bc44-fece7ef383f1?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ou7UsDvTsyQKzI-FrnGTUSgkB~gaGaAV97aCeacO9U-evNbIlsr9zChOtMQENLdYSAliWabNLSCrm580yWGfM2xDWYHYMWN1T7zW7K6YlFh82lvZ77xp5EEAgo9aF9NL2JgO4CQrnS9YI045kS6BNIvIuBHNNfWjofBwP-WO0WslOMqXTX2upTSWdAfk7LFQj91MbG9wnxr8UN7FSuXSSkKstJQG2oh6PXiVon5UyjIz4~6B8a~NTNOAqcxZstEi9WTYcHU-wuBrxjp8t2ZTReXHC8oxAo8RXyeEtY3Z-Yq3Ot-dlycccWBh8VkIiRjhfeO7WGrJ7GLvEuvi--pg~g__"
          ></video>
        </div>
        <div>
          Your @tria is like Gmail, for Web3. Pay, receive and log-in to apps on
          any device, and blockchain.
        </div>
      </div>
    </div>
  );
};

export default LoginInput;
