import React from 'react';
import styled from 'styled-components';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import { StyledText } from '../styleguides/StyledText';
import StyledTextBoxDiv from '../styleguides/StyledTextBoxDiv';
import { StyledImage } from '../styleguides/StyledImage';
import Mikkel from '../Assets/MikkelProfile.jpg';
import MikkelGuitar from '../Assets/MikkelPlayingGuitar.jpg';

const ImageWrapper = styled.div`
display: flex;
margin: 1rem;
width: 70%;
`;

const mikkelText = "Mikkel er 21 år og er til daglig trener i Fornebu BTK og Harestua IL, samtidig jobber han som trener under samlinger for region øst. Han har bodd i kina og studert bordtennis og kinesisk på Kina sitt beste sportsuniversitet; Beijing Sport University. Han snakker derfor mandarin og forstår seg godt på kulturen i kina. Mikkel har tidligere spilt på landslaget i Norge, og har deltat på store mesterskap som foreksempel U-EM.";

export default function MikkelGudmundsen() {
  return (
    <StyledTextBoxDiv>
      <StyledTextSectionHeader>
        Mikkel Gudmundsen
        <div>
        <ImageWrapper>
          <StyledImage src={Mikkel} />
          <StyledImage src={MikkelGuitar} />
          <StyledImage src={Mikkel} />
          <StyledImage src={MikkelGuitar} />
        </ImageWrapper>
        </div>
      </StyledTextSectionHeader>
      <StyledText> {mikkelText}</StyledText>
    </StyledTextBoxDiv>
  )
}







