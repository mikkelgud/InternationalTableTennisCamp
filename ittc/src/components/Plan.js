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
const travelHeader = "Travel "+flightEmoji;
const travelText = "Read about how we plan our travel to China and how we plan the traveling process. Everything from the beginning to the end!";

const stayEmoji = "🏯";
const stayHeader = "Stay "+ stayEmoji;
const stayText = "Read about our stay in China. Everything about how we will stay, where we will sleep and day to day life on the camp";

const safetyEmoji= "👨‍👩‍👧‍👦";
const safteyHeader = "Safety "+safetyEmoji;
const safteyText = "Read everything about how we will keep everybody safe during the travel, stay and return. And read information about what we need from you to make this as safe as possible"

const leadersEmoji = "👩🏻‍🏫";
const leadersHeader = "Our Leaders"+leadersEmoji;
const leadersText = "Read all about the ITTC-team´s coaches and leaders. Get the contact information of all coaches and leaders. They will gladly answer any question you may have.";

const aboutUsEmoji= "🏆";
const aboutUsHeader = "About Us "+aboutUsEmoji;
const aboutUsText = "Read about ITTC, our goals and motivation for the holding the camp. Here you can also learn more about the camp and see what we are all about!";

const singUpEmoji = "🤝";
const signUpHeader = "Sign Up "+singUpEmoji
const signUpText = "Read about prices and how to sign up here. Please read the following about payment and inforamation precidures"

export default function Plan(props) {
    return (
        <>
        <HeaderWrap>
        <StyledTextSectionHeader>Welcome to ITTC! <StyledText>What would you like to know about us?</StyledText> </StyledTextSectionHeader>
        </HeaderWrap>
        <Wrapper>
        <PlanLinkDiv to="/aboutus" header={aboutUsHeader} text={aboutUsText}/>
       <PlanLinkDiv to="/leaders" header={leadersHeader} text={leadersText}/>
       <PlanLinkDiv to="/safety" header={safteyHeader} text={safteyText}/>
       <PlanLinkDiv to="/plan" header={travelHeader} text={travelText} />
       <PlanLinkDiv to="/stay" header={stayHeader} text={stayText}/>
       <PlanLinkDiv to="/Signup" header={signUpHeader} text={signUpText}/>
        </Wrapper>
        <HeaderWrap><StyledText>Click one of the links to read more about each category.</StyledText></HeaderWrap>
        </>
    )
}