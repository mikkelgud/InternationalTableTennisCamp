import React from 'react';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import { StyledSTextSectionHeader } from '../../../styleguides/StyledSemiTextSectionHeader';
import StyledTextBoxDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../../styleguides/StyledText';
import { StyledH3 } from '../../../styleguides/Styledh3';
import {StyledATagLink} from '../../../styleguides/StyledATagLink';
import { ScrollTop } from '../../../utils/ScrollToTopp';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledList } from '../../../styleguides/StyledList';
import { StyledListUnit } from '../../../styleguides/StyledListUnit';
import { InfoBox } from '../../../styleguides/StyledInfoBox';

export default function NorwayTravel() {
    ScrollTop();
    return (
        <StyledTextBoxDiv>
            <StyledTextSectionHeader style={{textAlign: "center"}}>Welcome to Camp Norway in Harestua</StyledTextSectionHeader>
           <StyledText style={{textAlign: "center"}}>
            <StyledATagLink target="blank" href="https://www.google.com/maps/dir//Harestua+Arena,+Elvefaret+22,+2743+Harestua/@60.2091828,10.713969,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x46419f7b25edc42b:0xecdfa6f6adc8441d!2m2!1d10.7161577!2d60.2091828">
                    Get destination <FontAwesomeIcon icon="route"/>
                    </StyledATagLink>
                    </StyledText>
            <StyledText> 
                We hope to see as many nationalities as possible at our camp.
                We will arrange pickups at the Harestua train station to begin with, but if people come in larger groups from other countries, we will arrange pick ups at the airport. 
                If a participant under 16 is travelling alone, we will arrange for someone to meet you at the airport
                and accompany you to Harestua (The train tickets will not be covered by ITTC).
                If you're travelling from Denmark, Kastrup, 
                Oscar Perman will meet you at the airport and help you to the gate.
                </StyledText>
            <StyledSTextSectionHeader>Our travel recommendations </StyledSTextSectionHeader>
            <InfoBox>
            <StyledH3>Drive to Harestua: </StyledH3>
              <StyledList>
              <StyledListUnit style={{listStyleType: "upper-roman"}}>
              <StyledATagLink target="blank" href="https://www.google.com/maps/dir//Harestua+Arena,+Elvefaret+22,+2743+Harestua/@60.2091828,10.713969,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x46419f7b25edc42b:0xecdfa6f6adc8441d!2m2!1d10.7161577!2d60.2091828">
                    Get destination <FontAwesomeIcon icon="route"/>
                    </StyledATagLink>
              </StyledListUnit>
              <StyledListUnit style={{listStyleType: "upper-roman"}}>Start the car and follow the instructions from your device.</StyledListUnit>
              </StyledList>
              </InfoBox><InfoBox>
             <StyledH3>Collectively from Oslo:</StyledH3>
              <StyledList >
              <StyledListUnit style={{listStyleType: "upper-roman"}}>Get to Oslo central station.</StyledListUnit>
              <StyledListUnit style={{listStyleType: "upper-roman"}}>Take train R30X, R30 or L3 to Harestua train station</StyledListUnit>
              <StyledListUnit style={{listStyleType: "upper-roman"}}>ITTC will come and pick you up</StyledListUnit>
              </StyledList>
              </InfoBox><InfoBox>
              <StyledH3> Collectively far away from Oslo:</StyledH3>
              <StyledList>
              <StyledListUnit style={{listStyleType: "upper-roman"}}>Take the flight from your closest airport to Gardemoen.</StyledListUnit>
              <StyledListUnit style={{listStyleType: "upper-roman"}}>Take the speed-train to Oslo Central Station (Oslo S / Jernbanetorget)</StyledListUnit>
              <StyledListUnit style={{listStyleType: "upper-roman"}}>Take train R30X, R30 or L3 to Harestua train station</StyledListUnit>
              <StyledListUnit style={{listStyleType: "upper-roman"}}>ITTC will pick you up</StyledListUnit>
              </StyledList>
            </InfoBox>
            <StyledText>
            <StyledATagLink href="mailto: contactus@ittcamp.com"> If you have any trouble with your travel to Harestua, don´t hesitate to contact us at contactus@ittcamp.com. </StyledATagLink> 
            </StyledText>
        </StyledTextBoxDiv>
    )
}