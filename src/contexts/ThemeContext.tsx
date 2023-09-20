"use client";

import React, { createContext, useContext, useState } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext({} as ThemeContextType);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("");

  const values = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default ThemeContextProvider;
