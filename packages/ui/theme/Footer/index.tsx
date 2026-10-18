import React from 'react';
import { Container } from '../../common/index';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Ali Sultani</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img">
            💖
          </span>{' '}
          by{' '}
          <a href="https://alisultani.com/?ref=portfolio" rel="noopener noreferrer" target="_blank">
            Ali
          </a>
        </span>
        <div>
          <span>Check out </span>
          <a href="https://au.clinicalvitals.online" rel="noopener noreferrer" target="_blank">
            ClinicalVitals
          </a>
        </div>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);
