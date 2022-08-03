/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, createContext, useMemo, useEffect } from 'react';

export const themeContext = createContext<any>(null);

function ThemeContext({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  if (!theme) {
    setTheme((prev) => (prev = 'light'));
    localStorage.setItem('theme', `light`);
  }

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  
  useEffect(() => {
    localStorage.setItem('theme', `${theme}`);
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <div className={`${theme}`}>
      <themeContext.Provider value={value}>{children}</themeContext.Provider>
    </div>
  );
}

export default ThemeContext;
