import React from 'react';
import styled from "styled-components";
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import { StyledText } from '../../styleguides/StyledText';
import StyledTextBoxDiv from '../../styleguides/StyledTextBoxDiv';
import Mikkel from '../../Assets/Mikkel.jpg';
import { StyledH3 } from '../../styleguides/Styledh3';
import { StyledATagLink } from '../../styleguides/StyledATagLink';
import {ScrollTop}  from '../../utils/ScrollToTopp';

const StyledImageLocal = styled.img`
display: flex;
width: 50%;
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
        <HWrapper> Mikkel Gudmundsen 21</HWrapper>
          <StyledImageLocal src={Mikkel} />
      </StyledTextSectionHeader>
      <br/>
      <StyledText>
        Mikkel is a Norwegian table tennis player and coach.
        Today he playes for Harestua, where the first camp will be arranged.
        He Works as a coach in Fornebu BTK, Studies computer engeneering in Oslo and works for ITTC.
        He also coach the cadet national team in gatherings and do other coach missons for the norwegian table tennis federation.
        He's currently in the Senior national team training group in Norway, and he is still trying to reach new goals in table tennis himself.
   He has been playing in the top elite divition of Norway for B-72 and Oslo BTK the last 3 years, but will this year play 1.Diviton with he's first club, Harestua.<br /><br />
      </StyledText>
      <StyledText>
        Mikkel has been playing table tennis since he was 11, and has experienced playing for the norwegian junior-national team in Youth European Championships in Zagreb 2016.
        Then he went to NTG highschool (The top school for sports in Norway) trying to make a career in table tennis.
        He kept on with he's career after highschool and moved to China to learn from the best for one year at Beijing Sport University.
        Therefore he also speaks Chinese which will come in handy when traveling to China and Taiwan.
    <br />
        <br />
      </StyledText>
      <StyledH3>Responsibilities</StyledH3>
      <StyledText>
        <ul>
          <li>Coach</li>
          <li>Plan the camp</li>
          <li>Thechnical responsible</li>
        </ul>
        <br />
        And BTW: He made this webPage and he would like to hear if there is any improvements that would make this page a better user experience.
        <StyledATagLink href="mailto: mikkel_gudmundsen@hotmail.com"> if so: Click me!</StyledATagLink>
      </StyledText>
    </StyledTextBoxDiv>
  )
}







