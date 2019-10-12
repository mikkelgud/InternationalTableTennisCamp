import React from 'react';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import StyledTextBoxDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../../styleguides/StyledText';
import {StyledATagLink} from '../../../styleguides/StyledATagLink';
import { ScrollTop } from '../../../utils/ScrollToTopp';

export default function TaiwanTravel() {
    ScrollTop();
    return (
        <StyledTextBoxDiv>
            <StyledTextSectionHeader>Welcome to Camp Taiwan in Tao Yuan</StyledTextSectionHeader>
            <StyledText>
                Just get on the plane and you will be fine :)
            </StyledText>
              <br/> 
            <StyledATagLink 
            href="mailto: contactus@ittcamp.com"> 
            If you have any questions according to the Taiwan traveling process 
            , don´t hesitate to contact us at contactus@ittcamp.com.
             </StyledATagLink> 
        </StyledTextBoxDiv>
    )
}