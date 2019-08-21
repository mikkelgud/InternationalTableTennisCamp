import React from 'react';
import { StyledImage } from '../styleguides/StyledImage';
import { StyledText } from '../styleguides/StyledText';
import StyledTextBoxDiv from '../styleguides/StyledTextCardDiv';
import { StyledTextSectionHeader } from '../styleguides/StyledtextSectionHeader';

export default function PersonProfile(props) {
    return (
        <StyledTextBoxDiv background={"grey"}>
            <StyledTextSectionHeader>
                {props.personName} {props.age}
            </StyledTextSectionHeader>
            <StyledImage src={props.source} />
            <StyledText>
                {props.text}
            </StyledText>
        </StyledTextBoxDiv>
    )
}