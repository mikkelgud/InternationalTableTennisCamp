import React from 'react';
import styled from 'styled-components';
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import { StyledText } from '../../styleguides/StyledText';
import StyledTextBoxDiv from '../../styleguides/StyledTextBoxDiv';
import HildingPlaying from '../../Assets/HildingPlaying.jpg';
import { StyledH3 } from '../../styleguides/Styledh3';
import { ScrollTop } from '../../utils/ScrollToTopp';



const HWrapper = styled.div`
display: flex;
align-itmes: flex-start;
justify-content: flex-start;
margin-left: 0rem;

@media (max-width: 520px){
  margin-left: 0;
}
`;

const StyledImageLocal = styled.img`
display: flex;
width: 50%;
object-fit: contain;
border-radius: 10px;
@media (max-width: 1000px){
  width: 80%;
}
@media (max-width: 600px){
  width: 100%;
}
@media (max-width: 348px){
  width: 105%;
}
`;



export default function Hilding() {
  ScrollTop();
  return (
 <StyledTextBoxDiv>
      <StyledTextSectionHeader>
      <HWrapper> Hilding Persson 21</HWrapper>
    
     <StyledImageLocal src={HildingPlaying}/>
       
      </StyledTextSectionHeader>
      <br/>
     
      <StyledText>
    Hilding's from Norway, and has been playing table tennis for 9 years.
    He's still one of the most active players from Norway.
    He studied in NTG-bærum, which is the top rated sport gymnasium in Norway.
    After that, Hilding went to Sweden, and lived in Eslöv for two years for profesional table tennis practice only.
    There he built up great expiriences both in table tennis and life. 
     He has played 3 matches in Pingisligaen ( top divisjon in Sweden ) for Eslöv,
    and he also played Elit divition in Norway for Heros BTK last year. 
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