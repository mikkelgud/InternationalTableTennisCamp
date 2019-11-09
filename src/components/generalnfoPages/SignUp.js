//Will have to use state with the stars
import React from 'react';
import styled from 'styled-components';
import StyledDiv from '../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../styleguides/StyledText';
import { StyledATagLink } from '../../styleguides/StyledATagLink';
import { StyledSTextSectionHeader } from '../../styleguides/StyledSemiTextSectionHeader.js';
import { ScrollTop } from '../../utils/ScrollToTopp';
import ApplicationForm from "../../Assets/ApplicationITTCAMP.docx";
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import useLocalStorage from '../hooks/useLocalStorage';



const HeaderAligner = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-wrap: wrap;
 `;

const MyWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-wrap: wrap;
 `;


export default function SignUp(props) {
    ScrollTop();
    // todo: dsfjodsjf
    // ! bug to fix
    // ? how to solve
    return (
        <MyWrapper>
            <StyledDiv>
                <HeaderAligner>
                    <StyledTextSectionHeader>Sign up to one of our camps </StyledTextSectionHeader>
                </HeaderAligner>
                <br />
                <HeaderAligner>
                    <StyledText> You sign up by sending the
                        <StyledATagLink href={ApplicationForm}> Sign up form </StyledATagLink>
                        to
                  <StyledATagLink href="mailto: join@ittcamp.com"> Join@ittcamp.com</StyledATagLink>.
                     </StyledText>
                </HeaderAligner>
                <br />
                <StyledDiv>
                    <StyledSTextSectionHeader>Camp Norway</StyledSTextSectionHeader>
                    <br />
                    <br />
                    <ul>
                        <li>  07.04.2020 - 10.04.2020</li>
                        <br />
                        <li>2 400 NOK</li>
                        <StyledATagLink onClick={() => { props.history.push("/stay/Norway/prices") }}>Read more about Prices</StyledATagLink>
                        <br />
                        <br />
                        <li>Deadline: 15.03.2020</li>
                    </ul>
                    <br />
                </StyledDiv>
                <StyledDiv>
                    <StyledSTextSectionHeader>Camp Taiwan</StyledSTextSectionHeader>
                    <br />
                    <br />
                    <ul>
                        <li>  22.06.2020 - 07.07.2020</li><br />
                        <li> 16 days: 12 750 NOK (10 750 NOK for companions(Non practicing participants))</li>
                        <StyledATagLink onClick={() => { props.history.push("/stay/Taiwan/prices") }}>Read more about prices and what this includes</StyledATagLink>
                        <br />
                        <br />
                        <li>+ flight 7000 NOK both ways</li>
                        <StyledATagLink onClick={() => { props.history.push("/stay/Taiwan/travel") }}>Read more about the travel</StyledATagLink>
                        <br />
                        <br />
                        <li>All travelers to Taiwan must hold a passport valid for at least 6 months from arrival day. </li>
                        <br />
                        <li>There's NO need for a visa to enter Taiwan.</li>
                        <br />
                        <li>Deadline: 20.03.2020</li>
                    </ul>
                    <br />
                    <br />
                </StyledDiv>
                <br />
                <br />
                <br />
                <HeaderAligner>
                    <StyledText>
                        <StyledATagLink href={ApplicationForm}>
                            #Download Sign up form
                   </StyledATagLink>
                    </StyledText>
                </HeaderAligner>
                <br />
                <br />
            </StyledDiv>
        </MyWrapper>
    );
}