import React, { useContext } from 'react';
import { ThemeContext } from '@providers/ThemeProvider';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Sidebar = ({ sidebar, toggle }: {sidebar: boolean; toggle: (value: boolean) => void}) => {
  const { theme } = useContext(ThemeContext);
  
  return (
  <Wrapper active={sidebar} onClick={toggle} theme={theme}>
    <NavbarLinks desktop />
  </Wrapper>
  )
};

export default Sidebar;