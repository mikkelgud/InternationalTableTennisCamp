import React from 'react';
import styled from 'styled-components';
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import StyledDiv from '../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../styleguides/StyledText';
import { StyledATagLink } from '../../styleguides/StyledATagLink';
import ApplicationForm from "../../Assets/ApplicationITTCAMP.docx";
import { ScrollTop } from '../../utils/ScrollToTopp';
import { StyledSTextSectionHeader } from '../../styleguides/StyledSemiTextSectionHeader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { InfoBox } from '../../styleguides/StyledInfoBox';
import { StyledH3 } from '../../styleguides/Styledh3';
import { StyledListUnit } from '../../styleguides/StyledListUnit';


const SomeAligner = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export default function Safety(props) {
    ScrollTop();
    return (
        <StyledDiv>
            <SomeAligner><StyledTextSectionHeader>Our Camps Safety </StyledTextSectionHeader></SomeAligner>

                <StyledSTextSectionHeader> First of all.</StyledSTextSectionHeader>
                <StyledText>
                The camp begins when we meet at the arranged meeting point.
                 From this point on the <StyledATagLink onClick={() => { props.history.push("/stay/rules"); }}>camp-rules</StyledATagLink> are to be followed by all participants and companions(Non practicing participants). 
                These rules are made to ensure that everyone is safe and feels safe during the camps.
                We would also like to welcome parents to join our camp in Taiwan at a lower cost
                and hopefully have as many adults as possible with us at our camp.  
                </StyledText>
                <StyledSTextSectionHeader>Social Safety</StyledSTextSectionHeader>
            <StyledText>
                For us, saftey is more than just keeping everyone safe.
                It's also about creating a warm and inclusive environment for all participants.
                We will therefore arrange several social events during the camp, and spend time getting to know eachother.
                 Read more about our camps social life on 
            <StyledATagLink 
            onClick={() => { props.history.push("/stay/Norway/social"); 
            }}> social camp life Norway </StyledATagLink>
            and 
            <StyledATagLink onClick={() => { props.history.push("/stay/Taiwan/social"); }}> social camp life Taiwan</StyledATagLink>
           .
            </StyledText>
        <InfoBox>
            <StyledH3> Everyone has to remember:</StyledH3>
            <StyledText>
            <ol>
            <StyledListUnit>To have a all insurances covered before the camps.</StyledListUnit>
            <StyledListUnit>Read and understand the <StyledATagLink onClick={() => { props.history.push("/stay/rules"); }}> camp-rules</StyledATagLink>.</StyledListUnit>
            </ol>
            </StyledText>
            </InfoBox>
            <InfoBox>
            <StyledSTextSectionHeader> Under 18 years old and travelling alone?</StyledSTextSectionHeader>
            <StyledText>
                <ol>
                    <StyledListUnit> Then a parent have to sign the 
                    <StyledATagLink href={ApplicationForm}> sign up form </StyledATagLink>
                     for the participant.</StyledListUnit>
                 </ol>
                 </StyledText>
                 </InfoBox>
            <StyledSTextSectionHeader>Qustions?</StyledSTextSectionHeader>
            <StyledText>
                If you have any questions, send a mail to 
            <StyledATagLink href="mailto: contactus@ittcamp.com"> <FontAwesomeIcon icon={["far","comments"]}/> contactus@ittcamp.com <FontAwesomeIcon icon={["far","comments"]}/></StyledATagLink>, and we will answer. 
            </StyledText>
        </StyledDiv>
        )
}