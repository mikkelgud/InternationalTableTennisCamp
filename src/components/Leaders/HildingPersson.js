import React from 'react';
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import { StyledText } from '../../styleguides/StyledText';
import StyledTextBoxDiv from '../../styleguides/StyledTextBoxDiv';
import HildingPlaying from '../../Assets/HildingPlaying.jpg';
import { StyledH3 } from '../../styleguides/Styledh3';
import { ScrollTop } from '../../utils/ScrollToTopp';
import { StyledImageForLeaders } from '../../styleguides/StyledImageForLeaders';
import { InfoBox } from '../../styleguides/StyledInfoBox';


export default function Hilding() {
  ScrollTop();
  return (
 <StyledTextBoxDiv>
      <StyledTextSectionHeader>
       Hilding Persson 
       </StyledTextSectionHeader>
       <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
     <StyledImageForLeaders src={HildingPlaying}/>
     </div>
      <StyledText>
    Hilding's from Norway, and has been playing table tennis for 11 years.
    He's still one of the most active players from Norway.
    He studied in NTG-bærum, which is the top rated sport gymnasium in Norway.
    After that, Hilding went to Sweden, and lived in Eslöv for two years for profesional table tennis practice only.
    There he built up great expiriences both in table tennis and life. 
     He has played 3 matches in Pingisligaen ( top divisjon in Sweden ) for Eslöv,
    and he also played Elit divition in Norway for Heros BTK last year. 
     He is currently working on the ITTC-project and studying massage in Oslo. 
        </StyledText>
        <StyledText>
          He's known for he's hard working spirit, and kindness.
          Due to this, he has established many great friendships with profesional players, 
          and know what it takes to reach the top-level in table tennis.
          We are very lucky to have him on our team. 
        </StyledText>
        <InfoBox>
        <StyledH3>Responsibilities</StyledH3>
        <StyledText>       
         <ul>
           <li>The well-being of everyone</li>
           <li>Social activities</li>
           <li>Injuries and massage </li>
           <li>Coaching younger players </li>
        </ul>
        </StyledText>
        </InfoBox>
        <StyledText>
        If you get any problems during camp, 
        you will find a trusting good friend in Hilding.
        Remember, you can always ask whatever you want, and ITTC-leaders will take you serious.
        </StyledText>
        </StyledTextBoxDiv>
  )
}