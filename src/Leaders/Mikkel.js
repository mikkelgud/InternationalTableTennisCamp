import React from 'react';
import styled from "styled-components";
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import { StyledText } from '../styleguides/StyledText';
import StyledTextBoxDiv from '../styleguides/StyledTextBoxDiv';
import Mikkel from '../Assets/Mikkel.jpg';
import { StyledH3 } from '../styleguides/Styledh3';
import { StyledATagLink } from '../styleguides/StyledATagLink';
import {ScrollTop}  from '../utils/ScrollToTopp';

const StyledImageLocal = styled.img`
display: flex;
width: 70%;
 object-fit: contain;
border-radius: 10px;
@media(max-width: 800px){

}
@media(max-width: 1800px){
  width: 60%;
}
`;

const HWrapper = styled.div`
display: flex;
align-itmes: flex-start;
justify-content: flex-start;
margin-left: 2rem;
`;


export default function MikkelGudmundsen() {
  ScrollTop();
  return (
    <StyledTextBoxDiv>
      <StyledTextSectionHeader>
        <HWrapper> Mikkel Gudmundsen 21</HWrapper>
          <StyledImageLocal src={Mikkel} />
      </StyledTextSectionHeader>
      <StyledText>
        Mikkel is a Norwegian tabel tennis player and coach.
        Today he playes for Harestua, where the first camp will be arranged.
        He Workes as coach in Fornebu BTK, Studies computer engeneering in Oslo and Practise table tennis every day.
        He's currently in the Senior national team training group in Norway, and he is still trying to reach new goals himself.
   He has been playing in the top elite divition of Norway for B-72 and Oslo BTK the last 3 years, but will this year play 1.Diviton with he's first club, Harestua.<br /><br />
      </StyledText>
      <StyledText>
        Mikkel has played table tennis since he was 11 and has experienced playing for the norwegian junior-national team in Youth European Championships in Zagreb 2016.
        He went to NTG highschool (The top school for sports in Norway).
        He kept on with he's carrier after highschool, and moved to China to learn from the best.
        Therefore he also speaks Chinese which will come in handy when traveling to China.
    <br />
        <br />
      </StyledText>
      <StyledH3>Responsibilities</StyledH3>
      <StyledText>
        <ul>
          <li>Coach</li>
          <li>prevent problems occurring during the camp</li>
          <li>Thechnical responsible</li>
        </ul>
        <br />
        And BTW; He made this webPage, and would like to here if there is any improvements that will make this page bette,
        <StyledATagLink href="mailto: contactus@ittcamp.com"> if so: Click me!</StyledATagLink>
      </StyledText>
    </StyledTextBoxDiv>
  )
}







