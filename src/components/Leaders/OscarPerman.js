import React from 'react';
import styled from "styled-components";
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import { StyledText } from '../../styleguides/StyledText';
import StyledTextBoxDiv from '../../styleguides/StyledTextBoxDiv';
import {ScrollTop}  from '../../utils/ScrollToTopp';
import OscarPermanPicture from '../../Assets/OscarPermanPicture.jpeg';

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
        <HWrapper>Oscar Perman</HWrapper>
          <StyledImageLocal src={OscarPermanPicture} />
      </StyledTextSectionHeader>
      <br/>
      <StyledText>
          Oscar is headcoach in B-75 on daily basis. He is a young hard working coach, 
          and has been a great player aswell. He has been traveling all around the world playing table tennis. 
          Therefore he has astablished a lot of experience both in table tennis and with cultures.
          <br/><br/>
          More information about Oscar will come soon.
      </StyledText>
    </StyledTextBoxDiv>
  )
}







