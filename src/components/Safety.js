import React from 'react';
import { StyledTextSectionHeader } from '../styleguides/StyledtextSectionHeader';
import StyledDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from '../styleguides/StyledText';
import { StyledLink } from '../styleguides/StyledLink';
import { StyledATagLink } from '../styleguides/StyledATagLink';

export default function PolandTravel() {
    return (
        <StyledDiv>
            <StyledTextSectionHeader>Safety during the camp</StyledTextSectionHeader>
            <StyledText>
                First of all.
                The camp starts when we meet at the airport.
                This is important to have in mind, because from this point the camp rules are law.
                These rules are made to ensure that everyone is safe and feel safe during the camp.
            </StyledText>
            <StyledLink to="/stay/rules"> If you haven't red the camp rules, click here.</StyledLink>
            <br />
            <br />
            <StyledText>
                Are you under 18years old and traveling alone?
                Then there is a few things we need from your parents:

                <ul>
                    <li>A Signature to ensure that all rules are red, and understood.</li>
                    <li>A signature that alowes the person under 18 to swim in the swimming pool.</li>
                    <li>Everyone need to provide travelinsurance prove.</li>
                </ul>
            </StyledText>
            <StyledATagLink> It's also listed in the application form, if you haven't got it yet, you can click here.</StyledATagLink>

            <StyledText>
                <br />
                For us, saftey is more than just making everyone safe.
                It's also about creating an environment that is warm and stable beetwen the travelers.
                We are all different people, with different backgrounds, from different contries and with a different set of goals and motivations.
                In this camp we want to cross those borders, and make everyone feel like a worthy part of the group.
                We will therefore arrange several social events during the camp, and spend some time learning to know each other.
            </StyledText>
            <StyledLink to="stay/social">Read about the social life on camp here</StyledLink>
            <br/>
            <br/>
           
            <StyledText>
                This is the first year of internatinal table tennis camp, and for us,
                 to ensure everyones Safety, is priority number one.
            </StyledText>
            <br/>
            <StyledATagLink href="mailto: Q&R@ittcamp.com">If you have any questions, please don't hesitate to ask us on q&r@ittcamp.com by clicking here.</StyledATagLink> 
            <br/>
            <br/>
            <br/>
        </StyledDiv>)
}