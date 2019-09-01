import React from "react";
import styled from 'styled-components';
import StyledDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from "../styleguides/StyledText";
import { StyledTextSectionHeader } from "../styleguides/StyledSectionHeader";
import Logo from '../Assets/Bordtennislogo.png';
import { Trans } from 'react-i18next';
import { StyledH3 } from "../styleguides/Styledh3";
import  StyledLink from "./LinkDivCard";
import { Wrapper } from "../styleguides/StyledTextBoxWrapper";

const LocalWrapper = styled.div`
display: flex;
align-items: space-in-between;
justify-content: center;
`;


const StyledImageLogo = styled.img`
width: 30px;
margin: 2rem 2rem 0 0 ;
`; 



export default function AboutUs() {
  return (
    <LocalWrapper>
      <StyledDiv>
      <Trans ><StyledTextSectionHeader>Welcome to ITTC<StyledImageLogo src={Logo} /> </StyledTextSectionHeader></Trans>
        <br/>
        <StyledH3>What we offer</StyledH3>
        <StyledText>
          We deliver the higest level of practice with proffesional practice program, coaches and sparring.
          With the best of facilities, team and spirit, we hope to make an unforgettable experience for every participant.
          We have a promise that everyone of our camp memebers, will reach the next step in their table tennis career. 
          And we are sure that the new knowlede you get from our camps,
           will make it clear what you have to work with in the future, to reach even new leves.
          We also offer a great social experience, and hopefully you will find life lasting relationships on our camps.
          At the moment we offer 3 camps in respectively Norway, Poland and China.
          Keep up with ittcamp.com to get the newest information about our camps.
        </StyledText>
        <StyledText>
       <Wrapper>
          <div>
        <StyledH3> We are a group of 3 Leaders;<br/></StyledH3>
         <StyledLink to="/leaders/Li-Fen" text="Li Fen"></StyledLink><br/>
         <StyledLink to="/leaders/Mikkel-Gudmundsen" text="Mikkel Gudmundsen"></StyledLink><br/>
         <StyledLink to="/leaders/Hilding-Persson" text="Hilding Persson"></StyledLink><br/>
         </div>
         <div>
         <StyledH3> 2 Empolyed coaches;<br/></StyledH3>
         <StyledLink to="/leaders/Maria-Xiao" text="Maria Xiao"/><br/>
         <StyledLink to="/leaders/Oscar-Perman" text="Oscar Perman"/><br/>
         <StyledLink to="/leaders" text="»Read about leaders«"/><br/>
         </div>
         <div>
           <StyledH3>And our dear volunteers</StyledH3>
           <StyledText>  This wouldn't be possible<br/>
            without you <span role="img" aria-label="glory">😇</span> <br/>
           Thank you! <br/></StyledText>
         </div>
         </Wrapper>

     
     </StyledText>
      </StyledDiv>
    </LocalWrapper>
  );
}
