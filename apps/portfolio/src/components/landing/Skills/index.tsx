import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'ui/providers/ThemeProvider';
import { Container, Button } from '@/components/common';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src="/assets/illustrations/skills.svg" alt="I’m Ali and I’m a Full Stack developer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            I'm a self-taught web developer whose passion is to build new things everyday. Beside my huge passion for
            web development i'm also in love with electronics.
          </p>
          {/* <Button as={AnchorLink} href="#contact"> */}
          <Button>
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
