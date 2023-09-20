"use client";
import { BiSun, BiMoon } from "react-icons/bi";
import React from "react";
import { useThemeContext } from "@/contexts/ThemeContext";

const ThemeButton = () => {
  const { theme, setTheme } = useThemeContext();

  const handleTheme = () => {
    setTheme(theme === "night" ? "light" : "night");
  };

  return (
    <div
      className="hover:bg-slate-300 p-2 rounded-full cursor-pointer transition-all duration-300 w-fit me-8 mt-4 ms-auto"
      onClick={handleTheme}
    >
      {theme === "night" ? <BiSun size={30} /> : <BiMoon size={30} />}
    </div>
  );
};

export default ThemeButton;
