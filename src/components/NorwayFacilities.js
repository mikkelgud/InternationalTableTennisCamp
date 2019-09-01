import React from 'react';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import { StyledSTextSectionHeader } from '../styleguides/StyledSemiTextSectionHeader';
import StyledTextBoxDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from '../styleguides/StyledText';
import {StyledATagLink} from '../styleguides/StyledATagLink';

export default function NorwayTravel() {
    return (
        <StyledTextBoxDiv>
            <StyledTextSectionHeader>Welcome to Camp Norway in Harestua</StyledTextSectionHeader>
            <StyledText> 
                We will stay, practice, sleep and eat inside the Harestua Arena. 
                <StyledATagLink target="blank" href="https://www.google.com/maps/dir//Harestua+Arena,+Elvefaret+22,+2743+Harestua/@60.2091828,10.713969,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x46419f7b25edc42b:0xecdfa6f6adc8441d!2m2!1d10.7161577!2d60.2091828">(Get destination)</StyledATagLink>
            </StyledText>
        <br/>
            <StyledSTextSectionHeader>Harestua facility pictures  </StyledSTextSectionHeader>

            <StyledATagLink href="mailto: contactus@ittcamp.com"> 
             If you have any trouble with your travel to Harestua, don´t hessitate asking us for help at contactus@ittcamp.com, by clicking here.
             </StyledATagLink> 
        </StyledTextBoxDiv>
    )
}