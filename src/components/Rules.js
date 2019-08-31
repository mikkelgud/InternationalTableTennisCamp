import React from 'react';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import StyledDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from '../styleguides/StyledText';
import { StyledATagLink } from '../styleguides/StyledATagLink';
import { StyledH3 } from '../styleguides/Styledh3';

export default function Rules() {
    return (
        <StyledDiv>
            <StyledTextSectionHeader>Rules</StyledTextSectionHeader>
            <StyledText>
               This rules are law during the camp.
               Everyone have to read this before attending the camp.
            </StyledText>
            <StyledText>
                <StyledH3>The Rules</StyledH3>
                <ul>
                <li> Golden rule: Respect each other, leaders, equipment and other personal belongings</li>
                <li>Be responible, and take good care of the person next to you</li>
                <li>Listen to Coach/leaders, their words are law during the camp</li>
                <li>Be in time at all times</li>
                <li>Speak only nice or constrcutivly with each other, and about each other.</li>
                <li>We are one team with one common goal at ITTC, act accordingly</li>
                <li>Be cooperative, find solutions, not problems</li>
                <li>Keep it clean and tidy at all times</li>
                <li>Everyone is always welcome to join anyone. Take care and be nice to each other.</li>
                <li>Read the rules</li>
                </ul>
                <br/>
            </StyledText>
           <StyledH3>At any deviation against the camp-rules, this can lead to repatriation.</StyledH3>
            <StyledATagLink href="mailto: contactus@ittcamp.com">If you have any questions, please don't hesitate to ask us on contactus@ittcamp.com by clicking here.</StyledATagLink> 
            <br/>
            <br/>
        </StyledDiv>
        )
}