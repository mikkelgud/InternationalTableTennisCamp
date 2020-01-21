import React from 'react';
import styled from 'styled-components';
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import StyledDiv from '../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../styleguides/StyledText';
import { ScrollTop } from '../../utils/ScrollToTopp';
import { StyledList } from '../../styleguides/StyledList';
import { StyledListUnit } from "../../styleguides/StyledListUnit";

const StyledH3Local = styled.h3`
font-weight: bold;
font-size: 0.9rem;
font-family: 'roboto', sans-serif;
color: #f44336;
`;

export default function Rules() {
    ScrollTop();

    return (
        <StyledDiv>
            <StyledTextSectionHeader style={{textAlign: "center"}}>Rules</StyledTextSectionHeader>
            <StyledText>
                <StyledList>
                <StyledListUnit> Golden rule: Respect each other, leaders, equipment and others' personal belongings</StyledListUnit>  
                <StyledListUnit>Be responsible, and take good care of the person next to you</StyledListUnit>  
                <StyledListUnit>Listen to the Coaches/leaders. Their words are law during the camp</StyledListUnit>  
                <StyledListUnit>Be on time at all times</StyledListUnit> 
                <StyledListUnit>Speak only nice or constructively with each other, and about each other.</StyledListUnit>  
                <StyledListUnit>We are one team with one common goal at ITTC, act accordingly</StyledListUnit>  
                <StyledListUnit>Be cooperative, find solutions, not problems</StyledListUnit> 
                <StyledListUnit>Keep it clean and tidy at all times</StyledListUnit>  
                <StyledListUnit>Everyone is always welcome to join anyone. Take care and be nice to each other.</StyledListUnit> 
                <StyledListUnit>All use of drugs and alchol during the camp will lead to immediate repatriation without refound on own expense. </StyledListUnit>  
                <StyledListUnit>Read the rules</StyledListUnit>  
                </StyledList>
            </StyledText>
           <StyledH3Local>Any deviation against the camp-rules can lead to immediate repatriation without refound.</StyledH3Local>
        </StyledDiv>
        )
}