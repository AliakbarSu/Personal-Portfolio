import styled from 'styled-components'

// export const Button = styled.button`
//   cursor: pointer;
//   border-radius: 3px;
//   padding: 0.7rem 2.5rem;
//   border: none;
//   -webkit-appearance: none;
//   -webkit-touch-callout: none;
//   -webkit-user-select: none;
//   -khtml-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
//   color: #fff;
//   background: #0074d9;

//   &:focus {
//     outline: none;
//   }

//   &:disabled {
//     background: gray;
//   }

//   ${({ secondary }) =>
//     secondary &&
//     `
// 		background: #001F3F;
// 	`}
// `;

export const AuthorAvatar = styled.img`
  border: 1px solid grey;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  border: 2px solid white;
`

export const AuthorName = styled.p`
  padding: 0 5px;
  padding-left: 12px;
`

export const AuthorContainer = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: sapce-between;
  align-items: center;
`
