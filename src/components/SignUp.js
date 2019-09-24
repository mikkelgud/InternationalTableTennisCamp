import React from 'react';
import styled from 'styled-components';
import StyledDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from '../styleguides/StyledText';
import { StyledATagLink } from '../styleguides/StyledATagLink';
import { StyledSTextSectionHeader } from '../styleguides/StyledSemiTextSectionHeader.js';
import { ScrollTop } from '../utils/ScrollToTopp';
import ApplicationForm from "../Assets/ApplicationITTCAMP.docx";



export const StyledATagLinkLocal = styled.a`
  color: black;
  cursor: pointer;
  border-radius: 15px;
  &:hover{
    color: #1f448c;
  }
`

const HeaderAligner = styled.div`
 display: flex;
 align-items: flex-start;
 justify-content: felx-start;
 `;

 const MyWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-wrap: wrap;

 `;


export default function SignUp(props) {
    ScrollTop();
    return (
        <MyWrapper>
            <StyledDiv>
                <HeaderAligner> <StyledSTextSectionHeader>Sign up to Norway<span role="img" aria-label="NO-flag">🇳🇴</span></StyledSTextSectionHeader></HeaderAligner>
                <StyledATagLink href="mailto: join@ittcamp.com">
                    <StyledText>You sign up by sending the <StyledATagLinkLocal href={ApplicationForm}>Sign up form</StyledATagLinkLocal> to join@ittcamp.com <br/>
                    Click to send email or <StyledATagLinkLocal href={ApplicationForm}>download sign up form.</StyledATagLinkLocal></StyledText>
                    {/* You sign up by sending the application form to joinPoland@ittcamp.com */}
                </StyledATagLink> <br/>
                <StyledATagLink onClick={()=>{props.history.push("/stay/Norway/prices")}}>"Read about Prices"</StyledATagLink>
            </StyledDiv>
            <StyledDiv>
                <HeaderAligner> <StyledSTextSectionHeader>Sign up to Poland<span role="img" aria-label="PO-flag">🇵🇱</span></StyledSTextSectionHeader></HeaderAligner>
                <StyledATagLink href="mailto: Join@ittcamp.com">
                    <StyledText>Coming soon, it's already possible to tell us how excited you are for ITTC Poland!</StyledText>
                    {/* You sign up by sending the application form to joinPoland@ittcamp.com */}
                </StyledATagLink>
            </StyledDiv>
            <StyledDiv>
                <HeaderAligner> <StyledSTextSectionHeader>Sign up to China<span role="img" aria-label="CH-flag">🇨🇳</span></StyledSTextSectionHeader></HeaderAligner>
                <StyledATagLink href="mailto: Join@ittcamp.com">
                    <StyledText>Coming soon, it's already possible to tell us how excited you are for ITTC China!</StyledText>
                    {/* You sign up by sending the application form to joinChina@ittcamp.com */}
                </StyledATagLink>
            </StyledDiv>
            <StyledDiv>
                <HeaderAligner> <StyledSTextSectionHeader>Anything we can help you with?</StyledSTextSectionHeader></HeaderAligner>
                <StyledATagLink href="mailto: contactus@ittcamp.com">
                    <StyledText>Ask us any question at contactus@ittcamp.com</StyledText>
                </StyledATagLink>
            </StyledDiv>
        </MyWrapper>
    );
}