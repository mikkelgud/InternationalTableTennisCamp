import React from 'react';
import styled from 'styled-components';
import StyledDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from '../styleguides/StyledText';
import { StyledTextSectionHeader } from '../styleguides/StyledtextSectionHeader';

const HeaderAligner = styled.div`
display: felx;
align-items: center;
justify-content: center;
`;


export default function SignUp(){
    return(
        <React.Fragment>
            <HeaderAligner>
            <StyledTextSectionHeader>Click one of the following boxes to sign up</StyledTextSectionHeader>
            </HeaderAligner>
        <StyledDiv>
            <StyledText>You sign up by sending the application form to join@ittcamp.com</StyledText>
        </StyledDiv>
        <StyledDiv>
        <StyledText>Ask us any question at q&r@ittcamp.com</StyledText>
    </StyledDiv>
    </React.Fragment>
    );
}