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
const chinaFlagEmoji = "🇨🇳";
const polandFlagEmoji = "🇵🇱";
const norwegianFlagEmoji = "🇳🇴";
const taiwanFlagEmoji = "🇹🇼";

const travelHeader = chinaFlagEmoji + "China";
const travelText = "Camp China will be ready next autumn for sign up. You can already look at pictures here.";
const travelTo = "/stay/China";

const polandTravelHeader = polandFlagEmoji + "Poland";
const polandTravelText = "Camp Poland will be ready next autumn for sign up. You already look at pictures here.";
const polandTravelTo = "/stay/Poland";

const NorwayTravelHeader = norwegianFlagEmoji + "Norway";
const NorwayTravelText = "Read everything you need to know about your stay in Norway 07.04 - 10.04 2020.";
const NorwayTravelTo = "/stay/Norway";

const TaiwanTravelHeader = taiwanFlagEmoji + "Taiwan";
const TaiwanTravelText = "Read everything you need to know about your stay in Taiwan 22.06 - 07.07.2020.";
const TaiwanTravelTo = "/stay/Taiwan";



const informationLinks = [
    {
        header: NorwayTravelHeader,
        text: NorwayTravelText,
        to: NorwayTravelTo
    }, 
    {
        header: TaiwanTravelHeader,
        text: TaiwanTravelText,
        to: TaiwanTravelTo
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

export default function Stays() {
    ScrollTop();
    return (
        <>
            <HeaderWrap>
                <StyledTextSectionHeader>Choose your camp</StyledTextSectionHeader>
            </HeaderWrap>
            <Wrapper>
                {informationLinks.map(info => <PlanLinkDiv to={info.to} header={info.header} text={info.text} />)}
            </Wrapper>
        </>
    )
}