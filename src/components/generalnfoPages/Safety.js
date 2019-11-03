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
                The camp begins when we meet at the arranged meeting point. From this point on the camp rules are to be followed by all participants. 
                
                These rules are made to ensure that everyone is safe and feels safe during the camp.
            </StyledText>
            <StyledATagLink onClick={() => { props.history.push("/stay/rules"); }}>If you haven't read the camp rules, click here.</StyledATagLink>
                <br/>
            <br />
            <br />
            <StyledText>
            <StyledH3> Under 18 years old and travelling alone?</StyledH3>
                This is what we need from parents:
                <ul>
                    <li>A signature to ensure that all rules are read and understood.</li>
                    <li>A signature that permits the person under 18 to use the swimming pool if there is one available at the facilities.</li>
                    <li>Everyone need to have travel insurance if travelling outside Scandinavia.</li>
                </ul>
            </StyledText>
                 <br/>
                 <br />
<StyledH3>Social Safety</StyledH3>
            <StyledText>
             
                For us, saftey is more than just keeping everyone safe.
                It's also about creating a warm and inclusive environment for all participants.
                We will therefore arrange several social events during the camp, and spend time getting to know eachother.
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