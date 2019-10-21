import React from 'react';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import { StyledSTextSectionHeader } from '../../../styleguides/StyledSemiTextSectionHeader';
import StyledTextBoxDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../../styleguides/StyledText';
import { StyledH3 } from '../../../styleguides/Styledh3';
import {StyledATagLink} from '../../../styleguides/StyledATagLink';
import { ScrollTop } from '../../../utils/ScrollToTopp';

export default function NorwayTravel() {
    ScrollTop();
    return (
        <StyledTextBoxDiv>
            <StyledTextSectionHeader>Welcome to Camp Norway in Harestua</StyledTextSectionHeader>
            <StyledText> 
                We hope to see as many nationalities as possible on our camp.
                We will arrange pickups at the Harestua train station to begin with, but if people come in groups from other countries, we will arrange pick ups at the airport. 
                If a participant under 16 is traveling alone, we will arrange someone to meet you at the airport,
                and follow you to Harestua (The train tickets will not be covered by ITTC).
                Wanna drive to Harestua? 
                <StyledATagLink target="blank" href="https://www.google.com/maps/dir//Harestua+Arena,+Elvefaret+22,+2743+Harestua/@60.2091828,10.713969,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x46419f7b25edc42b:0xecdfa6f6adc8441d!2m2!1d10.7161577!2d60.2091828">(Get destination)</StyledATagLink>
            </StyledText>
            <br/>
            <StyledText>
                If you're traveling from Denmark, kastrup, 
                Oscar Perman will meet you at the airport and help you to the gate. <br/><br/>
            </StyledText>
            <StyledSTextSectionHeader>Our travel recomendations </StyledSTextSectionHeader>
            <br/>
            <StyledText> 
             <StyledH3>If you live close to Oslo:</StyledH3>
              <ol>
              <li>Get to Oslo central station.</li>
              <li>Take train R30X, R30 or L3 to Harestua train station</li>
              <li>ITTC will come and pick you up</li>
              </ol>
              <br/>
              <StyledH3> If you live further away from Oslo:</StyledH3>
              <ol>
              <li>Take the flight from your closest airport to Gardemoen.</li>
              <li>Take the speed-train to Oslo Central Station (Oslo S / Jernbanetorget)</li>
              <li>Take train R30X, R30 or L3 to Harestua train station</li>
              <li>ITTC will pick you up</li>
              </ol>
              <br/> 
              <StyledH3>Drive to Harestua: </StyledH3>
              <ol>
              <li>
                <StyledATagLink target="blank" href="https://www.google.com/maps/dir//Harestua+Arena,+Elvefaret+22,+2743+Harestua/@60.2091828,10.713969,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x46419f7b25edc42b:0xecdfa6f6adc8441d!2m2!1d10.7161577!2d60.2091828">(Get destination)</StyledATagLink>
              </li>
              <li>Start the car and follow the instructions from your device.</li>
              </ol>
              <br/>
            <StyledATagLink href="mailto: contactus@ittcamp.com"> If you have any trouble with your travel to Harestua, don´t hesitate to contact us at contactus@ittcamp.com. </StyledATagLink> 
            </StyledText>
        </StyledTextBoxDiv>
    )
}