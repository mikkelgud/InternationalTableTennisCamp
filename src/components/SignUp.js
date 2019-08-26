import React from 'react';
import styled from 'styled-components';
import StyledDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from '../styleguides/StyledText';
import { StyledATagLink } from '../styleguides/StyledATagLink';
import { StyledTextSectionHeader } from '../styleguides/StyledtextSectionHeader';

 const HeaderAligner = styled.div`
 display: flex;
 align-items: flex-start;
 justify-content: felx-start;
 margin-left: 8rem;
 @media(max-width: 810px){
    margin-left: 2rem;
 }
 `;


export default function SignUp() {
    return (
        <React.Fragment>
            <HeaderAligner> <StyledTextSectionHeader>Sign up Poland</StyledTextSectionHeader></HeaderAligner>
            <StyledATagLink href="mailto: Joinpoland@ittcamp.com"><StyledDiv>
                <StyledText>You sign up by sending the application form to joinPoland@ittcamp.com</StyledText>
            </StyledDiv></StyledATagLink>
            <HeaderAligner> <StyledTextSectionHeader>Sign up China</StyledTextSectionHeader></HeaderAligner>
            <StyledATagLink href="mailto: Joinchina@ittcamp.com"><StyledDiv>
                <StyledText>You sign up by sending the application form to joinChina@ittcamp.com</StyledText>
            </StyledDiv></StyledATagLink>
            <HeaderAligner> <StyledTextSectionHeader>Something we can help you with?</StyledTextSectionHeader></HeaderAligner>
            <StyledATagLink href="mailto: Q&R@ittcamp.com">
                <StyledDiv>
                    <StyledText>Ask us any question at Q&R@ittcamp.com</StyledText>
                </StyledDiv>
            </StyledATagLink>
        </React.Fragment>
    );
}