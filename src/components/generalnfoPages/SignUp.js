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
                <StyledText>
                07.04.2020 - 10.04.2020<br/>
                    You sign up by sending the
                <StyledATagLink href={ApplicationForm}> Sign up form </StyledATagLink>
                    to  <StyledATagLink href="mailto: join@ittcamp.com"> Join@ittcamp.com</StyledATagLink>
                </StyledText>
                <br />
                <ul>
                    <li>
                       1 300 Norwegian krones
                    </li>
                    <br/>
                <li>Deadline: 15.03.2020</li>

                </ul>
                <br />
                <StyledATagLink onClick={() => { props.history.push("/stay/Norway/prices") }}>Read more about Prices</StyledATagLink>
            </StyledDiv>
            <StyledDiv>
                <HeaderAligner> <StyledSTextSectionHeader>Sign up to camp Taiwan<span role="img" aria-label="PO-flag">🇹🇼</span></StyledSTextSectionHeader></HeaderAligner>
                <StyledText>
                22.06.2020 - 07.07.2020<br/>
                    You sign up by sending the<StyledATagLink href={ApplicationForm}> Sign up form </StyledATagLink> to
                        <StyledATagLink href="mailto: join@ittcamp.com"> Join@ittcamp.com</StyledATagLink>
                </StyledText>
                <br />
                <ul>
                <li> 16 days: 11 000 Norwegian krones</li>
                <StyledATagLink onClick={() => { props.history.push("/stay/Taiwan/prices") }}>Read more about Prices</StyledATagLink>
                <br/>
                <br/>
                <li>+ flight 6-7000 Norwegian krones (Depends where you fly from)</li>
                <StyledATagLink onClick={() => { props.history.push("/stay/Taiwan/travel") }}>Read more about the travel</StyledATagLink>
                <br/>
                <br/>
                <li>All travelers to Taiwan must hold a passport valid for at least 6 months from arrival day. </li>   
                <br/>
                <br/>
                <li>Deadline: 20.03.2020</li>
                </ul>
                <br />
                <br/>
                
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