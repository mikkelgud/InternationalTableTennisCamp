import React from 'react';
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import { StyledText } from '../../styleguides/StyledText';
import StyledTextBoxDiv from '../../styleguides/StyledTextBoxDiv';
import {ScrollTop}  from '../../utils/ScrollToTopp';
import OscarPermanPicture from '../../Assets/OscarPermanPicture.jpeg';
import { InfoBox } from '../../styleguides/StyledInfoBox';
import { StyledH3 } from '../../styleguides/Styledh3';
import { StyledImageForLeaders } from '../../styleguides/StyledImageForLeaders';


export default function Oscar() {
  ScrollTop();
  return (
    <StyledTextBoxDiv>
      <StyledTextSectionHeader>
       Oscar Perman
       </StyledTextSectionHeader>
       <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <StyledImageForLeaders src={OscarPermanPicture}  />
        </div>
      <StyledText>
          Oscar is headcoach in B-75 on daily basis. He is a young hard working coach, 
          and has been a great player aswell. He has been traveling all around the world playing table tennis. 
          Therefore he has astablished a lot of experience both in table tennis and with cultures.
          More information about Oscar will come soon.
      </StyledText>

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







