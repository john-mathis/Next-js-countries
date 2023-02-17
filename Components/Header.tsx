import { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

export default function Header() {
  const [isDarkModeActivated, setIsDarkModeActivated] =
    useState<boolean>(false);
  console.log(isDarkModeActivated);
  const handleDarkMode = () => {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    document.body.style.backgroundColor = "#111517";
  };

  const handleLightMode = () => {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    document.body.style.backgroundColor = "#D8D8D8";
  };

  return (
    <section className="flex justify-between min-h-fit p-4 bg-white dark:bg-darkgrey">
      <h1 className="text-black dark:text-white">Where in the world?</h1>
      <div className="flex cursor-pointer">
        {/* Light Mode Container */}
        <div className="flex items-center" onClick={handleLightMode}>
          <BsFillMoonFill className="text-white hidden dark:flex" />
          <p className="text-white hidden dark:flex ml-2">Light Mode</p>
        </div>
        {/* Dark Mode Container */}
        <div className="flex items-center" onClick={handleDarkMode}>
          <BsMoon className="flex dark:hidden" />
          <p className="text-black flex dark:hidden ml-2">Dark Mode</p>
        </div>
      </div>
    </section>
  );
}
