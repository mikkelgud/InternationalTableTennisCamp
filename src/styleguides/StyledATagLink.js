import styled from 'styled-components';

export const StyledATagLink = styled.a`
text-decoration: none;
  color:  #283ca6;
  cursor: pointer;
  &:hover{
    color: black;
text-decoration: underline;
  }

  @media(max-width: 800px){
    text-decoration: underline;
  }
`