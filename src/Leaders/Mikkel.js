//It looks like there is something wrong, but i can't find any error
import React from 'react';
import { StyledTextSectionHeader } from '../styleguides/StyledtextSectionHeader';
import { StyledText } from '../styleguides/StyledText';
import StyledTextBoxDiv  from '../styleguides/StyledTextBoxDiv';
import { StyledImage } from '../styleguides/StyledImage';
import Mikkel from '../Assets/MikkelPlayingGuitar.jpg';

const mikkelText = "Mikkel er 21 år og er til daglig trener i Fornebu BTK og Harestua IL, samtidig jobber han som trener under samlinger for region øst. Han har bodd i kina og studert bordtennis og kinesisk på Kina sitt beste sportsuniversitet; Beijing Sport University. Han snakker derfor mandarin og forstår seg godt på kulturen i kina. Mikkel har tidligere spilt på landslaget i Norge, og har deltat på store mesterskap som foreksempel U-EM.";

export default function MikkelGudmundsen(){

    return(
  <StyledTextBoxDiv>
  <StyledTextSectionHeader>
      Mikkel Gudmundsen
      <StyledImage src={Mikkel}/>
        </StyledTextSectionHeader>
        <StyledText> {mikkelText}</StyledText>
        </StyledTextBoxDiv>
        )
}







