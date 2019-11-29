import React from 'react';
import styled from 'styled-components';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import StyledDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from '../styleguides/StyledText';
import { ScrollTop } from '../utils/ScrollToTopp';
import { StyledSTextSectionHeader } from '../styleguides/StyledSemiTextSectionHeader';


const StyledDetails = styled.details`
padding: 0;
border-radius: 15px;
border: 1px solid black;
padding: 0.5rem;
box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
`;

export default function Rules() {
    ScrollTop();

    return (
        <StyledDiv>
            <StyledTextSectionHeader style={{textAlign: "center"}}>Frequently Asked Questions</StyledTextSectionHeader>
            <br/>
            <br/>
                <StyledDetails>
               <summary> <StyledSTextSectionHeader>Is the sign up binding? </StyledSTextSectionHeader></summary>
                    <div style={{borderTop: "1px solid #e1e4e8", paddingTop: "1rem"}}>
                    
                         <StyledSTextSectionHeader style={{padding: "0 2rem"}}>For camp Taiwan:</StyledSTextSectionHeader>
                         <StyledText style={{padding: "0 2rem"}}>  No, but you will not get any refound on your flight ticket.
                        If you fix the travel yourself, there's a deposit of 2000 NOK.
                       You pay the ticket or deposit after we have confirmed your sign up and sent you an email back on that.
                       </StyledText>
                        <br/><br/>
                        <StyledSTextSectionHeader style={{padding: "0 2rem"}}>For camp Norway:</StyledSTextSectionHeader>
                       <StyledText style={{padding: "0 2rem"}}> No binding. Full refound if you can't come.</StyledText>
                    <br/>
                    </div>
               
                </StyledDetails>
  
            <br/>
            <br/>
        </StyledDiv>
        )
}