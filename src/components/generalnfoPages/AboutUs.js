import React from "react";
import styled from 'styled-components';
import StyledDiv from '../../styleguides/StyledTextBoxDiv';
import { StyledText } from "../../styleguides/StyledText";
import { StyledTextSectionHeader } from "../../styleguides/StyledSectionHeader";
import Logo from '../../Assets/Bordtennislogo.png';
import { StyledH3 } from "../../styleguides/Styledh3";
import { Wrapper } from "../../styleguides/StyledTextBoxWrapper";
import { ScrollTop } from "../../utils/ScrollToTopp";
import { StyledSTextSectionHeader } from "../../styleguides/StyledSemiTextSectionHeader";
import { StyledATagLink } from '../../styleguides/StyledATagLink';
import ApplicationForm from "../../Assets/ApplicationITTCAMP.docx";

export const StyledATagLinkLocal = styled.a`
  color: black;
  cursor: pointer;
  border-radius: 15px;
  &:hover{
    color: #1f448c;
  }
`
const LinkVeiwMultiplier = styled.div`
background-color: #e4edffd6;
width: 100%;
height: 30px;
border-radius: 10px;
margin-top: -24px;
padding: 0 0 0 14px;
border: 0 0 3px 0 solid black;
cursor: pointer;

&:hover{
  background-color: #ffffff;
  box-shadow: 0px 0px 13px 4px rgba(0,0,0,0.2);
  color: #1f448c;
}
`

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
        <br />
        <StyledSTextSectionHeader>About us</StyledSTextSectionHeader>
        <br />
        <StyledH3>Our goals</StyledH3>
        <StyledText>
          Our goal is to make the most developing, higest quality and greatest socially table tennis camps in the world for everyone, at any level.
          We wanna make great experiences where people from all over the world, get togheter for one common goal.
          Everyone in the ITTC-team are ambitious people who aim high. We all hope and belive that one time in the future, we can reach that goal.
          We will start small and try to build it step by step, so every camp can be at the highest quality from the start.
        </StyledText>
        <br />
        <StyledH3>We offer</StyledH3>
        <StyledText>
          We in International table tennis camp will deliver the higest level of practice for all levels.
          With a proffesional practice program, world-class coaches, custom sparring,
          the best possible facilities and a high-skilled team with great spirit,
           we hope to make an unforgettable experience for every participant.
          We have a goal that everyone of our camp members, will reach the next step in their table tennis career during our camps.
          And we are sure that with the new knowledge absored and with the right guidance,
          it will be clear what you have to work with in the future.
          We offer great social experiences, and hopefully you will find life lasting relationships on our camps.
          At the moment we offer 3 camps in respectively Norway, Poland and China.
          Keep up with ittcamp.com to get the newest information about our camps.
        </StyledText>
        <br />
        <br />
        <StyledSTextSectionHeader>Our first camp</StyledSTextSectionHeader>
        <br />
        <StyledH3>Camp Norway</StyledH3>
        <StyledText>
          Harestua IL and ITTC invite you to join ITTCamp- Harestua
          Camp Norway will be arrange in a small place called Harestua.
          With our strategy; "start small and build it up step by step with high quality", no place would be more suitable.
          Because of the short notice, there are two conditions that we had to make for it to be possible for us to complete the camp.
          </StyledText>
        <br />
        <StyledH3>
          <ol>
            <li>Minimum of 16 participants.</li>
            <br />
            <li>Maximum of 32 participants</li>
            <br />
            <li>Deadline: Monday. <br />
              (At this point everyone will receive the camp-status, and how many participants that will join camp.) </li>
          </ol>
          <br />

        </StyledH3>
        <StyledH3>How we choose the 32 participants</StyledH3>
        <StyledText>
          We don't care about your level, we care about your motivation and spirit.
          Although this are often equivalent.
          Therefore the Registration/sign up for the camp will be done by filling in this
          <StyledATagLinkLocal href={ApplicationForm}> sign up form</StyledATagLinkLocal>, and send it to
           <StyledATagLink href="mailto: join@ittcamp.com"> join@ittcamp.com</StyledATagLink>
        </StyledText>
        <br />
        <br />
        <LeadersHeaderWrapper>
          <StyledSTextSectionHeader>Our Team</StyledSTextSectionHeader>
          <StyledATagLink onClick={() => { props.history.push("/leaders"); }}>
               and leaders
              </StyledATagLink><br />
        </LeadersHeaderWrapper>
        <StyledText>
          <Wrapper>
            <div>
              <StyledH3> We are a group of 3 Leaders;<br /><br /></StyledH3>
              <StyledATagLink onClick={() => { props.history.push("/leaders/Li-Fen"); }}>
                <LinkVeiwMultiplier>Li Fen</LinkVeiwMultiplier>
              </StyledATagLink> <br />
              <StyledATagLink onClick={() => { props.history.push("/leaders/Mikkel-Gudmundsen"); }}>
                <LinkVeiwMultiplier>Mikkel Gudmundsen</LinkVeiwMultiplier>
              </StyledATagLink><br />
              <StyledATagLink onClick={() => { props.history.push("/leaders/Hilding-Persson"); }}>
                <LinkVeiwMultiplier>Hilding Persson</LinkVeiwMultiplier>
              </StyledATagLink><br />
             
            </div>
            <div>
              <StyledH3> 3 Empolyed coaches;<br /><br /></StyledH3>
              <StyledATagLink onClick={() => { props.history.push("/leaders/Maria-Xiao"); }}>
                <LinkVeiwMultiplier>Maria Xiao</LinkVeiwMultiplier>
              </StyledATagLink><br />
              <StyledATagLink onClick={() => { props.history.push("/leaders/Oscar-Perman"); }}>
                <LinkVeiwMultiplier>Oscar Perman</LinkVeiwMultiplier>
              </StyledATagLink><br />
              <StyledATagLink onClick={() => { props.history.push("/leaders/Eskil-Lindholm"); }}>
                <LinkVeiwMultiplier>Eskil Lindholm</LinkVeiwMultiplier>
              </StyledATagLink><br />
            
            </div>
            <div>
              <StyledH3>And our sponsors and other contributers:<br /><br /></StyledH3>
              <LinkVeiwMultiplier><StyledATagLink href="http://www.classiccatering.no" target="blank">Classic catering</StyledATagLink></LinkVeiwMultiplier><br />
              <LinkVeiwMultiplier><StyledATagLink href="https://www.harestua.info/harestua-il/bordtennis.html" target="blank">Harestua IL</StyledATagLink></LinkVeiwMultiplier><br />
              <LinkVeiwMultiplier><StyledATagLink href="https://www.ttex.no" target="blank">TTEX oslo</StyledATagLink></LinkVeiwMultiplier>
            </div>
          </Wrapper>
          <LeadersHeaderWrapper>We hope to see you soon! <br /><br />
            Kind reagards:<br />
            - International Table Tennis Camp Team
           </LeadersHeaderWrapper>
          <StyledImageLogo src={Logo} />
        </StyledText>
      </StyledDiv>
    </LocalWrapper>
  );
}
