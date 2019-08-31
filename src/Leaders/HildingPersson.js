import React from 'react';
import styled from 'styled-components';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import { StyledText } from '../styleguides/StyledText';
import StyledTextBoxDiv from '../styleguides/StyledTextBoxDiv';
import HildingROR from '../Assets/HildingROR.jpg';
import HildingPlaying from '../Assets/HildingPlaying.jpg';
import StyledCricleDiv from '../styleguides/StyledCirkledDiv';
import { Wrapper } from '../styleguides/StyledTextBoxWrapper';
import { StyledH3 } from '../styleguides/Styledh3';


const HWrapper = styled.div`
display: flex;
align-itmes: flex-start;
justify-content: flex-start;
margin-left: 4rem;
`;



export default function Hilding() {
  return (
    <StyledTextBoxDiv>
    
      <StyledTextSectionHeader>
      <HWrapper>  Hilding Persson 21</HWrapper>
     <Wrapper>
     <StyledCricleDiv background={HildingROR}/>
     <StyledCricleDiv background={HildingPlaying}/>
        </Wrapper>
      </StyledTextSectionHeader>
      <StyledText>
    Hilding is from Norway, and has been playing table tennis for a long time,
    and is one of the most active players from Norway.
    He have went to NTG-bærum, which is the top sport gymnasium in Norway.
     Hilding has lived in Sweden for two years for table tennis only.
     He then practiced in the swedish top club, Esløv AI.
     He has played 3 matches in Pingisligaen ( top divisjon in Sweden),
      and played Elit divisjon in Norway for Heros BTK last year. 
     He is currently working on the ITTC-project and studying massage in Oslo. 
     <br/><br/>
        </StyledText>
        <StyledText>
          He's known for he's hard working spirit and kindness.
          Due to this, he has astablished many great friendships with many profesional players, 
          and know what it takes to reach the top-level of table tennis.
          We are very lucky to have him on our team.  
          <br/><br/>
        </StyledText>
        <StyledH3>Responsibilities</StyledH3>
        <StyledText>       
           <ul>
           <li>The well-being of everyone</li>
           <li>Social activities</li>
           <li>Injuries and massage </li>
        </ul>
        <br/>
        So; If you get any problems during camp, 
        you will find a trusting good friend in Hidling.<br/>
        Remember, you can always ask whatever you want, and we will always take you serious.
        </StyledText>

    </StyledTextBoxDiv>
  )
}