import { SidebarContext } from "@/context/SidebarContext";

import { useTheme } from "next-themes";
import React, { useContext } from "react";

export default function Header() {
  const { toggleSidebar } = useContext(SidebarContext);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <header className="z-40 py-4 bg-white shadow-sm dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 ">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          Menu Icon
        </button>
        {/* <!-- Search input --> */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              Icon
            </div>
            <input
              type="text"
              className="pl-8 text-gray-700"
              placeholder="Search"
            />
          </div>
        </div>
        <button
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
          className="bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800"
        >
          {theme == "dark" ? <span>Sun</span> : <span>Moon</span>}
        </button>
        <ul>
          <li>Header</li>
        </ul>
      </div>
    </header>
  );
}
