import React from 'react';
import { StyledText } from '../styleguides/StyledText';
import StyledCirkledDiv from '../styleguides/StyledCirkledDiv';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';




export default function PersonProfile(props) {
    return ( 
        <StyledCirkledDiv background={props.background}>
            <StyledTextSectionHeader>
                {props.personName} {props.age}
            </StyledTextSectionHeader>
            <StyledText>
                {props.text}
            </StyledText>
            <StyledText>
                {props.willJoin}
            </StyledText>
        </StyledCirkledDiv>
    )
}