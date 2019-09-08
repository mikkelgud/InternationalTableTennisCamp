import React from 'react';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import StyledDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from '../styleguides/StyledText';
import { StyledATagLink } from '../styleguides/StyledATagLink';
import { StyledH3 } from '../styleguides/Styledh3';
import { ScrollTop } from '../utils/ScrollToTopp';

export default function Rules() {
    ScrollTop();

    return (
        <StyledDiv>
            <StyledTextSectionHeader>Rules</StyledTextSectionHeader>
            <StyledText>
               This rules are law during the camps.
               Everyone have to read this before attending the camps.
               <br/>
               <br/>
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
                <li>All use of drugs and alchol will lead to immediate repatriation without refound on own expense </li>

                <li>Read the rules</li>
                </ul>
                <br/>
            </StyledText>
           <StyledH3>Any deviation against the camp-rules, can lead to immediate repatriation without refound.</StyledH3>
            <StyledATagLink href="mailto: contactus@ittcamp.com">If you have any questions, please don't hesitate to contact us at contactus@ittcamp.com by clicking here.</StyledATagLink> 
            <br/>
            <br/>
        </StyledDiv>
        )
}