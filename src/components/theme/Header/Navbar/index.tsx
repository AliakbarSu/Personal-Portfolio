import React, { ReactElement, useContext } from 'react';
import { ThemeContext } from '@providers/ThemeProvider';
import { Container } from '@components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';
import Link from 'next/link';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand as={Link as unknown as ReactElement} href="/" theme={theme}>
        Ali Sultani
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
