import React from 'react';
import { StyledText } from '../styleguides/StyledText';
import StyledDiv from '../styleguides/StyledTextBoxDiv';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import { StyledH3 } from '../styleguides/Styledh3';




export default function Schedule(props) {
    return (
        <StyledDiv>
            <StyledTextSectionHeader>
                Schedule
            </StyledTextSectionHeader>
            <StyledH3>Example day</StyledH3>
            <StyledText>
                Samling 07.45<br/>
                Breakfast 08.00<br/>
                Practice 09.15-11.30( 4 exercise+1 match or winner table)<br/>
    Lunch 12.00<br/>
    Practice 15.00-17.30 (2 exercise + multi-ball+serveträning eller receiving)<br/>
    Physical fitness 17.30-18.10<br/>
    Dinner 18.30<br/>
    Learning table tennis theory or Watch the match video 19.30-20.30<br/>
    Sleep 22.00 or 22.30<br/>

            </StyledText>
        </StyledDiv>

    )
}