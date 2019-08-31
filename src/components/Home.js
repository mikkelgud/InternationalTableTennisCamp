import React from 'react';
import styled from 'styled-components';
import PlanLinkDiv from './LinkDivCard';
import { Wrapper } from '../styleguides/StyledTextBoxWrapper';
import { StyledText } from '../styleguides/StyledText';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';



const HeaderWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 2rem;
`

const aboutUsEmoji= "👨🏽‍💻👩🏻‍💻👨🏼‍💻";

//travels
const travelHeader = "Route";
const travelIcon = "route";
const travelText = "Read about your travel to Norway, China and Poland. Everything from the beginning to the end!";
const travelTo= "/travels";
//stay
const stayHeader = "Camps ";
const stayText = "Read about our stay in Norway, China and Poland. Everything about where we will stay, how we will stay and the day to day life on the camps.";
const stayTo = "/stay";
const stayIcon = "home";
//safety
const safteyHeader = "Safety ";
const safteyIcon = "user-shield";
const safteyText = "Read everything about how we will keep everybody safe during the travels, stay and return. And get information about what we need from you to make the camps safe."
const safteyTo= "/safety";
//leaders
const leadersHeader = "Leaders ";
const leadersIcon = "users";
const leadersText = "Read all about the ITTC-team´s coaches and leaders. Get to know the people who will make you climb the levels in table tennis, aswell as taking care of you.";
const leadersTo = "/leaders";
//about us
const aboutUsHeader = "About Us "+aboutUsEmoji;
const aboutUsText = "Read about ITTC, our goals and motivation for holding the camps. Here you can also learn more about the camps, and see what we are all about!";
const aboutUsTo = "/aboutus";
//sign up
const signUpHeader = "Sign Up ";
const signUpIcon = "door-open"
const signUpText = "Read about prices and how to sign up here. Please read the following about payment and inforamation procedures"
const signUpTo = "/Signup";


 const informationLinks= [
 {
    header: travelHeader,
    text: travelText,
    to: travelTo,
    icon: travelIcon
},
{
    header: aboutUsHeader,
    text: aboutUsText,
    to: aboutUsTo
}, {
    header: safteyHeader,
    text: safteyText,
    to: safteyTo,
    icon: safteyIcon
}, {
    header: stayHeader,
    text: stayText,
    to: stayTo,
    icon: stayIcon
}, {
    header: leadersHeader,
    text: leadersText,
    to: leadersTo,
    icon: leadersIcon
}, {
    header: signUpHeader,
    text: signUpText,
    to: signUpTo,
    icon: signUpIcon
}
];

export default function Home(props) {
    return (
        <>
        <HeaderWrap>
        <StyledTextSectionHeader>Welcome to International Table Tennis Camp! <StyledText>What would you like to know about us?</StyledText> </StyledTextSectionHeader>
        </HeaderWrap>
        <Wrapper>
       {informationLinks.map( info => <PlanLinkDiv  to={info.to} header={info.header} text={info.text} icon={info.icon}/>)}
        </Wrapper>
        <HeaderWrap><StyledText>Click the links for more info. </StyledText></HeaderWrap>
       
        </>
    )
}