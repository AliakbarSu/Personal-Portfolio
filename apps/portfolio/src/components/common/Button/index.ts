import { ReactElement } from 'react';
import styled, { StyledComponentProps, ThemeProps } from 'styled-components';
import { JsxElement } from 'typescript';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #0074d9;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ theme: {secondary} }: ThemeProps<{secondary: boolean}>) =>
    secondary &&
    `
		background: #001F3F;
	`}
`
