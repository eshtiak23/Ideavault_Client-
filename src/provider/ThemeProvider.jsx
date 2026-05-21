import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  // Initialize state directly from localStorage so it matches on the very first render
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("idea-theme") === "dark";
  });

  // A single effect handles syncing the state to the browser/DOM
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("idea-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("idea-theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}