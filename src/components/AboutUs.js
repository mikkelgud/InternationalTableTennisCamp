import React from "react";
import styled from 'styled-components';
import StyledDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from "../styleguides/StyledText";
import { StyledTextSectionHeader } from "../styleguides/StyledSectionHeader";
import Logo from '../Assets/Bordtennislogo.png';
import { Trans } from 'react-i18next';
import { StyledH3 } from "../styleguides/Styledh3";

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
@media (min-width: 1050px){

}
@media (max-width: 706px){

}
`;

const StyledImageLogo = styled.img`
width: 30px;
margin: 2rem 2rem 0 0 ;
`; 


export default function AboutUs() {
  return (
    <Wrapper>
      <StyledDiv>
      <Trans ><StyledTextSectionHeader>Welcome to ITTC<StyledImageLogo src={Logo} /> </StyledTextSectionHeader></Trans>
        <br/>
        <StyledH3>who are we?</StyledH3>
        <StyledText>
           
          
          
     </StyledText>
 <br/>
        <StyledText>
</StyledText>
        <StyledText>

</StyledText>
      </StyledDiv>
    </Wrapper>
  );
}
