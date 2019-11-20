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
            <br/>
            <br/>
            <StyledText>
                <StyledSTextSectionHeader> First of all.</StyledSTextSectionHeader>
                The camp begins when we meet at the arranged meeting point.
                 From this point on the <StyledATagLink onClick={() => { props.history.push("/stay/rules"); }}>camp-rules</StyledATagLink> are to be followed by all participants and companions(Non practicing participants). 
                These rules are made to ensure that everyone is safe and feels safe during the camps.
                We would also like to welcome parents to join our camp in Taiwan at a lower cost
                and hopefully have as many adults as possible with us at our camp.  
                <br />
            <br/>
                <br />
                <StyledSTextSectionHeader>Social Safety</StyledSTextSectionHeader>
            <StyledText>
                For us, saftey is more than just keeping everyone safe.
                It's also about creating a warm and inclusive environment for all participants.
                We will therefore arrange several social events during the camp, and spend time getting to know eachother.
                 Read more about our camps social life on 
            <StyledATagLink onClick={() => { props.history.push("/stay/Norway/social"); }}> social camp life Norway </StyledATagLink>
            and 
            <StyledATagLink onClick={() => { props.history.push("/stay/Taiwan/social"); }}> social camp life Taiwan</StyledATagLink>
           .
            </StyledText>
            <br/>
            <br/>
            </StyledText>
            <StyledSTextSectionHeader> Everyone has to remember:</StyledSTextSectionHeader>
            <br />
            <StyledText>
            <ol>
            <li>To have a travel insurance if travelling on one of our camps outside Scandinavia.</li>
            <br />
            <li>Read and understand the <StyledATagLink onClick={() => { props.history.push("/stay/rules"); }}> camp-rules</StyledATagLink>.</li>
            </ol>
            <br />
            <br/>
            </StyledText>
            <StyledSTextSectionHeader> Under 18 years old and travelling alone?</StyledSTextSectionHeader>
            <br />
            <StyledText>
                <ol>
                    <li> Then a parent have to sign the 
                    <StyledATagLink href={ApplicationForm}> sign up form </StyledATagLink>
                     for the participant.</li>
                 </ol>
                 </StyledText>
                 <br/>
                 <br />

            <br/>
            <StyledSTextSectionHeader>Qustions?</StyledSTextSectionHeader>
            <br />
            <StyledText>
                If you have any questions, send a mail to 
            <StyledATagLink href="mailto: contactus@ittcamp.com"> <FontAwesomeIcon icon={["far","comments"]}/> contactus@ittcamp.com <FontAwesomeIcon icon={["far","comments"]}/></StyledATagLink>, and we will answer. 
            </StyledText>
            <br/>
            <br/>
            <br/>
        </StyledDiv>
        )
}