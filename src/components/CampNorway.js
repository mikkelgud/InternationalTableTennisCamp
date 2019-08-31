import React from 'react';
import PlanLinkDiv from './LinkDivCard';
import styled from 'styled-components';
import { Wrapper } from '../styleguides/StyledTextBoxWrapper';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import { StyledText } from '../styleguides/StyledText';



const HeaderWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 2rem;
`


const scheduleHeader = "Schedule";
const scheduleText = "Read about how our days will be, practice, food etc.";

const rulesHeader = "Rules";
const rulesText = "Read about our rules and consequences. This a must read page, so please learn the rules before the travel";

const SocialHeader = "Social";
const SocialText = "Read about activities we plan to do during the travels outside the camp and inside the camp."

const facilitiesHeader = "Facilities";
const facilitiesText = "Read about the facilities on the camp and what we can do with our sparetime.";

const pricesHeader = "Prices";
const priceText = "Read about the price of the Camp on Harestua, and what's included in the price";


export default function Stay(props) {
    return (
<React.Fragment>
            <HeaderWrap>
                <StyledTextSectionHeader>
                    Welcome to ITTC Norway
                <StyledText>What would you like to know about?
                </StyledText>
                </StyledTextSectionHeader>
            </HeaderWrap>
                    <Wrapper>
            <PlanLinkDiv to="/stay/Norway/schedule" text={scheduleText} header={scheduleHeader} />
            <PlanLinkDiv to="/stay/Norway/rules" text={rulesText} header={rulesHeader} />
            <PlanLinkDiv to="/stay/Norway/social" text={SocialText} header={SocialHeader} />
            <PlanLinkDiv to="/stay/Norway/facilities" text={facilitiesText} header={facilitiesHeader} />
            <PlanLinkDiv to="/stay/Norway/prices" text={priceText} header={pricesHeader} />
            
        </Wrapper>
        </React.Fragment>
    )
}