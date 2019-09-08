import React from 'react';
import PlanLinkDiv from './LinkDivCard';
import styled from 'styled-components';
import { Wrapper } from '../styleguides/StyledTextBoxWrapper';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import { StyledText } from '../styleguides/StyledText';
import { ScrollTop } from '../utils/ScrollToTopp';



const HeaderWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 2rem;
`

const scheduleEmoji = "🗓";
const rulesEmoji = "📋";
const socialEmoji = "🎭";
const facilitiesEmoji = "🛏";
const packEmoji = "🎒";
const pricesEmoji = "⚖️";



const scheduleHeader = "Schedule " + scheduleEmoji;
const scheduleText = "Read about how our days will be, practice, food etc.";

const rulesHeader = "Rules " + rulesEmoji;
const rulesText = "Read about our rules and consequences. This a must read page, so please learn the rules before the travel and camps.";

const SocialHeader = "Social " + socialEmoji;
const SocialText = "Read about activities we plan to do during the travels outside the camp and inside the camp."

const facilitiesHeader = "Facilities "+ facilitiesEmoji ;
const facilitiesText = "Read about the facilities on the camp, where we will sleep and where we will stay.";

const pricesHeader = "Prices " + pricesEmoji;
const priceText = "Read about the price of the Camp on Harestua, and what's included in the price.";

const packHeader = "Pack my Bag " + packEmoji;
const packText = "Read about what you have to remember for camp norway.";

// const safteyHeader = "Safety ";
// const safteyIcon = "user-shield";
// const safteyText = "Read everything about how we will keep everybody safe during the travels, stay and return. And get information about what we need from you to make the camps safe."
// const safteyTo= "/safety";


export default function Stay(props) {
    ScrollTop();
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
            <PlanLinkDiv to="/stay/rules" text={rulesText} header={rulesHeader} />
            <PlanLinkDiv to="/stay/Norway/social" text={SocialText} header={SocialHeader} />
            <PlanLinkDiv to="/stay/Norway/facilities" text={facilitiesText} header={facilitiesHeader} />
            <PlanLinkDiv to="/stay/Norway/prices" text={priceText} header={pricesHeader} />
            <PlanLinkDiv to="/stay/Norway/pack-my-bag-please" text={packText} header={packHeader} />
        </Wrapper>
        </React.Fragment>
    )
}