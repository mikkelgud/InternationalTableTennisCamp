import React from 'react';
import styled from 'styled-components';
import { StyledLink } from "../styleguides/StyledLink";
import { withRouter } from "react-router-dom";

const MenuItem = styled.li`
  padding: 0.5rem 0.7rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  background: #ffffff;  
`;

const NavigationsLinkForMenu = props => {
  return(  
  <StyledLink to={props.to}>
        <MenuItem>{props.category}</MenuItem>
    </StyledLink>
  )}

export default withRouter(NavigationsLinkForMenu);


