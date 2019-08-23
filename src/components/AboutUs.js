import React from "react";
import styled from 'styled-components';
import StyledDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from "../styleguides/StyledText";
import { StyledTextSectionHeader } from "../styleguides/StyledtextSectionHeader";
import Logo from '../Assets/Bordtennislogo.png';
import { Trans } from 'react-i18next';

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
@media (min-width: 1050px){

}
@media (max-width: 706px){

}
`;

const StyledImageLogo = styled.img`
width: 10%;
margin: 2rem 2rem 0 0 ;
`; 


export default function AboutUs() {
  return (
    <Wrapper>
      <StyledDiv>
      <Trans ><StyledTextSectionHeader>Welcome to ITTC  <StyledImageLogo src={Logo} /> </StyledTextSectionHeader></Trans>
        <StyledText>
          We in ITTC-Team are proud to introduce what we consider to be the best opportunity for tabel tennis players to improve their game. 
          We have been planning this for a great period of time, and we are finally ready!
 </StyledText>
        <StyledText>
          In two groups we will travel all together 40 players to the land of opportunities, you guesst it, China!
          We want to make this camps a great experience for all the participants as possible, but we know that this has a different meaning for different people.
          So, therefore we’ve decided to divide the groups according to the motivation and goals for the different players.
          This lead to this conclusion;
</StyledText>
        <StyledText>
          The first group is intended for everybody, no matter level or motivation.
           Of course the main goal is to learn as much table tennis as possible. 
           But in this camps, the social and cultural part will also be a part of the camps.
           We also want you to fill in the application form even though you are joining this group.
            The most important here is that you write about your goals.
            When we say goals, it means your intension of joining the camps, as much as your table tennis goal. 
          We want to know this so we can adjust the camps accordingly.
</StyledText>
      </StyledDiv>
    </Wrapper>
  );
}
