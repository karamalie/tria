import React, { useState } from "react";
import { HomeIcon, UserGroupIcon, ClockIcon } from "@heroicons/react/24/solid"; // Ensure these are installed and imported correctly

const NavItem = ({
  icon,
  label,
  isSelected,
  onSelect,
}: {
  icon: string;
  label: string;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  const baseClasses =
    "flex items-center px-2 py-1 rounded-full cursor-pointer ";
  const textContainerClasses = isSelected
    ? "max-w-xs overflow-visible opacity-100"
    : "max-w-0 overflow-hidden opacity-0";

  return (
    <div
      className={`${baseClasses} ${
        isSelected
          ? "bg-color-surface z-20 border border-neutral-600"
          : "bg-surface-black z-10 border border-neutral-800"
      } -mr-2 last:mr-0`}
      onClick={onSelect}
      style={{ position: "relative" }}
    >
      <div className="flex items-center">
        <img src={icon} height={20} width={20} alt={label} />
        <div
          className={`transition-all ease-in-out duration-300 ${textContainerClasses}`}
          style={{ visibility: isSelected ? "visible" : "hidden" }}
        >
          <span className="text-white text-sm ml-2 whitespace-nowrap">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

const NavigationBar = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex p-2 rounded-lg shadow-md bg-surface-black">
      <div className="flex -m-2">
        <NavItem
          icon={"/home.svg"}
          label="Home"
          isSelected={selected === "home"}
          onSelect={() => setSelected(selected === "home" ? null : "home")}
        />
        <NavItem
          icon={"/chain.svg"}
          label="Profile"
          isSelected={selected === "profile"}
          onSelect={() =>
            setSelected(selected === "profile" ? null : "profile")
          }
        />
        <NavItem
          icon={"/clock.svg"}
          label="History"
          isSelected={selected === "history"}
          onSelect={() =>
            setSelected(selected === "history" ? null : "history")
          }
        />
      </div>
    </div>
  );
};

export default NavigationBar;
