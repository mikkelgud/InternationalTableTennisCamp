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



const scheduleHeader = "Schedule " + scheduleEmoji;
const scheduleText = "Read about how our days will be in Taiwan. Practice, bedtimes, food etc.";

const rulesHeader = "Rules " + rulesEmoji;
const rulesText = "Read about our rules and consequences. This is a must read page, so please learn the rules before attending the camps.";

const SocialHeader = "Social " + socialEmoji;
const SocialText = "Read about activities we plan to do during the travels outside the camp and inside the camp."

const facilitiesHeader = "Facilities "+ facilitiesEmoji ;
const facilitiesText = "Read about the facilities at the Taiwan camp. And look at pictures from where we will sleep, and where we will stay.";

const pricesHeader = "Prices " + pricesEmoji;
const priceText = "Read about the price of the Camp in Taiwan, and what's included in the price.";

const packHeader = "Pack my Bag " + packEmoji;
const packText = "Read about what you should to remember for camp Taiwan.";

// const safteyHeader = "Safety ";
// const safteyIcon = "user-shield";
// const safteyText = "Read everything about how we will keep everybody safe during the travels, stay and return. And get information about what we need from you to make the camps safe."
// const safteyTo= "/safety";


export default function Stay() {
    ScrollTop();
    return (
<React.Fragment>
            <HeaderWrap>
                <StyledTextSectionHeader>
                    Welcome to ITTC Taiwan
                    
                <StyledText>What would you like to know about?
            <StyledATagLink target="blank" href="https://www.google.com/maps/dir//Taoyuan+City,+Taiwan/@39.409967,35.5145764,3.34z/data=!4m8!4m7!1m0!1m5!1m1!1s0x34683d0eceda863f:0x54e44f52583a486a!2m2!1d121.3009798!2d24.9936281"> Where is Tao Yuan?</StyledATagLink>
            </StyledText>
            </StyledTextSectionHeader>
            </HeaderWrap>
                    <Wrapper>
            <PlanLinkDiv to="/stay/Taiwan/schedule" text={scheduleText} header={scheduleHeader} />
            <PlanLinkDiv to="/stay/rules" text={rulesText} header={rulesHeader} />
            <PlanLinkDiv to="/stay/Taiwan/social" text={SocialText} header={SocialHeader} />
            <PlanLinkDiv header="Travel" to="/stay/Taiwan/travel" text={"Read about how we plan our travel to Taiwan, how we will order tickets and when we will order tickets."} icon="route" />
            <PlanLinkDiv to="/stay/Taiwan/prices" text={priceText} header={pricesHeader} />
            <PlanLinkDiv to="/stay/Taiwan/facilities" text={facilitiesText} header={facilitiesHeader} />
            <PlanLinkDiv to="/stay/Taiwan/pack-my-bag-please" text={packText} header={packHeader} />
        </Wrapper>
        </React.Fragment>
    )
}