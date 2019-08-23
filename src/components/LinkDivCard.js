import React from 'react';
import Card from '../styleguides/StyledTextCardDiv';
import { StyledLink } from '../styleguides/StyledLink';
import { StyledTextSectionHeader } from '../styleguides/StyledtextSectionHeader';
import { StyledText } from '../styleguides/StyledText';
import { StyledImage } from '../styleguides/StyledImage';

export default function PlanLinkDiv(props) {
    return (
        <StyledLink to={props.to}>
            <Card>
                <StyledTextSectionHeader>{props.header}</StyledTextSectionHeader>
                <StyledImage src={props.src}/>
                <StyledText>{props.text}</StyledText>
               
             </Card>
        </StyledLink>

    )
}