import React, { useState } from "react";
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <StyledTextSectionHeader>Welcome to ITTC! </StyledTextSectionHeader>
        <br />
        <StyledSTextSectionHeader>About Us</StyledSTextSectionHeader>
        <br />
        <StyledH3>Our Goals</StyledH3>
        <StyledText>
          Our goal is to make table tennis camps that are of high quality for all levels and ages, where quick development and the social aspect is the main focus. 
      
          Our goal is to create a platform where life lasting memories can be made together with people from all around the world.
          Everyone in the ITTC-team are ambitious people who aim high, which we are certain will result in a camp where the goals above are achieved and surpassed.
          
        </StyledText>
        <br />
        <StyledH3>What We Offer</StyledH3>
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
        <StyledSTextSectionHeader>Our First Camp</StyledSTextSectionHeader>
        <br />
        <StyledH3>Camp Norway</StyledH3>
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
        <StyledSTextSectionHeader>Our Second Camp</StyledSTextSectionHeader>
        <br />
        <StyledH3>Camp Taiwan</StyledH3>
        <br />
        <StyledText>
          ITTC invites you to join ITTCamp- Taiwan 22.06.2020 - 07.07.2020.
          We will practice with Taiwanese and Chinese sparring partners during the camp.
          The facility has players of all levels, which makes the camp suitable for every table tennis enthusiast, whatever age or level.
          The professional coaches at the table tennis center in Taiwan will be coaching, together with translations from Li Fen and Mikkel (if needed).
          
          <br />
          <br />
          The camp will be arranged in a town called Tao Yuan.
          We are looking forward to showing you the country and culture of Taiwan, as well as the top notch training facilities there. 
      
          Taiwan is also very convenient to travel to because a visa is not required,
          which makes the travelling process a lot easier and much cheaper than travelling to China.
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
        </StyledText>
        <StyledText>
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
        <LeadersHeaderWrapper>
          <StyledSTextSectionHeader>Our Team</StyledSTextSectionHeader>
          <StyledATagLink onClick={() => { props.history.push("/leaders"); }}>
            Leaders
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
              <StyledH3>Empolyed coaches;<br /><br /></StyledH3>
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
