"use client";

import { useThemeContext } from "@/contexts/ThemeContext";
import React from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeContext();

  return <div data-theme={theme}>{children}</div>;
};

export default ThemeProvider;
