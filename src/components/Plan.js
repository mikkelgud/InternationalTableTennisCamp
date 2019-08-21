import React from 'react';
import styled from 'styled-components';
import PlanLinkDiv from './LinkDivCard';
import { Wrapper } from '../styleguides/StyledTextBoxWrapper';
import { StyledText } from '../styleguides/StyledText';
import { StyledTextSectionHeader } from '../styleguides/StyledtextSectionHeader';



const HeaderWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const flightEmoji = "✈️";
const stayEmoji = "🏯";
const safetyEmoji= "👨‍👩‍👧‍👦";
const leadersEmoji = "👩🏻‍🏫";
const aboutUsEmoji= "🏆";
const singUpEmoji = "🤝";

const travelHeader = "Travel "+flightEmoji;
const travelText = "Read about how we plan our travel to China and how we plan the traveling process. Everything from the beginning to the end!";
const travelTo= "/travel";

const stayHeader = "Stay "+ stayEmoji;
const stayText = "Read about our stay in China. Everything about how we will stay, where we will sleep and day to day life on the camp";
const stayTo = "/stay";

const safteyHeader = "Safety "+safetyEmoji;
const safteyText = "Read everything about how we will keep everybody safe during the travel, stay and return. And read information about what we need from you to make this as safe as possible"
const safteyTo= "/safety";

const leadersHeader = "Our Leaders"+leadersEmoji;
const leadersText = "Read all about the ITTC-team´s coaches and leaders. Get the contact information of all coaches and leaders. They will gladly answer any question you may have.";
const leadersTo = "/leaders";

const aboutUsHeader = "About Us "+aboutUsEmoji;
const aboutUsText = "Read about ITTC, our goals and motivation for the holding the camp. Here you can also learn more about the camp and see what we are all about!";
const aboutUsTo = "/aboutus";

const signUpHeader = "Sign Up "+singUpEmoji
const signUpText = "Read about prices and how to sign up here. Please read the following about payment and inforamation precidures"
const signUpTo = "/Signup";

 const informationLinks= [
 {
    emoji: flightEmoji,
    header: travelHeader,
    text: travelText,
    to: travelTo
},
{
    header: aboutUsHeader,
    text: aboutUsText,
    to: aboutUsTo
}, {
    header: safteyHeader,
    text: safteyText,
    to: safteyTo
}, {
    header: stayHeader,
    text: stayText,
    to: stayTo
}, {
    header: leadersHeader,
    text: leadersText,
    to: leadersTo
}, {
    header: signUpHeader,
    text: signUpText,
    to: signUpTo
}
];

export default function Plan(props) {
    return (
        <>
        <HeaderWrap>
        <StyledTextSectionHeader>Welcome to ITTC! <StyledText>What would you like to know about us?</StyledText> </StyledTextSectionHeader>
        </HeaderWrap>
        <Wrapper>
       {informationLinks.map( info => <PlanLinkDiv to={info.to} header={info.header} text={info.text}/>)}
        </Wrapper>
        <HeaderWrap><StyledText>Click one of the links to read more about each category.</StyledText></HeaderWrap>
        </>
    )
}