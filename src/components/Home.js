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
margin-left: 2rem;
`

const flightEmoji = "✈️";
const stayEmoji = "🏠";
const safetyEmoji= "👨‍👩‍👧‍👦";
const leadersEmoji = "👩🏻‍🏫";
const aboutUsEmoji= "🏆";
const singUpEmoji = "🤝";

//travels
const travelHeader = "Travels "+flightEmoji;
const travelText = "Read about our traveling plans to both China and Poland. Everything from the beginning to the end!";
const travelTo= "/travels";
//stay
const stayHeader = "Stay "+ stayEmoji;
const stayText = "Read about our stay in China and Poland. Everything about where we will stay, how we will stay and day to day life on the camps.";
const stayTo = "/stay";
//safety
const safteyHeader = "Safety "+safetyEmoji;
const safteyText = "Read everything about how we will keep everybody safe during the travels, stay and return. And get information about what we need from you to make the camps safe."
const safteyTo= "/safety";
//leaders
const leadersHeader = "Our Leaders"+leadersEmoji;
const leadersText = "Read all about the ITTC-team´s coaches and leaders. Get the contact information of all coaches and leaders. They will gladly answer any question you may have.";
const leadersTo = "/leaders";
//about us
const aboutUsHeader = "About Us "+aboutUsEmoji;
const aboutUsText = "Read about ITTC, our goals and motivation for holding the camps. Here you can also learn more about the camps, and see what we are all about!";
const aboutUsTo = "/aboutus";
//sign up
const signUpHeader = "Sign Up "+singUpEmoji
const signUpText = "Read about prices and how to sign up here. Please read the following about payment and inforamation porcedures"
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

export default function Home(props) {
    return (
        <>
        <HeaderWrap>
        <StyledTextSectionHeader>Welcome to International Table Tennis Camp! <StyledText>What would you like to know about us?</StyledText> </StyledTextSectionHeader>
        </HeaderWrap>
        <Wrapper>
       {informationLinks.map( info => <PlanLinkDiv  to={info.to} header={info.header} text={info.text}/>)}
        </Wrapper>
        <HeaderWrap><StyledText>Click the links for more info.</StyledText></HeaderWrap>
        </>
    )
}