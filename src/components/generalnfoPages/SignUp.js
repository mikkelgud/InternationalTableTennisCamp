import React from 'react';
import styled from 'styled-components';
import StyledDiv from '../../styleguides/StyledDivForSignUp';
import { StyledText } from '../../styleguides/StyledText';
import { StyledATagLink } from '../../styleguides/StyledATagLink';
import { StyledSTextSectionHeader } from '../../styleguides/StyledSemiTextSectionHeader.js';
import { ScrollTop } from '../../utils/ScrollToTopp';
import ApplicationForm from "../../Assets/ApplicationITTCAMP.docx";
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import campNorway from '../../Assets/campHarestua.jpg';
import campTaiwan from '../../Assets/campTaiwan.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MyWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-wrap: wrap;
 `;

const StyledSmalBox = styled.div`
width: 50%;
background-color: #00000091;
border-radius: 25px;
padding: 3.8rem 2.8rem;
border: 17px solid #ffffff68;
margin: 2rem 1rem;
align-items: center;
justify-content: center;

@media(max-width: 800px){
    width: 100%;
    margin: 1rem 0;
    padding: 3.8rem 0.5rem;
}

&:hover{
background-color: #00020a91;
}
 `;

 const StyledListLocal = styled.li`
 
 `


export default function SignUp(props) {
    ScrollTop();
    return (
        <MyWrapper>
            <StyledDiv
                backgroundN={"linear-gradient(rgba(226, 234, 255) 0%, rgba(255,255,255,1) 30%);"}>
                <StyledTextSectionHeader
                    style={{ textAlign: "center" }}>
                    Sign Up For Your Camp!
                    </StyledTextSectionHeader>
                    <br />
                <StyledText
                    style={{ textAlign: "center" }}>
                        1. Fill in the  <StyledATagLink
                        href={ApplicationForm}> <FontAwesomeIcon icon={"file-download"}/>Sign up form</StyledATagLink>.
                    <br />
                    <br />
                    2. Send the form to
                   <StyledATagLink
                        href="mailto: join@ittcamp.com"> Join@ittcamp.com</StyledATagLink>. 
                        <br/>
                        <br/>
                        3. Get a confirmation mail from us with payment information.
                      </StyledText>
            </StyledDiv>
            <StyledDiv
            // "https://images.finncdn.no/dynamic/1600w/2019/8/vertical-2/26/5/156/033/335_430297305.jpg"
                background={campNorway}>
                <StyledSTextSectionHeader style={{
                    fontSize: "2.6rem",
                    color: "#ffffff",
                    textAlign: "center",
                    marginBottom: "50px",
                    textShadow: "4px 4px black"
                }}>
                    Camp Norway   07.04.2020-10.04.2020
                         </StyledSTextSectionHeader>
                <br />
                <br />
                <StyledSmalBox>
                <StyledText style={{
                    textShadow: "2px 2px black",
                    textAlign: "left",
                    color: "#ffffff",
                    fontSize: "1.7rem",
                    fontWeight: "lighter"
                }}>
                    <ul>
                        <li>  4 days: 2 400 NOK (≈240 Euro)  </li><br />
                        <li>  Deadline: 15.03.2020 </li><br />
                        <StyledATagLink 
                        style={{ color: "#acb9ff" }}
                        onClick={() => { props.history.push("/stay/Norway") }}> 
                        <li>Read more about Camp Norway</li> </StyledATagLink><br />
                    </ul>
                </StyledText>
                </StyledSmalBox>
                <br />
            </StyledDiv>
            <StyledDiv
                background={campTaiwan}>
                <StyledSTextSectionHeader style={{
                    color: "white",
                    fontSize: "2.6rem",
                    marginBottom: "50px",
                    textAlign: "center",
                    textShadow: "4px 4px black" }}>
                    Camp Taiwan 22.06.2020-07.07.2020
                    </StyledSTextSectionHeader>
                <br />
                <br />
                <br />
                <br />
                <StyledSmalBox>
                <StyledText
                    style={{
                        textAlign: "left",
                        color: "#ffffff",
                        fontSize: "1.7rem",
                        fontWeight: "lighter",
                        textShadow: "2px 2px black"}}>
                    <ul>
                        <li> 16 Days for participant: 12 750 NOK (≈1 275 Euro)</li>
                        <br />
                        <li> 16 Days for tourist/parent: 10 750 NOK (≈700 Euro)</li>
                        <br />
                        <li> And an additional cost of 7000 NOK (≈700 Euro) for the flight ticket from Gardemoen or kastrup</li>
                        <br />
                        <StyledListLocal>All travelers to Taiwan must hold a passport valid for at least 6 months from arrival day. </StyledListLocal>
                        <br />
                        <StyledListLocal >There's NO need for a visa to enter Taiwan.</StyledListLocal>
                        <br />
                        <StyledListLocal>Deadline: 20.03.2020</StyledListLocal>
                        <br/>
                        <StyledATagLink
                            style={{ color: "#acb9ff" }}
                            onClick={() => {
                                props.history.push("/stay/Taiwan")
                            }}><StyledListLocal>
                            Read more about camp Taiwan
                            </StyledListLocal>
                                </StyledATagLink>                         
                    </ul>
                </StyledText>
                </StyledSmalBox>
                <br />
            </StyledDiv>
            <StyledDiv
                backgroundN={"linear-gradient(rgb(241, 242, 255) 0%,rgb(255, 255, 255) 100%);"}>
                <StyledTextSectionHeader
                    style={{ textAlign: "center" }}>
                    Looking forward to seeing you
                    </StyledTextSectionHeader>
                <StyledText
                    style={{ textAlign: "center" }}>
                    <br />
                    You sign up by sending the
<StyledATagLink
                        href={ApplicationForm}> <FontAwesomeIcon icon={"file-download"}/>Sign up form </StyledATagLink>
                    to
<StyledATagLink
                        href="mailto: join@ittcamp.com"> Join@ittcamp.com
</StyledATagLink>.
</StyledText>
                <br />
                <br />
                <br />
                <br /> 
                <br />
            </StyledDiv>
        </MyWrapper>
    );
}