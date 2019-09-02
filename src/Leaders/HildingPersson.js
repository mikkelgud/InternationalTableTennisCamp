import React from 'react';
import styled from 'styled-components';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import { StyledText } from '../styleguides/StyledText';
import StyledTextBoxDiv from '../styleguides/StyledTextBoxDiv';
import HildingPlaying from '../Assets/HildingPlaying.jpg';
import { Wrapper } from '../styleguides/StyledTextBoxWrapper';
import { StyledH3 } from '../styleguides/Styledh3';
import { ScrollTop } from '../utils/ScrollToTopp';



const HWrapper = styled.div`
display: flex;
align-itmes: flex-start;
justify-content: flex-start;
margin-left: 2rem;

@media (max-width: 520px){
  margin-left: 20px;
}
`;

const StyledImageLocal = styled.img`
display: flex;
width: 60%;
object-fit: contain;
border-radius: 10px;
//  
`;



export default function Hilding() {
  ScrollTop();
  return (
 <StyledTextBoxDiv>
      <StyledTextSectionHeader>
      <HWrapper> Hilding Persson 21</HWrapper>
     <Wrapper>
     <StyledImageLocal src={HildingPlaying}/>
        </Wrapper>
      </StyledTextSectionHeader>
     
      <StyledText>
    Hilding is from Norway, and has been playing table tennis for a long time,
    and is one of the most active players from Norway.
    He studied in NTG-bærum, which is the top sport gymnasium in Norway.
    After that, Hilding went to Sweden, and lived in Eslöv for two years for table tennis practice only.
    There he buidt up great expirience both in table tennis and life. 
     He has played 3 matches in Pingisligaen ( top divisjon in Sweden) for Eslöv,
    and he also played Elit divisjon in Norway for Heros BTK last year. 
     He is currently working on the ITTC-project and studying massage in Oslo. 
     <br/><br/>
        </StyledText>
        <StyledText>
          He's known for he's hard working spirit, and kindness.
          Due to this, he has established many great friendships with profesional players, 
          and know what it takes to reach the top-level in table tennis.
          We are very lucky to have him on our team. 
          <br/><br/>
        </StyledText>
        <StyledH3>Responsibilities</StyledH3>
        <StyledText>       
         <ul>
           <li>The well-being of everyone</li>
           <li>Social activities</li>
           <li>Injuries and massage </li>
           <li>Coaching younger players </li>
        </ul>
        <br/>
        So; If you get any problems during camp, 
        you will find a trusting good friend in Hidling.<br/>
        Remember, you can always ask whatever you want, and ITTC-leaders will always take you serious.
        </StyledText>
        </StyledTextBoxDiv>
  )
}