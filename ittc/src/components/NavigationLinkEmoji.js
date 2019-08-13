import React from 'react';
import styled from 'styled-components';
import { StyledLink } from "../styleguides/StyledLink";
import { withRouter } from "react-router-dom";


const EmojiTextStyleHover = styled.p`
  transition: all 0.1s ease-in-out;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  &:hover {
    font-size: 1.8rem;
  }
`;

const NavigationsLinkEmoji = props => {
  return(   
      <StyledLink onClick={props.clicked} to={props.to}>
  <EmojiTextStyleHover>{props.emoji}</EmojiTextStyleHover>
        </StyledLink>
  )}
  
export default withRouter(NavigationsLinkEmoji);

