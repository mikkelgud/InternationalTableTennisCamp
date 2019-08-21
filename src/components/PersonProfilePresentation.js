import React from 'react';
import { StyledText } from '../styleguides/StyledText';
import StyledTextBoxDiv from '../styleguides/StyledTextCardDiv';
import { StyledTextSectionHeader } from '../styleguides/StyledtextSectionHeader';

export default function PersonProfile(props) {
    return ( 
        <StyledTextBoxDiv background={props.background}>
            <StyledTextSectionHeader>
                {props.personName} {props.age}
            </StyledTextSectionHeader>
            <StyledText>
                {props.text}
            </StyledText>
        </StyledTextBoxDiv>
    )
}