import React, { useState } from "react";
import styled from 'styled-components';
import StyledDiv from '../../styleguides/StyledTextBoxDiv';
import { StyledText } from "../../styleguides/StyledText";
import { StyledTextSectionHeader } from "../../styleguides/StyledSectionHeader";
import { StyledH3 } from "../../styleguides/Styledh3";
import { ScrollTop } from "../../utils/ScrollToTopp";
import { StyledSTextSectionHeader } from "../../styleguides/StyledSemiTextSectionHeader";
import { StyledATagLink } from '../../styleguides/StyledATagLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledList } from "../../styleguides/StyledList";
import { StyledListUnit } from "../../styleguides/StyledListUnit";
import { InfoBox } from "../../styleguides/StyledInfoBox";

export const StyledATagLinkLocal = styled.a`
  color: black;
  cursor: pointer;
  border-radius: 15px;
  &:hover{
    color: #1f448c;
  }
`

const StyledIcon = styled.a`
justify-content: center;
align-items:center;
text-decoration: none;
margin: 1rem;
  color:  black;
  cursor: pointer;
  font-size: 2rem;
  &:hover{
    color: #283ca6;
    font-size: 2.2rem;;
  }
  @media (max-width: 910px){
    
  }
`;


export default function AboutUs(props) {
  const [hoverState, setHoverState] = useState(false);
  const [signUpIconState, setSignUpIconState] = useState("door-closed");
  const mediaQueryMaxWidth = window.matchMedia("(max-width: 1050px)");

  const mediaDoor =(mediaQueryMaxWidthProp)=>{
      if(mediaQueryMaxWidthProp.matches && signUpIconState !== "door-open"){
          setSignUpIconState("door-open");
      } else if(!mediaQueryMaxWidthProp.matches && signUpIconState === "door-open"){
       setSignUpIconState("door-closed");
      }
  }
  if(mediaQueryMaxWidth.matches && signUpIconState !== "door-open"){
    mediaDoor(mediaQueryMaxWidth);
  }
  mediaQueryMaxWidth.addListener(mediaDoor);
  
  const signUpItemOnHoverEffectToggle = () => {
    setHoverState(!hoverState);
    // setHoverState(!hoverState);
    hoverState ? setSignUpIconState("door-closed") : setSignUpIconState("door-open");
  }

  ScrollTop();

  return (
      <StyledDiv>

        <StyledTextSectionHeader style={{textAlign: "center"}}>About ITTC</StyledTextSectionHeader>
        <StyledSTextSectionHeader>Our Goals</StyledSTextSectionHeader>
        <StyledText>
          Our goal is to make table tennis camps that are of high quality for all levels and ages,
           where quick development and the social aspect is the main focus.
          Our goal is to create a platform where life lasting memories can be made together with people from all around the world.
          Everyone in the ITTC-team are ambitious people who aim high, which we are certain will result in camps where the goals above are achieved and surpassed.

        </StyledText>
        <StyledSTextSectionHeader>What We Offer</StyledSTextSectionHeader>
        <StyledText>
          In the International Table Tennis Camp we aim to deliver the highest level of practice for all levels and ages.
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
        <StyledSTextSectionHeader>Camp Norway</StyledSTextSectionHeader>
        <StyledText>
          ITTC invites you to join our first Camp in Norway 07.04.2020 - 10.04.2020.
          The camp will be arranged in a small place called Harestua.
           We want to start small and will therefore have a:
          </StyledText>
          <InfoBox>
        <StyledH3>
          <div>
            <StyledList>
              <StyledListUnit style={{listStyleType: "upper-roman"}}>Maximum of 32 participants</StyledListUnit>
              <StyledListUnit style={{listStyleType: "upper-roman"}}>Sign up deadline: 15.03.2020  </StyledListUnit>
            </StyledList>
          </div>
        </StyledH3>
        <StyledText style={{ margin: "40px 0"}}>
        <StyledIcon  
           onMouseEnter={() => signUpItemOnHoverEffectToggle()}
            onMouseLeave={() => signUpItemOnHoverEffectToggle()}
            onClick={() => { props.history.push("/signup") }} >
            <FontAwesomeIcon icon={signUpIconState} />
            Sign up
          </StyledIcon>
          </StyledText>

          </InfoBox>
        <StyledSTextSectionHeader>Camp Taiwan</StyledSTextSectionHeader>
        <StyledText>
          ITTC invites you to join ITTCamp- Taiwan 22.06.2020 - 07.07.2020.
          We will practice with Taiwanese and Chinese sparring partners during the camp.
          The facility has players of all levels, which makes the camp suitable for every table tennis enthusiast, whatever age or level.
          The professional coaches at the table tennis center in Taiwan will be coaching you together with our coaches from ITTC.
          </StyledText>
          <StyledText>
          The camp will be arranged in a town called Tao Yuan.
          We are looking forward to showing you the country and culture of Taiwan, as well as the top notch training facilities there.
          Taiwan is also very convenient to travel to because a visa is not required,
          which makes the travelling process easier and cheaper than travelling to China.
          We would also like to welcome parents and coaches to this camp.
          Everyone will live at the same hotel and eat the meals together.
          We will do our best to make this an experience that every participant, parent and coach can look back on
          as an outstanding camp where they learned, developed and made memories for life.
          To ensure the quality of the camp we have chosen a:
        </StyledText>
        <InfoBox>
        <StyledH3>
          <StyledList >
            <StyledListUnit style={{listStyleType: "upper-roman"}}> Maximum of 30 players </StyledListUnit>
            <StyledListUnit style={{listStyleType: "upper-roman"}}> Deadline: 20.03.2020  
            </StyledListUnit>
          </StyledList>
        </StyledH3>
        <StyledText style={{ margin: "40px 0"}}>
        <StyledIcon  
           onMouseEnter={() => signUpItemOnHoverEffectToggle()}
            onMouseLeave={() => signUpItemOnHoverEffectToggle()}
            onClick={() => { props.history.push("/signup") }} >
            <FontAwesomeIcon icon={signUpIconState} />
            Sign up
          </StyledIcon>
          </StyledText>
          </InfoBox>

          <StyledText style={{marginTop: "20px"}}>We are looking forward to see you soon at one of our camps! 
          We hope that you are as excited as we are. </StyledText>        
          Kind reagards:
           <StyledText> - International Table Tennis Camp Team</StyledText>
           <StyledText>
             <StyledATagLink 
             onClick={() => { props.history.push("/home") }} 
             style={{textAlign: "center"}}>
               Travel back home
               </StyledATagLink>
           </StyledText>
      </StyledDiv>
  );
}
