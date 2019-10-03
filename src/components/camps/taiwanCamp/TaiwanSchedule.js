import React from 'react';
import { StyledText } from '../../../styleguides/StyledText';
import StyledDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import { ScrollTop } from '../../../utils/ScrollToTopp';
import { StyledSTextSectionHeader } from '../../../styleguides/StyledSemiTextSectionHeader';


export default function TaiwanSchedule() {
    ScrollTop();
    return (
        <StyledDiv>
            <StyledTextSectionHeader>
                Schedule 
            </StyledTextSectionHeader>
            <StyledSTextSectionHeader>
                More information will come soon
            </StyledSTextSectionHeader>
            <StyledText>
                Good morning wake up, eat, practice, eat, sleep, practice, eat, sleep and repeat.
            </StyledText>
        </StyledDiv>
    )
}