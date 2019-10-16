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
const travelText = " Read everything you need to know about how we plan our stay in China.";
const travelTo = "/stay/China";

const polandTravelHeader = polandFlagEmoji + "Poland";
const polandTravelText = "Read everything you need to know about how we plan our stay in Poland.";
const polandTravelTo = "/stay/Poland";

const NorwayTravelHeader = norwegianFlagEmoji + "Norway";
const NorwayTravelText = "Read everything you need to know about your stay in Norway.";
const NorwayTravelTo = "/stay/Norway";

const TaiwanTravelHeader = taiwanFlagEmoji + "Taiwan";
const TaiwanTravelText = "Read everything you need to know about your stay in Taiwan.";
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
        header: polandTravelHeader,
        text: polandTravelText,
        to: polandTravelTo
    },
    {
        header: travelHeader,
        text: travelText,
        to: travelTo
    },
   
];

export default function Stays(props) {
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