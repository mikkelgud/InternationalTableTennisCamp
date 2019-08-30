import React from 'react';
import styled from 'styled-components';
import PlanLinkDiv from './LinkDivCard';
import { Wrapper } from '../styleguides/StyledTextBoxWrapper';
import { StyledText } from '../styleguides/StyledText';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';

const HeaderWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const chinaFlagEmoji = "🇨🇳";
const polandFlagEmoji = "🇵🇱";
const norwegianFlagEmoji = "🇳🇴";

const travelHeader = chinaFlagEmoji + "China";
const travelText = " Read everything you need to know about how we plan our stay in China.";
const travelTo = "/stay/China";

const polandTravelHeader = polandFlagEmoji + "Poland";
const polandTravelText = "Read everything you need to know about how we plan our stay in Poland.";
const polandTravelTo = "/stay/Poland";

const NorwayTravelHeader = norwegianFlagEmoji + "Norway";
const NorwayTravelText = "Read everything you need to know about your stay in Norway.";
const NorwayTravelTo = "/stay/Norway";

const informationLinks = [
    {
        header: NorwayTravelHeader,
        text: NorwayTravelText,
        to: NorwayTravelTo
    },
    {
        header: travelHeader,
        text: travelText,
        to: travelTo
    },
    {
        header: polandTravelHeader,
        text: polandTravelText,
        to: polandTravelTo
    },
];

export default function Plan(props) {
    return (
        <>
            <HeaderWrap>
                <StyledTextSectionHeader>Where do you wanna go first?</StyledTextSectionHeader>
            </HeaderWrap>
            <Wrapper>
                {informationLinks.map(info => <PlanLinkDiv to={info.to} header={info.header} text={info.text} />)}
            </Wrapper>
            <HeaderWrap><StyledText>Click the links for more info.</StyledText></HeaderWrap>
        </>
    )
}