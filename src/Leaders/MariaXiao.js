import React from 'react';
import styled from 'styled-components';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import { StyledText } from '../styleguides/StyledText';
import StyledTextBoxDiv from '../styleguides/StyledTextBoxDiv';
import { StyledH3 } from '../styleguides/Styledh3';
import Maria from '../Assets/MariaXiao.jpg';
import {ScrollTop}  from '../utils/ScrollToTopp';



const HWrapper = styled.div`
display: flex;
align-itmes: center;
justify-content: left;
margin-left: 0rem;
`;

const StyledImageLocal = styled.img`
display: flex;
width: 50%;
border-radius: 10px;
object-fit: contain;
@media (max-width: 1000px){
    width: 70%;
}
@media (max-width: 600px){
    width: 90%;
}
@media (max-width: 348px){
    width: 105%;
}
//  
`;



export default function MariaXiao() {
    ScrollTop();
    return (
<StyledTextBoxDiv>
            <StyledTextSectionHeader>
            <HWrapper>  Maria Xiao 25  </HWrapper>
               <StyledImageLocal src={Maria} />
            </StyledTextSectionHeader>
            <br/>

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
                <br/>
            </StyledText>
            <StyledText>
                
                
            </StyledText>
 </StyledTextBoxDiv>);
 }