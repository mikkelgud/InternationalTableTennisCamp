import React from 'react';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import StyledTextBoxDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from '../styleguides/StyledText';

export default function PolandTravel() {
    return (
        <StyledTextBoxDiv>
           <StyledTextSectionHeader>China - Work in progress 
                <span role="img" aria-label="work-emoji">👨🏽‍💻</span>
                <span role="img" aria-label="work-emoji">👩🏻‍💻</span>
                <span role="img" aria-label="work-emoji">👨🏼‍💻</span>
                </StyledTextSectionHeader>
                <StyledText></StyledText>
        </StyledTextBoxDiv>
    )
}