import { useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onDarkModeClickHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={onDarkModeClickHandler}
      className="p-2 rounded-lg hover:bg-neutral-700"
    >
      {isDarkMode ? (
        <HiMoon size={37} color="black" />
      ) : (
        <HiSun size={37} color="white" />
      )}
    </button>
  );
};

export default DarkModeButton;
