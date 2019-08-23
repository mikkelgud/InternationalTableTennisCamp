import React from 'react';
import styled from 'styled-components';
import PlanLinkDiv from './LinkDivCard';
import { Wrapper } from '../styleguides/StyledTextBoxWrapper';
import { StyledText } from '../styleguides/StyledText';
import { StyledTextSectionHeader } from '../styleguides/StyledtextSectionHeader';

const HeaderWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const chinaFlagEmoji = "🇨🇳";
const polandFlagEmoji = "🇵🇱";

const travelHeader = chinaFlagEmoji+"China";
const travelText = "Read about how we plan our travel to China, and how we plan the traveling process. Everything from the beginning to the end!";
const travelTo= "/travels/China";

const polandTravelHeader = polandFlagEmoji+"Poland";
const polandTravelText = "Read about how we plan our travel to Poland, and how we plan the traveling process. Everything from the beginning to the end!";
const polandTravelTo= "/travels/Poland";

 const informationLinks=[
 {
    header: travelHeader,
    text: travelText,
    to: travelTo
},
{
    header: polandTravelHeader,
    text: polandTravelText,
    to: polandTravelTo
}
];

export default function Plan(props) {
    return (
        <>
        <HeaderWrap>
        <StyledTextSectionHeader>Choose your camp</StyledTextSectionHeader>
        </HeaderWrap>
        <Wrapper>
       {informationLinks.map( info => <PlanLinkDiv to={info.to} header={info.header} text={info.text}/>)}
        </Wrapper>
        <HeaderWrap><StyledText>Click one of the links to read more about each camp.</StyledText></HeaderWrap>
        </>
    )
}