//Will have to use state with the stars
import React from 'react';
import styled from 'styled-components';
import StyledDiv from '../../styleguides/StyledDivForSignUp';
import { StyledText } from '../../styleguides/StyledText';
import { StyledATagLink } from '../../styleguides/StyledATagLink';
import { StyledSTextSectionHeader } from '../../styleguides/StyledSemiTextSectionHeader.js';
import { ScrollTop } from '../../utils/ScrollToTopp';
import ApplicationForm from "../../Assets/ApplicationITTCAMP.docx";
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import useLocalStorage from '../hooks/useLocalStorage';
import campNorway from '../../Assets/campHarestua.jpg';
import campTaiwan from '../../Assets/campTaiwan.jpg';


const StyledH3 = styled.h3`
font-weight: light;
font-size: 1.4rem;
font-family: 'roboto', sans-serif;
textAlign: center;
 margin: 0 0 150px 0;
`;


const MyWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-wrap: wrap;
 `;

 const StyledListLocal = styled.li`

 `;


export default function SignUp(props) {
    ScrollTop();
    // todo: dsfjodsjf
    // ! bug to fix
    // ? how to solve
    return (
        <MyWrapper>
            <StyledDiv backgroundN={"linear-gradient(rgba(226, 234, 255) 0%, rgba(255,255,255,1) 100%);"}>
                <StyledTextSectionHeader style={{textAlign: "center"}}>Sign Up For Your Camp!</StyledTextSectionHeader>
                <StyledText style={{textAlign: "center"}}>
                <br />
    You sign up by sending the
<StyledATagLink  href={ApplicationForm}> Sign up form </StyledATagLink>
    to
<StyledATagLink href="mailto: join@ittcamp.com"> Join@ittcamp.com</StyledATagLink>.
</StyledText>

                </StyledDiv>

           

            <br />
            <StyledDiv background={campNorway} >
                <StyledH3 style={{ fontSize: "2.6rem", color: "#ffffff", textAlign: "center" , marginBottom: "120px"}}>Camp Norway   07.04.2020-10.04.2020</StyledH3>
                <br />
                <br />
                <StyledText style={{ textAlign: "left", color: "#ffffff" , fontSize: "1.7rem", fontWeight: "lighter"}}>
                    <ul>
                    <li>  4 days: 2 400 NOK  </li><br />
                    <li>  Deadline: 15.03.2020 </li><br />
                    <StyledATagLink  onClick={() => { props.history.push("/stay/Norway") }}> Read More about the camp </StyledATagLink><br />
                    </ul>
                </StyledText>
                <br />
            </StyledDiv>
            <StyledDiv background={campTaiwan}>
                <StyledSTextSectionHeader style={{ color: "white", fontSize: "2.6rem", marginBottom: "120px", textAlign: "center"  }}>Camp Taiwan 22.06.2020 - 07.07.2020</StyledSTextSectionHeader>
                <br />
                <br />
                <br />
                <br />
                <StyledText style={{ textAlign: "left", color: "#ffffff" , fontSize: "1.7rem", fontWeight: "lighter"}}>
                    <ul>
                        <li> 16 days: 12 750 NOK (10 750 NOK for companions(Non practicing participants))</li>
                        <StyledATagLink style={{ color: "#acb9ff" }}  onClick={() => { props.history.push("/stay/Taiwan/prices") }}>Read more about prices and what this includes</StyledATagLink>
                        <br />
                        <br />
                        <li>+ flight 7000 NOK both ways</li>
                        <StyledATagLink style={{ color: "#acb9ff" }}  onClick={() => { props.history.push("/stay/Taiwan/travel") }}>Read more about the travel</StyledATagLink>
                        <br />
                        <br />
                        <StyledListLocal>All travelers to Taiwan must hold a passport valid for at least 6 months from arrival day. </StyledListLocal>
                        <br />
                        <StyledListLocal >There's NO need for a visa to enter Taiwan.</StyledListLocal>
                        <br />
                        <StyledListLocal>Deadline: 20.03.2020</StyledListLocal>
                    </ul>
                   
                </StyledText>
                <br />
            </StyledDiv>
            <StyledDiv backgroundN={"linear-gradient(rgb(241, 242, 255) 0%,rgb(255, 255, 255) 100%);"}>
                <StyledTextSectionHeader style={{textAlign: "center"}}>Looking forward to see you</StyledTextSectionHeader>
                <StyledText style={{textAlign: "center"}}>
                <br />
    You sign up by sending the
<StyledATagLink  href={ApplicationForm}> Sign up form </StyledATagLink>
    to
<StyledATagLink href="mailto: join@ittcamp.com"> Join@ittcamp.com</StyledATagLink>.
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