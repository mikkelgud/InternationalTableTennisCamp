import React from 'react';
import styled from 'styled-components';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import StyledDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from '../styleguides/StyledText';
import { ScrollTop } from '../utils/ScrollToTopp';
import { StyledSTextSectionHeader } from '../styleguides/StyledSemiTextSectionHeader';


const StyledDetils = styled.details`
border: 1px solid black;
padding: 2rem;
border-radius: 15px;
`;

export default function Rules() {
    ScrollTop();

    return (
        <StyledDiv>
            <StyledTextSectionHeader style={{textAlign: "center"}}>Frequently Asked Questions</StyledTextSectionHeader>
            <br/>
            <br/>
            <StyledText>
                <StyledDetils>
                    <summary>Is the sign up binding? </summary>
                    <div>
                    <br/>
                         <StyledSTextSectionHeader>For camp Taiwan:</StyledSTextSectionHeader>
                        No, but you will not get any refound on your flight ticket.
                        If you fix the travel yourself, there's a deposit of 2000 NOK.
                       You pay the ticket or deposit after we have confirmed your sign up and sent you an email back on that.
                        <br/><br/>
                        <StyledSTextSectionHeader>For camp Norway:</StyledSTextSectionHeader>
                        No. Full refound.
                    </div>
                </StyledDetils>
            </StyledText>
            <br/>
            <br/>
        </StyledDiv>
        )
}