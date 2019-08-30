import React from 'react';
import styled from 'styled-components';
import StyledDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from '../styleguides/StyledText';
import { StyledATagLink } from '../styleguides/StyledATagLink';
import { StyledSTextSectionHeader } from '../styleguides/StyledSemiTextSectionHeader.js';

const HeaderAligner = styled.div`
 display: flex;
 align-items: flex-start;
 justify-content: felx-start;
 @media(max-width: 810px){
    margin-left: 2rem;
 }
 `;

 const MyWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-wrap: wrap;

 `;


export default function SignUp() {
    return (
        <MyWrapper>
            <StyledDiv>
                <HeaderAligner> <StyledSTextSectionHeader>Sign up Norway<span role="img" aria-label="NO-flag">🇳🇴</span></StyledSTextSectionHeader></HeaderAligner>
                <StyledATagLink href="mailto: joinnorway@ittcamp.com">
                    <StyledText>You sign up by sending the application form to joinNorway@ittcamp.com <br/>
                    Click to send email.</StyledText>
                    {/* You sign up by sending the application form to joinPoland@ittcamp.com */}
                </StyledATagLink>
            </StyledDiv>
            <StyledDiv>
                <HeaderAligner> <StyledSTextSectionHeader>Sign up Poland<span role="img" aria-label="PO-flag">🇵🇱</span></StyledSTextSectionHeader></HeaderAligner>
                <StyledATagLink href="mailto: Joinpoland@ittcamp.com">
                    <StyledText>Coming soon, it's already possible to tell us how excited you are for ITTC Poland!</StyledText>
                    {/* You sign up by sending the application form to joinPoland@ittcamp.com */}
                </StyledATagLink>
            </StyledDiv>
            <StyledDiv>
                <HeaderAligner> <StyledSTextSectionHeader>Sign up China<span role="img" aria-label="CH-flag">🇨🇳</span></StyledSTextSectionHeader></HeaderAligner>
                <StyledATagLink href="mailto: Joinchina@ittcamp.com">
                    <StyledText>Coming soon, it's already possible to tell us how excited you are for ITTC China!</StyledText>
                    {/* You sign up by sending the application form to joinChina@ittcamp.com */}
                </StyledATagLink>
            </StyledDiv>
            <StyledDiv>
                <HeaderAligner> <StyledSTextSectionHeader><span role="img" aria-label="Thinking-emoji">🕵🏻‍</span>Anything we can help you with?<span role="img" aria-label="Thinking-emoji">🕵🏻‍♀️</span></StyledSTextSectionHeader></HeaderAligner>
                <StyledATagLink href="mailto: Q&R@ittcamp.com">
                    <StyledText>Ask us any question at Q&R@ittcamp.com</StyledText>
                </StyledATagLink>
            </StyledDiv>
        </MyWrapper>
    );
}