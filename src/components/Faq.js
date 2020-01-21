import React from 'react';
import styled from 'styled-components';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import StyledDiv from '../styleguides/StyledTextBoxDiv';
import { ScrollTop } from '../utils/ScrollToTopp';
import SummaryForFAQ from '../SummaryForFAQ';


const StyledDetails = styled.details`
padding: 0;
border-radius: 15px;
border: 1px solid black;
padding: 0.5rem;
box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
margin: 0.4rem 0;
`;

export default function Rules() {
    ScrollTop();

    return (
        <StyledDiv>
            <StyledTextSectionHeader style={{textAlign: "center", marginBottom: "1rem"}}>Frequently Asked Questions</StyledTextSectionHeader>
                <StyledDetails>
                    <SummaryForFAQ
                    header="Is the sign up binding?"
                    textTaiwan="No, but you will not get any refund on your flight ticket. If you fix the travel yourself, there's a deposit of 2000 NOK (200 Euro). You pay the ticket or deposit after we have confirmed your sign up and sent you an email back on that."
                    textNorway="No binding. Full refound of the camp price if you can't come."
                    />
                </StyledDetails>
        </StyledDiv>
        )
}