import React from 'react';
import styled from 'styled-components';
import PlanLinkDiv from './LinkDivCard';
import { Wrapper } from '../styleguides/StyledTextBoxWrapper';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import { ScrollTop } from '../utils/ScrollToTopp';

const HeaderWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const LocalWrapper = styled.div`
display: flex;
flex-direction: column;

`
const chinaFlagEmoji = "🇨🇳";
const polandFlagEmoji = "🇵🇱";
const norwayEmoji = "🇳🇴";
const taiwanFlagEmoji = "🇹🇼";

const travelHeader = chinaFlagEmoji + "China";
const travelText = "Read about how we plan our travel to China, and how we plan the traveling process. Everything from the beginning to the end!";
const travelTo = "/travels/China";

const polandTravelHeader = polandFlagEmoji + "Poland";
const polandTravelText = "Read about how we plan our travel to Poland, and how we plan the traveling process. Everything from the beginning to the end!";
const polandTravelTo = "/travels/Poland";

const norwayTravelHeader = norwayEmoji + "Norway";
const norwayTravelText = "Read about your travel opportunities to our camp in Norway.";
const norwayTraveTo = "/travels/Norway";

const taiwanTravelHeader = taiwanFlagEmoji + "Taiwan";
const taiwanTravelText = "Read about how we plan our travel to Taiwan, and how we plan the traveling process. Everything from the beginning to the end!";
const taiwanTravelTo = "/travels/Taiwan";

const informationLinks = [
    {
        header: norwayTravelHeader,
        text: norwayTravelText,
        to: norwayTraveTo
    },
    {
        header: polandTravelHeader,
        text: polandTravelText,
        to: polandTravelTo
    },
    {
        header: travelHeader,
        text: travelText,
        to: travelTo
    },
    {
        header: taiwanTravelHeader,
        text: taiwanTravelText,
        to: taiwanTravelTo
    },
];

export default function Plan(props) {
    ScrollTop();
    return (
        <LocalWrapper>
            <HeaderWrap>
                <StyledTextSectionHeader>Choose your camp</StyledTextSectionHeader>
            </HeaderWrap>
            <Wrapper>
                {informationLinks.map(info => <PlanLinkDiv to={info.to} header={info.header} text={info.text} />)}
            </Wrapper>
        </LocalWrapper>
    )
}