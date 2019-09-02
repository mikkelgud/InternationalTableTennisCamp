import React from "react";
import styled from 'styled-components';
import StyledDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from "../styleguides/StyledText";
import { StyledTextSectionHeader } from "../styleguides/StyledSectionHeader";
import Logo from '../Assets/Bordtennislogo.png';
import { StyledH3 } from "../styleguides/Styledh3";
import { Wrapper } from "../styleguides/StyledTextBoxWrapper";
import { ScrollTop } from "../utils/ScrollToTopp";
import { StyledSTextSectionHeader } from "../styleguides/StyledSemiTextSectionHeader";
import { StyledATagLink } from "../styleguides/StyledATagLink";
import ApplicationForm from "../Assets/ApplicationITTCAMP.docx";

const LocalWrapper = styled.div`
display: flex;
align-items: space-in-between;
justify-content: center;
`;


const StyledImageLogo = styled.img`
width: 10px;
height: 10px;
margin: -38px 333px 28px;
 @media (max-width: 432px){
   display: none;
 }
`; 

const LeadersHeaderWrapper = styled.div`
display: flex;
align-items: felx-start;
justify-content: felx-start;
margin-left: 2rem;
`



export default function AboutUs(props) {
  ScrollTop();
  return (
    <LocalWrapper>
      <StyledDiv>
      <StyledTextSectionHeader>Welcome to ITTC! </StyledTextSectionHeader>
      <br/>
        <StyledSTextSectionHeader>About us</StyledSTextSectionHeader>
        <br/>
        <StyledH3>Our goals</StyledH3>
        <StyledText>
        Our Goal is to make the best table tennis camps in the world.
        We wanna make great experiences where people from all over the world, get togheter for one common goal.
        Everyone in the ITTC-team are ambitious people who aim high, and belive we will reach our goal one time in the future.
        We will start small and try to build it step by step so every camp can be at the highest quality.
        </StyledText>
        <br/>
        <StyledH3>We offer</StyledH3>
        <StyledText>
          We in International table tennis camp will deliver the higest level of practice for all levels.
          With a proffesional practice program, world-class coaches, custom sparring, 
          the best possible facilities and a positiv and high-skilled team with great spirit we hope to make an unforgettable experience for every participant.
          We have a goal that everyone of our camp members, will reach the next step in their table tennis career during our camps. 
          And we are sure that with the new knowledge absored and with the right guidance,
          it will be clear what you have to work with in the future.
          We also offer a great social experience, and hopefully you will find life lasting relationships on our camps.
          At the moment we offer 3 camps in respectively Norway, Poland and China.
          Keep up with ittcamp.com to get the newest information about our camps.
        </StyledText>
        <br/>
        <br/>
        <StyledSTextSectionHeader>Our first camp</StyledSTextSectionHeader>
        <br/>
        <StyledH3>Camp Norway -From xx.xx.xxxx too xx.xx.xxxx</StyledH3>
        <StyledText>
          Harestua IL and ITTC invite you to join ITTCamp- Harestua 
          Camp Norway will be arrange in a small place called Harestua.
          With our strategy; "start small and build it up step by step with high quality", no place would be more suitable.
          Because of the short notice, there are two conditions that we had to make for it to be possible for us to complete the camp.
          </StyledText>
          <br/>
          <StyledH3>
          <ol>
            <li>Minimum of x participants.</li>
         <br/>
            <li>Maximum of x participants</li>
          </ol>
          <br/>
          </StyledH3>
        <StyledH3>How we choose the x participants</StyledH3>
        <StyledText>
          We don't care about your level, we care about your motivation and spirit.
          Although this are often equivalent.
          Therefore the Registration/sign up for the camp will be done with filling in this
          <StyledATagLink href={ApplicationForm}> Application form</StyledATagLink>, and send it to 
           <StyledATagLink href="mailto: join@ittcamp.com"> THIS EMAIL: join@ittcamp.com</StyledATagLink>
        </StyledText>
        <br/>
        <br/>
        <LeadersHeaderWrapper>
        <StyledSTextSectionHeader>Our Team</StyledSTextSectionHeader>
        </LeadersHeaderWrapper>
        <StyledText>
       <Wrapper>
          <div>
        <StyledH3> We are a group of 3 Leaders;<br/></StyledH3>
       <StyledATagLink onClick={() => { props.history.push("/leaders/Li-Fen"); }}>Li Fen</StyledATagLink><br/>
       <StyledATagLink onClick={() => { props.history.push("/leaders/Mikkel-Gudmundsen"); }}>Mikkel Gudmundsen</StyledATagLink><br/>
       <StyledATagLink onClick={() => { props.history.push("/leaders/Hilding-Persson"); }}>Hilding Persson</StyledATagLink><br/>
         </div>
         <div>
         <StyledH3> 2 Empolyed coaches and other contributers;<br/></StyledH3>
         <StyledATagLink onClick={() => { props.history.push("/leaders/Maria-Xiao"); }}>Maria Xiao</StyledATagLink><br/>
       <StyledATagLink onClick={() => { props.history.push("/leaders/Oscar-Perman"); }}>Oscar Perman</StyledATagLink><br/>
       <StyledATagLink onClick={() => { props.history.push("/leaders"); }}>»Read more about our team«</StyledATagLink><br/>
         </div>
         <div>
           <StyledH3>And our dear volunteers</StyledH3>
           <StyledText>  This wouldn't be possible<br/>
            without you <span role="img" aria-label="glory">😇</span> <br/>
           Thank you! <br/></StyledText>
         </div>
         </Wrapper>
         <LeadersHeaderWrapper>We hope to see you soon! <br/><br/>
         Kind reagards:<br/>
           - International Table Tennis Camp Team
           </LeadersHeaderWrapper> 
             <StyledImageLogo src={Logo} />
     </StyledText>
      </StyledDiv>
    </LocalWrapper>
  );
}
