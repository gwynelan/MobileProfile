// ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(); // Create the context

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode); // Toggle dark mode
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
