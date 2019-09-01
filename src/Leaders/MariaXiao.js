import React from 'react';
import styled from 'styled-components';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import { StyledText } from '../styleguides/StyledText';
import StyledTextBoxDiv from '../styleguides/StyledTextBoxDiv';
import { Wrapper } from '../styleguides/StyledTextBoxWrapper';
import { StyledH3 } from '../styleguides/Styledh3';
import Maria from '../Assets/MariaXiao.jpg';


const HWrapper = styled.div`
display: flex;
align-itmes: flex-start;
justify-content: flex-start;
margin-left: 2rem;
`;

const StyledImageLocal = styled.img`
display: flex;
width: 100%;
height: 27rem;
border-radius: 10px;
@media(max-width: 600px){
    height: 200px;
  }

//  
`;

export default function MariaXiao() {
    return (
<StyledTextBoxDiv>
            <StyledTextSectionHeader>
            <HWrapper>  Maria Xiao 25 </HWrapper>
             <Wrapper>
                    <StyledImageLocal src={Maria} />
                </Wrapper>
            </StyledTextSectionHeader>
            <StyledH3>Accomplishments</StyledH3>
            <StyledText>
                <ul>
                    <li>2008 Europe Top10 bronze medal singles.</li>
                    <li>2009  European Championships Bronze medal teams.</li>
                    <li>2012 World Junior Finals bronze medal singles . </li>
                    <li>Best World Junior Ranking : 9 .</li>
                    <li>Best European Junior Ranking : 4 .</li>
                    <li>2018 Mediterranean Games Champion teams.</li>
                    <li>2019 Spanish Cup , Spanish League and ETTU Cup champion.</li>
                    <li>Spanish National Champion 3 times singles.</li>
                </ul>
                <br/>
            </StyledText>
            <StyledText>
                
                
            </StyledText>
 </StyledTextBoxDiv>);
 }