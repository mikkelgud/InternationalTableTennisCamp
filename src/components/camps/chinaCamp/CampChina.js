import React from 'react';
import PlanLinkDiv from '../../LinkDivCard';
import styled from 'styled-components';
import { Wrapper } from '../../../styleguides/StyledTextBoxWrapper';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import { StyledText } from '../../../styleguides/StyledText';
import { ScrollTop } from '../../../utils/ScrollToTopp';



const HeaderWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 2rem;
`


const scheduleHeader = "Schedule";
const scheduleText = "Read about how our days will be, practice, food etc.";

const rulesHeader = "Rules";
const rulesText = "Read about our rules and consequences. This a must read page, so please learn the rules before the travel";

const SocialHeader = "Social";
const SocialText = "Read about activities we plan to do during the travels outside the camp and inside the camp."

const facilitiesHeader = "Facilities";
const facilitiesText = "Read about the facilities on the camp and what we can do with our sparetime.";


export default function Stay(props) {
    ScrollTop();
    return (
<React.Fragment>
            <HeaderWrap>
                <StyledTextSectionHeader>
                    Welcome to ITTC China
                <StyledText>What would you like to know about?
                </StyledText>
                </StyledTextSectionHeader>
            </HeaderWrap>
                    <Wrapper>
            <PlanLinkDiv to="/stay/China/travel" text={"Read about how we plan our travel to Taiwan"} />
            <PlanLinkDiv to="/stay/China/shedule" text={scheduleText} header={scheduleHeader} />
            <PlanLinkDiv to="/stay/China/rules" text={rulesText} header={rulesHeader} />
            <PlanLinkDiv to="/stay/China/social" text={SocialText} header={SocialHeader} />
            <PlanLinkDiv to="/stay/China/facilities" text={facilitiesText} header={facilitiesHeader} />
        </Wrapper>
        </React.Fragment>
    )
}