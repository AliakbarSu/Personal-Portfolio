import { useState, useEffect } from 'react';
import useMedia from '@hooks/useMedia';
import { Themes } from '@/providers/ThemeProvider';

export default (): [Themes, () => void] => {
  const [theme, setTheme] = useState(Themes.light);

  const toggleTheme = () => {
    if (theme === Themes.light) {
      window.localStorage.setItem('theme', Themes.dark);
      setTheme(Themes.dark);
    } else {
      window.localStorage.setItem('theme', Themes.light);
      setTheme(Themes.light);
    }
  };

  const prefersDarkMode = useMedia(['(prefers-color-scheme: dark)'], [true], false);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Themes
    if (localTheme) {
      window.localStorage.setItem('theme', localTheme);
      setTheme(localTheme);
    } else if (prefersDarkMode) {
      setTheme(Themes.dark);
    } else {
      setTheme(Themes.light);
    }
  }, [prefersDarkMode]);

  return [theme, toggleTheme];
};
