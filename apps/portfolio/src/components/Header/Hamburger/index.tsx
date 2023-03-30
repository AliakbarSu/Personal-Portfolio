import React, {ReactElement, useContext} from 'react';
import { ThemeContext } from 'ui/providers/ThemeProvider';
import { Wrapper, Bar } from './styles';

const Hamburger = ({ sidebar, toggle }: {sidebar: boolean, toggle: (value: boolean) => void}) => {

  const { theme } = useContext(ThemeContext);
  
  return (
    <Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
      <Bar top sidebar={sidebar} theme={theme}/>
      <Bar mid sidebar={sidebar} theme={theme} />
      <Bar bottom sidebar={sidebar} theme={theme} />
    </Wrapper>
  )
};

export default Hamburger;
