import React, { useState } from 'react';
import PlanLinkDiv from '../LinkDivCard';
import { Wrapper } from '../../styleguides/StyledTextBoxWrapper';
import { ScrollTop } from '../../utils/ScrollToTopp';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';


//stay
const stayHeader = "Camps ";
const stayText = "Read about our stay in Norway, China and Poland. Everything about where we will stay, how we will stay and the day to day life on the camps.";
const stayTo = "/stay";
const stayIcon = "home";
//safety
const safteyHeader = "Safety ";
const safteyIcon = "user-shield";
const safteyText = "Read about how we will keep you safe during the travel, stay and return. Here you can also get information about what we need from you, to make the camp safe."
const safteyTo = "/safety";
//leaders
const leadersHeader = "Leaders ";
const leadersIcon = "users";
const leadersText = "Read all about the ITTC-team´s coaches and leaders. Get to know the people who will make you reach the next level in your career, aswell as taking care of you.";
const leadersTo = "/leaders";
//about us
const aboutUsHeader = "About Us ";
const aboutUsIcon = "users-cog";
const aboutUsText = "Read about ITTC, our goals and motivation for holding the camps. Here you can also learn more about the camps, and see what we are all about!";
const aboutUsTo = "/aboutus";
//sign up
const signUpHeader = "Sign Up ";
const signUpIcon = "door-open"
const signUpText = "Read about how to sign up. We are looking forward to have you with us on our camp."
const signUpTo = "/Signup";
//Ung cancer
const sponsorHeader = "Sponsors ";
const sponsorIcons = ["far", "handshake"]
const sponsorText = "Read about our sponsors and collaborators. Without you this wouldn't be possible, thank you.";
const sponsorTo = "/sponsors"


const informationLinks = [
    {
        header: aboutUsHeader,
        text: aboutUsText,
        to: aboutUsTo,
        icon: aboutUsIcon
    },
    {
        header: stayHeader,
        text: stayText,
        to: stayTo,
        icon: stayIcon
    },
    {
        header: leadersHeader,
        text: leadersText,
        to: leadersTo,
        icon: leadersIcon
    },

    {
        header: safteyHeader,
        text: safteyText,
        to: safteyTo,
        icon: safteyIcon
    },
    {
        header: signUpHeader,
        text: signUpText,
        to: signUpTo,
        icon: signUpIcon
    },];

export default function Home() {

    const [hoverState, setHoverState] = useState(false);
    const [sponsorIcon, setSponsorItem] = useState(["far", "handshake"]);

    sponsorIcons.join(sponsorIcon);
    const sponsorItemOnHoverEffectToggle = () => {
        setHoverState(!hoverState);
        // setHoverState(!hoverState);
        hoverState ? setSponsorItem(["far", "handshake"]) : setSponsorItem(faHandshake);
    }

    ScrollTop();
    return (
        <React.Fragment>
            {/* <HeaderWrap>
        <StyledTextSectionHeader><StyledText>What would you like to know about International Table Tennis Camp?</StyledText> </StyledTextSectionHeader>
        </HeaderWrap> */}
            <Wrapper>
                {informationLinks.map(
                    info => <PlanLinkDiv
                        to={info.to}
                        header={info.header}
                        text={info.text}
                        icon={info.icon} />)}
                <PlanLinkDiv
                    onMouseEnter={() => sponsorItemOnHoverEffectToggle()}
                    onMouseLeave={() => sponsorItemOnHoverEffectToggle()}
                    to={sponsorTo}
                    header={sponsorHeader}
                    text={sponsorText}
                    icon={sponsorIcon}
                />
            </Wrapper>
        </React.Fragment>
    )
}