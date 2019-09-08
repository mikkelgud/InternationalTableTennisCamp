import React from 'react';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import StyledDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from '../styleguides/StyledText';
import { StyledATagLink } from '../styleguides/StyledATagLink';
import { StyledH3 } from '../styleguides/Styledh3';
import { ScrollTop } from '../utils/ScrollToTopp';

export default function Pack() {
    ScrollTop();
    return (
        <StyledDiv>
            <StyledTextSectionHeader>Packing list</StyledTextSectionHeader>
            <StyledText>
            Try to pack your bags according to the weather. We will spend some time outside...
            We do NOT offer bed, duvet, pillow or bed sheets.
            <br/>
            <br/>
            </StyledText>
        <StyledText>
            <StyledH3>Remember:</StyledH3>
                <ul>
                <li>Racket and other table tennis equipment(Water bottle, towel..etc)</li>
                <li>Clothes for 6 days (for table tennis, outside sport and sparetime)</li>
                <li>Shoes (for table tennis, jogging and sparetime)</li>
                <li>Camera (if you want for video analyse)</li>
                <li>Normal clothes for outdoor activities</li>
                <li>Sleeping mattress, duvet and pillow</li>
                <li>
                    We will have a small shop to buy snacks at the camp. 
                    And there is a supermarket very close. So smart to bring some pocket money for the trip
                </li>
                </ul>
                <br/>
        </StyledText>
           
        <StyledATagLink href="mailto: contactus@ittcamp.com">If you have any questions, don't hesitate to contact us at contactus@ittcamp.com.</StyledATagLink> 
            <br/>
            <br/>
        </StyledDiv>
        )
}