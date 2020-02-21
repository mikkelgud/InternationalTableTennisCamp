import React from 'react';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import StyledDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../../styleguides/StyledText';
import { StyledATagLink } from '../../../styleguides/StyledATagLink';
import { StyledH3 } from '../../../styleguides/Styledh3';
import { ScrollTop } from '../../../utils/ScrollToTopp';
import { StyledList } from '../../../styleguides/StyledList';
import { StyledListUnit } from '../../../styleguides/StyledListUnit';

export default function Pack() {
    ScrollTop();
    return (
        <StyledDiv>
            <StyledTextSectionHeader style={{textAlign: "center"}}>Packing list</StyledTextSectionHeader>
            <StyledText>
            Try to pack your bags according to the weather. We will spend some time outside...
            We do NOT offer bed, duvet, pillow or bed sheets.
            </StyledText>
        <StyledText>
            <StyledH3>Remember:</StyledH3>
                <StyledList>
                <StyledListUnit>Racket and other table tennis equipment(Water bottle, towel..etc)</StyledListUnit>
                <StyledListUnit>Clothes for 4 days (for table tennis, outside sport and free time)</StyledListUnit>
                <StyledListUnit>Shoes (for table tennis, jogging and free time)</StyledListUnit>
                <StyledListUnit>Camera for video analyse (this is totally optional) </StyledListUnit>
                <StyledListUnit>Normal clothes for outdoor activities</StyledListUnit>
                <StyledListUnit>Sleeping mattress, duvet, sheets and pillow</StyledListUnit>
                <StyledListUnit>
                    We will have a small shop to buy snacks at the camp. 
                    There is also a supermarket nearby, so it is smart to bring a little bit of cash.
                </StyledListUnit>
                </StyledList>
        </StyledText>
        <StyledATagLink href="mailto: contactus@ittcamp.com">If you have any questions, don't hesitate to contact us at contactus@ittcamp.com.</StyledATagLink> 
        </StyledDiv>
        )
}