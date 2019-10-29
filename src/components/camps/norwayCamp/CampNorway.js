import React from 'react';
import PlanLinkDiv from '../../LinkDivCard';
import styled from 'styled-components';
import { Wrapper } from '../../../styleguides/StyledTextBoxWrapper';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import { StyledText } from '../../../styleguides/StyledText';
import { ScrollTop } from '../../../utils/ScrollToTopp';
import {StyledATagLink} from '../../../styleguides/StyledATagLink';



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

//Travel
const travelText = "Read about your travel possibilities to Harestua, camp Norway.";
const travelIcon = "route";

//Shcedule
const scheduleHeader = "Schedule " + scheduleEmoji;
const scheduleText = "Read about how our days will be in Harestua. Practice, bedtimes, food etc.";

//Rules
const rulesHeader = "Rules " + rulesEmoji;
const rulesText = "Read about the camp rules and consequences. It is obligatory to read this page, so please learn the rules before attending the camp.";

// Social
const SocialHeader = "Social " + socialEmoji;
const SocialText = "Read about activities we plan to do during the camp."

//Facilities
const facilitiesHeader = "Facilities "+ facilitiesEmoji ;
const facilitiesText = "Read about the facilities at the Harestua Camp. Read about where we will sleep and where we will stay.";

//Prices
const pricesHeader = "Prices " + pricesEmoji;
const priceText = "Read about the price of the Camp at Harestua, and what's included in the price.";

//Pack my bag
const packHeader = "Pack my Bag " + packEmoji;
const packText = "Read about what you should remember to take with you to Camp Norway.";

// const safteyHeader = "Safety ";
// const safteyIcon = "user-shield";
// const safteyText = "Read about how we will keep everybody safe whilst travelling and living at the camp. Get information about what we need from you to make the camps safe."
// const safteyTo= "/safety";


export default function Stay() {
    ScrollTop();
    return (
<React.Fragment>
            <HeaderWrap>
                <StyledTextSectionHeader>
                    Welcome to ITTC Norway 
                <StyledText>What would you like to know about?
            <StyledATagLink target="blank" href="https://www.google.com/maps/dir//Harestua+Arena,+Elvefaret+22,+2743+Harestua/@60.2091828,10.713969,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x46419f7b25edc42b:0xecdfa6f6adc8441d!2m2!1d10.7161577!2d60.2091828"> Where's Harestua?</StyledATagLink>              
                </StyledText>
                </StyledTextSectionHeader>
            </HeaderWrap>
                    <Wrapper>
            <PlanLinkDiv to="/stay/Norway/schedule" text={scheduleText} header={scheduleHeader} />
            <PlanLinkDiv to="/stay/rules" text={rulesText} header={rulesHeader} />
            <PlanLinkDiv to="/stay/Norway/social" text={SocialText} header={SocialHeader} />
            <PlanLinkDiv to="/stay/Norway/travel" text={travelText} icon={travelIcon} header={"Travel"} />
            <PlanLinkDiv to="/stay/Norway/prices" text={priceText} header={pricesHeader} />
            <PlanLinkDiv to="/stay/Norway/facilities" text={facilitiesText} header={facilitiesHeader} />
            <PlanLinkDiv to="/stay/Norway/pack-my-bag-please" text={packText} header={packHeader} />
        </Wrapper>
        </React.Fragment>
    )
}