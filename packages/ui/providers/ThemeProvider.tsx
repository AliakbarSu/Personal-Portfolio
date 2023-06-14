import React, { createContext, ReactElement } from 'react';
import useDarkMode from '../hooks/useDarkMode';

export enum Themes {
  light = 'light',
  dark = 'dark'
}
export const ThemeContext = createContext<{ theme: Themes, toggleTheme: () => void }>({ theme: Themes.light, toggleTheme: () => null });

const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider
