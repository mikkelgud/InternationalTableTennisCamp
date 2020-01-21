import React from 'react';
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import { StyledText } from '../../styleguides/StyledText';
import StyledTextBoxDiv from '../../styleguides/StyledTextBoxDiv';
import { StyledH3 } from '../../styleguides/Styledh3';
import {ScrollTop}  from '../../utils/ScrollToTopp';
import EskilPicture1 from '../../Assets/EskilPingis.jpg';
import {StyledImageForLeaders} from '../../styleguides/StyledImageForLeaders';
import { InfoBox } from '../../styleguides/StyledInfoBox';



export default function MikkelGudmundsen() {
  ScrollTop();
  return (
    <StyledTextBoxDiv>
      <StyledTextSectionHeader>
      Eskil Lindholm
      </StyledTextSectionHeader>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <StyledImageForLeaders src={EskilPicture1}/>    
      </div>
      <StyledText>
   Eskil Lindholm is an active coach and player for Fornebu BTK. 
   He is currently ranked number 5 on the senior ranking in Norway,
    and play for the Norwegian national team.
    We are gratefull to have you on our team,
    and we are sure that his level of knowledge about table tennis,
     and his experience as a coach will be a key factor contributer to the succsess of ITTC-Norway.
      </StyledText>
      <InfoBox>
      <StyledH3>Accomplishments </StyledH3>
            <StyledText>
                <ul>
                <li>In 2018 he became Norwegian champion in mens singles.</li>
                <li>He has won over 20 gold medals in Norwegian championships </li>
                    <li>Maintain a high level, and has beaten top 100 players like Zhai Yu Jia (top ranked 87.world). </li>
                    <li>He currently play for the Norwegian national team.</li>
                </ul>
            </StyledText>
            </InfoBox>
            <InfoBox>
      <StyledH3>Responsibilities</StyledH3>
      <StyledText>
        <ul>
          <li>Coach during ITTCamp Norway.</li>
        </ul>
      </StyledText>
      </InfoBox>
    </StyledTextBoxDiv>
  )
}







