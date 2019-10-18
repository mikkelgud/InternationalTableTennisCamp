import React from 'react';
import styled from 'styled-components';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import StyledDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../../styleguides/StyledText';
import { StyledH3 } from '../../../styleguides/Styledh3';
import { ScrollTop } from '../../../utils/ScrollToTopp';
import { StyledATagLink } from '../../../styleguides/StyledATagLink';

const StyledTextLocal = styled.p`
font-size: 0.999999rem;
font-style: oblique;
`;

export default function Social(props) {
    ScrollTop();
    return (
        <StyledDiv>
            <StyledTextSectionHeader>Social life at the camp</StyledTextSectionHeader>
            <br/>
            <StyledText>
            <StyledH3>Sunday funday</StyledH3>
               Every sunday we will use for sightseeing around the city.
               Taiwan is a very special country with a lot of culture and history.
               This will be voluntary, but we would recomend to see as much as possible when first traveling so far.
               <br/>
               <br/>
             <StyledH3>Meals</StyledH3>
             We will go to restaurants and eat lunch and dinner every day (This is covered in the camp price).
             It's gonna be a great time to experience the culture and food with your new friends.
             We will also go to western restaurants, but be ready for everything 😉.
<StyledTextLocal> <StyledATagLink onClick={() => { props.history.push("schedule"); }}>Read more about meals during the camp.</StyledATagLink>     </StyledTextLocal>
<br/>

            <StyledH3>Meetings</StyledH3>
        After every practice, we will have small group talks to sum up the practises.
        During these conversations everyone will get the chance to tell about their experience during the practices.
        We belive that open honest conversations is the best way for making progress and to make a good enviorment.
        <br/>
        In some evenings we will look at table tennis matches on a big screen with the coaches telling what we can learn from the different matches.
        We will also spend some time working on the mental aspect of the game, and talk about tactics and mentality of the world-class players.
        Li Fen will also hold lectures based on her many experiences as a world-class player for many years.
        <br/>
        <br/>
        <StyledH3>Tournament</StyledH3>
        <StyledText>
            The last day we will have a tournament, more information will come at the camp.
            We are aiming to make it as realistic as possible so everyone can practice how to handle pressure and other mental topics they have learned during the camp.
            <br/>
            <br/>
        It will be a lot of fun! hope to see you in Tao Yuan 😊
        </StyledText>
            </StyledText>
        </StyledDiv>
        )
}