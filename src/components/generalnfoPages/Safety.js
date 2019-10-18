import React from 'react';
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import StyledDiv from '../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../styleguides/StyledText';
import { StyledATagLink } from '../../styleguides/StyledATagLink';
import { StyledH3 } from '../../styleguides/Styledh3';
import { ScrollTop } from '../../utils/ScrollToTopp';

export default function Safety(props) {
    ScrollTop();
    return (
        <StyledDiv>
            <StyledTextSectionHeader>Safety during camps</StyledTextSectionHeader>
            <StyledText>
                <StyledH3> First of all.</StyledH3>
                The camp starts when we meet at the arranged meeting point.
                This is important to have in mind, because from this point the camp rules are law.
                These rules are made to ensure that everyone is safe and feel safe during the camp.
            </StyledText>
            <StyledATagLink onClick={() => { props.history.push("/stay/rules"); }}>If you haven't red the camp rules, click here.</StyledATagLink>
                <br/>
            <br />
            <br />
            <StyledText>
            <StyledH3>If you are under 18 years old, and traveling alone?</StyledH3>
                Then there is a few things we need from your parents:
                <ul>
                    <li>A Signature to ensure that all rules are red, and understood.</li>
                    <li>A signature that permits the person under 18 to use the swimming pool, if that's available at the facilities.</li>
                    <li>Everyone need to provide travelinsurance prove if traveling outside Scandinavia.</li>
                </ul>
            </StyledText>
                 <br/>
                 <br />
<StyledH3>Social Safety</StyledH3>
            <StyledText>
             
                For us, saftey is more than just making everyone safe.
                It's also about creating an environment that is warm and inclusive between the travelers.
                We will therefore arrange several social events during the camp, and spend time learning to know each other.
            </StyledText>
            <StyledATagLink onClick={() => { props.history.push("/stay/Norway/social"); }}>Read about the social life on camp-Norway here</StyledATagLink><br/>
            <StyledATagLink onClick={() => { props.history.push("/stay/Taiwan/social"); }}>Read about the social life on camp-Taiwan here</StyledATagLink>
            <br/>
            <br/>
            <br/>
            <StyledATagLink href="mailto: contactus@ittcamp.com">If you have any questions, please don't hesitate to ask us on contactus@ittcamp.com by clicking here.</StyledATagLink> 
            <br/>
            <br/>
            <br/>
        </StyledDiv>
        )
}