import React from "react";
import styled from 'styled-components';
import StyledDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from "../styleguides/StyledText";
import { StyledTextSectionHeader } from "../styleguides/StyledtextSectionHeader";
import { Wrapper } from "../styleguides/StyledTextBoxWrapper";
import Logo from '../Logo2.png';

const pingPongEmoji = "🏓";

const StyledImageLogo = styled.img`
width: 18%;
margin: 2rem 2rem 0 0 ;

`;


export default function Home() {
  return (
    <Wrapper>
      <StyledDiv>
        <StyledTextSectionHeader>Welcome to International Table Tennis Camp!{pingPongEmoji}</StyledTextSectionHeader>
        <StyledText>
          We in ITTC-Team are proud to introduce what we consider to be the best opportunity for players in north-Europe to improve their table tennis game. We’ve been planning this for great period of time now, and we are finally ready!
 </StyledText>

        <StyledText>
          In two groups we will travel all together 40 players to the land of opportunities, you guesst it, China!
          We want to make this camp a great experience for all the participants as possible, but we know that this has a different meaning for different people.
          So, therefore we’ve decided to divide the groups according to the motivation and goals for the different players.
          This lead to this conclusion;
</StyledText>
        <StyledText>
          The first group is intended for everybody, no matter level or motivation. Of course the main goal is to learn as much table tennis as possible. But in this camp, the social and cultural part will also be a part of the camp. We also want you to fill in the application form even though you are joining this group. The most important here is that you write about your goals. When we say goals, it means your intension of joining the camp, as much as your table tennis goal. We want to know this so we can adjust the camp accordingly.
</StyledText>

        <StyledText>In this camp you will:</StyledText>
        <ul>
          <li key="0">Experience high quality training with Chinese players.</li>
          <li key="1">Enjoy nice company and experience the culture with fellow travelers.</li>
        </ul>
        <StyledText>
          The second group will come 2 weeks later, and is intended for people whom clearly has a goal of learning table tennis and practice hard and professional all three weeks. There will be room for breaks and thus seizing, but we recommend this group to rest whenever they have time. It doesn’t matter witch level you’re at, the important part is the motivation and dreams.
</StyledText>
        <StyledText>In this camp you will:</StyledText>
        <ul>
          <li key="2">Experience high quality training with Chinese players.</li>
          <li key="3">Enjoy nice company and experience the culture with fellow travelers.</li>
        </ul>
      </StyledDiv>
      <StyledImageLogo src={Logo} />
    </Wrapper>
  );
}
