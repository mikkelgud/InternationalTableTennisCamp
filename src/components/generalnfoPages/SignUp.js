//Will have to use state with the stars
import React from 'react';
import styled from 'styled-components';
import StyledDiv from '../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../styleguides/StyledText';
import { StyledATagLink } from '../../styleguides/StyledATagLink';
import { StyledSTextSectionHeader } from '../../styleguides/StyledSemiTextSectionHeader.js';
import { ScrollTop } from '../../utils/ScrollToTopp';
import ApplicationForm from "../../Assets/ApplicationITTCAMP.docx";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import useLocalStorage from '../hooks/useLocalStorage';


export const StyledATagLinkLocal = styled.a`
  color: black;
  cursor: pointer;
  border-radius: 15px;
  &:hover{
text-decoration: none;

    color: #1f448c;
  }
`

const HeaderAligner = styled.div`
 display: flex;
 align-items: flex-start;
 justify-content: felx-start;
 `;

const MyWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-wrap: wrap;
 `;

export default function SignUp(props) {
    ScrollTop();
    // const [starState, setStarState] = useState();
    return (
        <MyWrapper>
            <StyledDiv>
                <HeaderAligner> <StyledSTextSectionHeader>Sign up to camp-Norway <span role="img" aria-label="NO-flag">🇳🇴</span></StyledSTextSectionHeader></HeaderAligner>
                <br />
                <ul>
                    <li>  07.04.2020 - 10.04.2020</li> 
                    <br/>
                    <li>2 200 NOK</li>
                    <br/>
                    <li>Deadline: 15.03.2020</li>
                </ul>
                <br />
                <StyledText>
                You sign up by sending the
                <StyledATagLink href={ApplicationForm}> Sign up form </StyledATagLink>
                    to  <StyledATagLink href="mailto: join@ittcamp.com"> Join@ittcamp.com</StyledATagLink><br/><br/>
                    </StyledText>
                <StyledATagLink onClick={() => { props.history.push("/stay/Norway/prices") }}>Read more about Prices</StyledATagLink>
            </StyledDiv>
            <StyledDiv>
                <HeaderAligner> <StyledSTextSectionHeader>Sign up to camp-Taiwan<span role="img" aria-label="PO-flag">🇹🇼</span></StyledSTextSectionHeader></HeaderAligner>
                <br />
                <ul>
                    <li>  22.06.2020 - 07.07.2020</li><br/>
                <li> 16 days: 12 750 NOK (10 750 NOK for companions)</li>
                <StyledATagLink onClick={() => { props.history.push("/stay/Taiwan/prices") }}>Read more about prices and what this includs</StyledATagLink>
                <br/>
                <br/>
                <li>+ flight 7000 NOK both ways</li>
                <StyledATagLink onClick={() => { props.history.push("/stay/Taiwan/travel") }}>Read more about the travel</StyledATagLink>
                <br/>
                <br/>
                <li>All travelers to Taiwan must hold a passport valid for at least 6 months from arrival day. </li>   
                <br/>
                <li>There's NO need for a visa to enter Taiwan.</li>   
                <br/>
                <li>Deadline: 20.03.2020</li>
                </ul>
                <br />
                <br/>
                <StyledText> You sign up by sending the<StyledATagLink href={ApplicationForm}> 
                Sign up form </StyledATagLink> to
                  <StyledATagLink href="mailto: join@ittcamp.com"> Join@ittcamp.com</StyledATagLink>
          </StyledText>
                
            </StyledDiv>
            <StyledDiv>
                <HeaderAligner> <StyledSTextSectionHeader>Sign up to camp-Poland<span role="img" aria-label="PO-flag">🇵🇱</span></StyledSTextSectionHeader></HeaderAligner>
                    <StyledText>
                        Coming soon...
                        <br/>
                        {/* <FontAwesomeIcon icon={["far","star"]}/>
                        <FontAwesomeIcon icon={["far","star"]}/>
                        <FontAwesomeIcon icon={["far","star"]}/>
                        <FontAwesomeIcon icon={["far","star"]}/>
                        <FontAwesomeIcon icon={["far","star"]}/> */}

                    </StyledText>
                    {/* You sign up by sending the application form to joinPoland@ittcamp.com */}
               
            </StyledDiv>
            <StyledDiv>
                <HeaderAligner> <StyledSTextSectionHeader>Sign up to camp-China<span role="img" aria-label="CH-flag">🇨🇳</span></StyledSTextSectionHeader></HeaderAligner>
                    <StyledText>Coming soon...
                    <br/>
                    {/* <FontAwesomeIcon icon={["far","star"]}/>
                        <FontAwesomeIcon icon={["far","star"]}/>
                        <FontAwesomeIcon icon={["far","star"]}/>
                        <FontAwesomeIcon icon={["far","star"]}/>
                        <FontAwesomeIcon icon={["far","star"]}/> */}

                    {/* You sign up by sending the application form to joinChina@ittcamp.com */}
                    </StyledText>
            </StyledDiv>
            <StyledDiv>
                <HeaderAligner> <StyledSTextSectionHeader>Anything else we can help you with?</StyledSTextSectionHeader></HeaderAligner>
              
                    <StyledText>Ask us any question at   <StyledATagLink href="mailto: contactus@ittcamp.com">contactus@ittcamp.com</StyledATagLink></StyledText>
               
            </StyledDiv>
        </MyWrapper>
    );
}