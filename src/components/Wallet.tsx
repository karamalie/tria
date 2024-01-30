import React, { useState } from "react";

// Make sure to import Chevron icons from the correct library or use SVGs directly
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Wallet = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="fixed bottom-0 right-0 m-4">
      <div
        className={`bg-gray-800 text-white rounded-t-lg transition-transform ${
          isCollapsed ? "max-h-0" : "max-h-96"
        } overflow-hidden`}
      >
        <button
          onClick={handleToggle}
          className="flex justify-between items-center w-full p-4"
        >
          <span>thekaypo@tria</span>
          {isCollapsed ? (
            <ChevronUpIcon className="w-5 h-5" />
          ) : (
            <ChevronDownIcon className="w-5 h-5" />
          )}
        </button>

        {!isCollapsed && (
          <div className="px-4 pb-4">
            <div className="flex items-center justify-between mt-4">
              <div>
                <div className="text-sm">Assets Up +2.5%</div>
                <div className="text-2xl font-bold">$1838.83</div>
              </div>
              <div className="flex">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l">
                  Buy
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r">
                  Send
                </button>
              </div>
            </div>
            {/* Crypto list */}
            <div className="mt-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <div className="mr-2">{/* Icon placeholder */}</div>
                  USDC
                </div>
                <div>$10.094</div>
              </div>
              {/* ... Repeat for each crypto */}
            </div>
          </div>
        )}
      </div>
      {!isCollapsed && (
        <div className="bg-gray-800 text-white rounded-b-lg text-center p-2">
          Open Tria
        </div>
      )}
    </div>
  );
};

export default Wallet;
