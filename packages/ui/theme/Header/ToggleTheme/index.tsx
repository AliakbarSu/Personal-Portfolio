import React, { useContext } from 'react';
import { ThemeContext, Themes } from '../../../providers/ThemeProvider';

import { Wrapper } from './styles';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const onThemeChange = () => {
    toggleTheme();
    console.log("theme", theme)
  }

  return (
    <Wrapper type="button" onClick={onThemeChange}>
      <img src={theme === Themes.light ? '/assets/icons/moon.svg' : '/assets/icons/sun.svg'} alt={theme} />
    </Wrapper>
  );
};

export default ToggleTheme;
