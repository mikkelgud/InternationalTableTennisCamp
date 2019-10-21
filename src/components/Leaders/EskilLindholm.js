import React from 'react';
import styled from "styled-components";
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import { StyledText } from '../../styleguides/StyledText';
import StyledTextBoxDiv from '../../styleguides/StyledTextBoxDiv';
import { StyledH3 } from '../../styleguides/Styledh3';
import {ScrollTop}  from '../../utils/ScrollToTopp';
import EskilPicture from '../../Assets/EskilPicture.jpeg';

const StyledImageLocal = styled.img`
display: flex;
width: 40%;
 object-fit: contain;
border-radius: 10px;
@media (max-width: 1000px){
  width: 70%;
}
@media (max-width: 600px){
  width: 90%;
}
@media (max-width: 348px){
  width: 105%;
}
;`

const HWrapper = styled.div`
display: flex;
align-itmes: flex-start;
justify-content: flex-start;
`;


export default function MikkelGudmundsen() {
  ScrollTop();
  return (
    <StyledTextBoxDiv>
      <StyledTextSectionHeader>
        <HWrapper> Eskil Lindholm 25</HWrapper>
          <StyledImageLocal src={EskilPicture} />
      </StyledTextSectionHeader>
      <br/>
      <StyledText>
   Eskil Lindholm is an active coach and player for Fornebu BTK. 
   He is currently ranked number 5 on the senior ranking in Norway,
    and play for the Norwegian national team.
    We are gratefull to have you on our team,
    and we are sure that his level of knowledge about table tennis,
     and his experience as a coach will be a key factor contributer to the succsess of ITTC-Norway.
   <br /><br />
      </StyledText>
      <StyledH3>Accomplishments </StyledH3>
            <StyledText>
                <ul>
                <li>In 2018 he became Norwegian champion in mens singles.</li>
                <li>He has won over 20 gold medals in Norwegian championships </li>
                    <li>Maintain a high level, and has beaten top 100 players like Zhai Yu Jia (top ranked 87.world). </li>
                    <li>He currently play for the Norwegian national team.</li>
                </ul>
            </StyledText> <br/>
      <StyledH3>Responsibilities</StyledH3>
      <StyledText>
        <ul>
          <li>Coach during ITTCamp Norway.</li>
        </ul>
        <br />
      </StyledText>
    </StyledTextBoxDiv>
  )
}







