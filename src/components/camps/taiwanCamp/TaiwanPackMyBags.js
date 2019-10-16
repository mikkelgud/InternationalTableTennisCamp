import React from 'react';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import StyledDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../../styleguides/StyledText';
import { StyledATagLink } from '../../../styleguides/StyledATagLink';
import { StyledH3 } from '../../../styleguides/Styledh3';
import { ScrollTop } from '../../../utils/ScrollToTopp';

export default function Pack() {
    ScrollTop();
    return (
        <StyledDiv>
            <StyledTextSectionHeader>Packing list</StyledTextSectionHeader>
            <StyledText>
            Try to pack your bags according to the weather. We will spend some time outside the facilities...
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
                <li>For shopping you can bring your card. It's cheaper to take out money inside Taiwan (currency: 1 Taiwan dollars = 0.3 Norwegian Krones)</li>
                </ul>
                <br/>
        </StyledText>
           
        <StyledATagLink href="mailto: contactus@ittcamp.com">If you have any questions, don't hesitate to contact us at contactus@ittcamp.com.</StyledATagLink> 
            <br/>
            <br/>
        </StyledDiv>
        )
}