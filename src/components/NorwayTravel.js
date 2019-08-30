import React from 'react';
import { StyledTextSectionHeader } from '../styleguides/StyledTextSectionHeader';
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
                We choose to only have scandinavian players for this camp.
                Therefore we will only arrange pickups at the airport and the train station.
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
              <li>ITTC come and follow you to the final destionation.</li>
              </ol>
              <br/> 
            <StyledATagLink href="mailto: Q&R@ittcamp.com"> 
             If you have any trouble with your travel to Harestua, don´t hessitate asking us anything at q&r@ittcamp.com, by clicking here.
             </StyledATagLink> 
            </StyledText>
        </StyledTextBoxDiv>
    )
}