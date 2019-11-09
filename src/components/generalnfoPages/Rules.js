import React from 'react';
import styled from 'styled-components';
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import StyledDiv from '../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../styleguides/StyledText';
import { ScrollTop } from '../../utils/ScrollToTopp';

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
            <br/>
            <br/>
            <StyledText>
                <ol>
                <li> Golden rule: Respect each other, leaders, equipment and others' personal belongings</li>  <br/>
                <li>Be responsible, and take good care of the person next to you</li>  <br/>
                <li>Listen to Coach/leaders, their words are law during the camp</li>  <br/>
                <li>Be in time at all times</li>  <br/>
                <li>Speak only nice or constructively with each other, and about each other.</li>  <br/>
                <li>We are one team with one common goal at ITTC, act accordingly</li>  <br/>
                <li>Be cooperative, find solutions, not problems</li>  <br/>
                <li>Keep it clean and tidy at all times</li>  <br/>
                <li>Everyone is always welcome to join anyone. Take care and be nice to each other.</li>  <br/>
                <li>All use of drugs and alchol will lead to immediate repatriation without refound on own expense </li>  <br/>
                <li>Read the rules</li>  <br/>
                </ol>
                <br/>
            </StyledText>
           <StyledH3Local>Any deviation against the camp-rules can lead to immediate repatriation without refound.</StyledH3Local>
            <br/>
            <br/>
        </StyledDiv>
        )
}