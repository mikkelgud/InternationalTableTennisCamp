import React from 'react';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import { StyledSTextSectionHeader } from '../styleguides/StyledSemiTextSectionHeader';
import StyledTextBoxDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from '../styleguides/StyledText';
import { StyledH3 } from '../styleguides/Styledh3';
import {StyledATagLink} from '../styleguides/StyledATagLink';

export default function NorwayTravel() {
    return (
        <StyledTextBoxDiv>
            <StyledTextSectionHeader>Welcome to Camp Norway in Harestua</StyledTextSectionHeader>
            <StyledText> 
                We choose to target scandinavian players for this camp.
                Therefore we will only arrange pickups at the Harestua train station. 
                If the participant can't travel alone, we will arrange somone to meet you at the airport,
                and help out with the practical thing, and travel with the traveler from Gardemoen to Harestua.
            </StyledText>
            <br/>
            <StyledSTextSectionHeader>Our travel recomendations </StyledSTextSectionHeader>
            <br/>
            <StyledText> 
             <StyledH3>If you live close to Oslo:</StyledH3>
              <ol>
              <li>Go to Oslo central station.</li>
              <li>Take train R30X, R30 or L3 to Harestua train station</li>
              <li>ITTC will come and pick you up</li>
              </ol>
              <br/>
              <StyledH3> If you live further away from Oslo:</StyledH3>
              <ol>
              <li>Take flight from your closest airport to Gardemoen.</li>
              <li>Take the speed-train to Oslo Central Station (Oslo S / Jernbanetorget)</li>
              <li>Take train R30X, R30 or L3 to Harestua train station</li>
              <li>ITTC will pick you up</li>
              </ol>
              <br/> 
            <StyledATagLink href="mailto: contactus@ittcamp.com"> 
             If you have any trouble with your travel to Harestua, don´t hessitate asking us for help at q&r@ittcamp.com, by clicking here.

             </StyledATagLink> 
            </StyledText>
        </StyledTextBoxDiv>
    )
}