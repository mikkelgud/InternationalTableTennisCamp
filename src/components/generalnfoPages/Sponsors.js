import React from 'react';
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import StyledTextBoxDiv from '../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../styleguides/StyledText';
import { StyledATagLink } from '../../styleguides/StyledATagLink';
import { StyledImage } from '../../styleguides/StyledImage';
import classiccatering from '../../Assets/classic.png';
// import ttex from '../../Assets/ttex.png';
import styled from 'styled-components';
import { StyledH3 } from '../../styleguides/Styledh3';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { ScrollTop } from "../../utils/ScrollToTopp";

const LocalWrapper = styled.div`
display: flex;
    margin-top: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const LocalContainer = styled.div`
display: flex;
width: 50%;
align-items: center;
    justify-content: center;
    margin: 4rem 0;
@media (max-width: 910px){
width 100%;
}
`;
const StyledIcon = styled.a`
text-decoration: none;
display: flex;
  color:  black;
  cursor: pointer;
  font-size: 6rem;
  justify-content: center;
  align-items: center;
  transition: all 0.1131s ease-in-out;
  &:hover{
    color: #283ca6;
    font-size: 7rem;
  }
`;


const Sponsors = () => {
    ScrollTop();
    return (
        <StyledTextBoxDiv >
            <StyledTextSectionHeader style={{textAlign: "center"}}>Our Sponsors And Contributors </StyledTextSectionHeader>
            <StyledText style={{textAlign: "center"}}>
                We are proud that these companies, clubs and Organizations have faith in our camps and we would officaly
                thank all of them. This wouldn't be possible without you.
    </StyledText>
            <LocalWrapper>
                <LocalContainer>
                    <StyledATagLink href="http://www.classiccatering.no" target="blank"><StyledImage src={classiccatering} /></StyledATagLink>
                    {/* <StyledATagLink href="https://www.ttex.no" target="blank"><StyledImage src={ttex} /></StyledATagLink> */}
                </LocalContainer>
               
            </LocalWrapper>
           <StyledH3 style={{textAlign: "center"}}>Wanna be our sponsor?</StyledH3>
            <StyledText style={{textAlign: "center"}}>
               Click the "Contact Us"-icon below and send us an E-mail.
              <StyledIcon href="mailto: contactus@ittcamp.com">
              <FontAwesomeIcon icon={["far","comments"]} />
                  </StyledIcon> 
           </StyledText>
        </StyledTextBoxDiv>
    )
}
export default Sponsors;