import React from 'react';
import { StyledDiv } from "../styleguides/StyledNavDiv";
import { StyledLink } from "../styleguides/StyledLink";
import { withRouter } from "react-router-dom";

const NavigationsLink = props => {
  return (
    <StyledLink to={props.to}>
      <StyledDiv>{props.category}</StyledDiv>
    </StyledLink>
  )
}
export default withRouter(NavigationsLink);


