"use client";

// Theme light dark
type Theme = "light" | "dark";

import { current } from "@reduxjs/toolkit";
import React, { createContext, ReactNode, useContext, useMemo, useState } from "react";

type Props = {
  children: ReactNode;
};
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>("dark");
  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((currentTheme) =>
          currentTheme === "light" ? "dark" : "light",
        ),
    }),
    [theme],
  );
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
// hook de dung theme
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme phai duoc dung trong ThemeProvider");
  }
  return context;
}
