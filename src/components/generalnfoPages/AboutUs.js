import React, { useState } from "react";
import styled from 'styled-components';
import StyledDiv from '../../styleguides/StyledTextBoxDiv';
import { StyledText } from "../../styleguides/StyledText";
import { StyledTextSectionHeader } from "../../styleguides/StyledSectionHeader";
import Logo from '../../Assets/Bordtennislogo.png';
import { StyledH3 } from "../../styleguides/Styledh3";
import { ScrollTop } from "../../utils/ScrollToTopp";
import { StyledSTextSectionHeader } from "../../styleguides/StyledSemiTextSectionHeader";
import { StyledATagLink } from '../../styleguides/StyledATagLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledATagLinkLocal = styled.a`
  color: black;
  cursor: pointer;
  border-radius: 15px;
  &:hover{
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
margin: -38px 370px 21px;
@media (max-width: 554px){
  margin: -38px 82px 21px;
 }
 @media (max-width: 500px){
  margin: -38px 371px 21px;
 }
 @media (max-width: 456px){
  margin: -38px 82px 21px;
 }

 @media (max-width: 400px){
  margin: -38px 136px 21px;
 }
 @media (max-width: 342px){
  margin: -38px 196px 21px;
 }
 
`;

const LeadersHeaderWrapper = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
margin-left: 2rem;
`;

const StyledIcon = styled.a`
justify-content: center;
align-items:center;
text-decoration: none;
margin: 1rem;
  color:  black;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  &:hover{
    color: #283ca6;
    font-size: 2.2rem;;
  }
  @media (max-width: 910px){
    
  }
`;

const SomeAligner = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export default function AboutUs(props) {
  const [hoverState, setHoverState] = useState(false);
  const [signUpIconState, setSignUpIconState] = useState("door-closed");

  const signUpItemOnHoverEffectToggle = () => {
    setHoverState(!hoverState);
    // setHoverState(!hoverState);
    hoverState ? setSignUpIconState("door-closed") : setSignUpIconState("door-open");
  }
  ScrollTop();
  return (
    <LocalWrapper>
      <StyledDiv>
        <SomeAligner>
        <StyledTextSectionHeader>About ITTC</StyledTextSectionHeader>
        </SomeAligner>
        <br />
        <br />
        <br />
        <StyledSTextSectionHeader>Our Goals</StyledSTextSectionHeader>
        <StyledText>
          Our goal is to make table tennis camps that are of high quality for all levels and ages,
           where quick development and the social aspect is the main focus.
          Our goal is to create a platform where life lasting memories can be made together with people from all around the world.
          Everyone in the ITTC-team are ambitious people who aim high, which we are certain will result in camps where the goals above are achieved and surpassed.

        </StyledText>
        <br />
        <br />
        <StyledSTextSectionHeader>What We Offer</StyledSTextSectionHeader>
        <StyledText>
          In the International Table Tennis Camp we aim to deliver the higest level of practice for all levels and ages.
          With a professional training program, world-class coaches, custom sparring,
          the best possible facilities and a high-skilled team with great spirit
          we hope to make an unforgettable experience for every participant.
          We have a goal that all participants at our camp will reach the next step
          in their table tennis career during our camps.
          We are certain that with the knowledge aquired throughout the camp this will be possible.
          We offer great social experiences, and hopefully you will find life lasting friends at our camps.
          At the moment we offer 2 camps in Norway and Taiwan, respectively.
          Keep up with ittcamp.com to get the latest information about our camps.
        </StyledText>
        <br />
        <br />
        <br />
        <SomeAligner> <StyledTextSectionHeader>Our First Camp</StyledTextSectionHeader></SomeAligner>
        <br />
        <StyledSTextSectionHeader>Camp Norway</StyledSTextSectionHeader>
        <br />
        <StyledText>
          ITTC invites you to join ITTCamp- Norway 07.04.2020 - 10.04.2020.
          The camp will be arranged in a small place called Harestua.
           We want to start small and will therefore have a:
          </StyledText>
        <br />
        <StyledH3>
          <div>
            <ol>
              <li>Maximum of 32 participants</li>
              <br />
              <li>Sign up deadline: 15.03.2020  </li>
            </ol>
          </div>
        </StyledH3>
        <StyledText>
        <br />

          <StyledIcon
            onMouseEnter={() => signUpItemOnHoverEffectToggle()}
            onMouseLeave={() => signUpItemOnHoverEffectToggle()}
            onClick={() => { props.history.push("/signup") }} >
            <FontAwesomeIcon icon={signUpIconState} />
            Sign up
          </StyledIcon>
        </StyledText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <SomeAligner>   <StyledTextSectionHeader>Our Second Camp</StyledTextSectionHeader></SomeAligner> 
        <br />
        <StyledSTextSectionHeader>Camp Taiwan</StyledSTextSectionHeader>
        <br />
        <StyledText>
          ITTC invites you to join ITTCamp- Taiwan 22.06.2020 - 07.07.2020.
          We will practice with Taiwanese and Chinese sparring partners during the camp.
          The facility has players of all levels, which makes the camp suitable for every table tennis enthusiast, whatever age or level.
          The professional coaches at the table tennis center in Taiwan will be coaching you together with our coaches from ITTC.
          <br />
          <br />
          The camp will be arranged in a town called Tao Yuan.
          We are looking forward to showing you the country and culture of Taiwan, as well as the top notch training facilities there.
          Taiwan is also very convenient to travel to because a visa is not required,
          which makes the travelling process easier and cheaper than travelling to China.
          We would also like to welcome parents and coaches to this camp.
          Everyone will live at the same hotel and eat the meals together.
          We will do our best to make this an experience that every participant, parent and coach can look back on
          as an outstanding camp where they learned, developed and made memories for life.
          To ensure the quality of the camp we have chosen a:
          <br />
        </StyledText>
        <StyledH3>
          <ol>
            <br />
            <li> Maximum of 30 players
               </li>
            <br />
            <li>
              Deadline: 20.03.2020
          </li>
          </ol>
        </StyledH3>
        <StyledText>
        <br />

          <StyledIcon
            onMouseEnter={() => signUpItemOnHoverEffectToggle()}
            onMouseLeave={() => signUpItemOnHoverEffectToggle()}
            onClick={() => { props.history.push("/signup") }} >
            <FontAwesomeIcon icon={signUpIconState} />
            Sign up
                        </StyledIcon>
        </StyledText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <StyledText>
          <LeadersHeaderWrapper>We are looking forward to see you soon at one of our camps! We hope that you are as excited as we are<br /><br />
            Kind reagards:<br /><br />
            - International Table Tennis Camp Team
           </LeadersHeaderWrapper>
          <StyledImageLogo src={Logo} /> <br/><br/><br/>
          <SomeAligner>
          <StyledATagLink onClick={() => { props.history.push("/home") }}>Travel back home</StyledATagLink>
          </SomeAligner>
        </StyledText>
      </StyledDiv>
    </LocalWrapper>
  );
}
