import React from 'react';
import Card from '../styleguides/StyledTextCardDiv';
import { StyledLink } from '../styleguides/StyledLink';
import { StyledTextSectionHeader } from '../styleguides/StyledtextSectionHeader';
import { StyledText } from '../styleguides/StyledText';

export default function PlanLinkDiv(props) {
    return (
        <StyledLink to={props.to}>
            <Card>
                <StyledTextSectionHeader>{props.header}</StyledTextSectionHeader>
                <StyledText>{props.text}</StyledText>
             </Card>
        </StyledLink>

    )
}