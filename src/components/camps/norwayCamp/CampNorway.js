import React from 'react';
import PlanLinkDiv from '../../LinkDivCard';
import { Wrapper } from '../../../styleguides/StyledTextBoxWrapper';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import { StyledText } from '../../../styleguides/StyledText';
import { ScrollTop } from '../../../utils/ScrollToTopp';


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
const rulesText = "Read about the camp rules and consequences. Please learn the rules before attending the camp.";

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
   <>
                <StyledTextSectionHeader style={{textAlign: "center"}}>Welcome to ITTC Norway </StyledTextSectionHeader>
                <StyledText style={{textAlign: "center"}}>What would you like to know about this camp?</StyledText>
                    <Wrapper>
            <PlanLinkDiv to="/stay/Norway/schedule" text={scheduleText} header={scheduleHeader} />
            <PlanLinkDiv to="/stay/rules" text={rulesText} header={rulesHeader} />
            <PlanLinkDiv to="/stay/Norway/social" text={SocialText} header={SocialHeader} />
            <PlanLinkDiv to="/stay/Norway/travel" text={travelText} icon={travelIcon} header={"Travel"} />
            <PlanLinkDiv to="/stay/Norway/prices" text={priceText} header={pricesHeader} />
            <PlanLinkDiv to="/stay/Norway/facilities" text={facilitiesText} header={facilitiesHeader} />
            <PlanLinkDiv to="/stay/Norway/pack-my-bag-please" text={packText} header={packHeader} />
        </Wrapper>
        </>
    )
}