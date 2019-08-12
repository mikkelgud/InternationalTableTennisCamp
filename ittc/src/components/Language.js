import React from 'react';
import { StyledDiv } from "../styleguides/StyledNavDiv";
import { StyledLink } from "../styleguides/StyledLink";
import { withRouter } from "react-router-dom";

const norwegianFlag = "🇳🇴";
const englishFlag = "🇬🇧";
const Language = props => {
  return( 
      <>
      <StyledDiv>
      🇳<StyledLink>{norwegianFlag}</StyledLink>
      </StyledDiv>
      <StyledDiv>
      <StyledLink>{englishFlag}</StyledLink>
      </StyledDiv>
      </>
   )}
export default Language;


