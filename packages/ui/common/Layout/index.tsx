import React, { ReactComponentElement, ReactElement, useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import { Footer } from '../../theme/Footer';
import { Global } from './styles';

export const Layout = ({ children }: { children: ReactElement[] | ReactElement }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Global theme={theme} />
      {children}
      <Footer />
    </>
  );
};
