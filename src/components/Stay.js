import React from 'react';
import PlanLinkDiv from './LinkDivCard';
import { Wrapper } from '../styleguides/StyledTextBoxWrapper';


const scheduleHeader = "Schedule and camp life";
const scheduleText = "Read about the day to day life during the camp.";

const rulesHeader = "Rules (must read)";
const rulesText = "Read about our rules and consequences.";

const dayToDayHeader = "Outside camp life";
const dayToDayText = "Read about activities we plan to do during the travels outside the camp."






export default function Stay(props) {
    return (
        <Wrapper>
       <PlanLinkDiv to="/stay/shedule" text={scheduleText} header={scheduleHeader}/>
       <PlanLinkDiv to="/stay/rules" text={rulesText} header={rulesHeader}/>       
       <PlanLinkDiv to="/stay/camp-life" text={dayToDayText} header={dayToDayHeader}/>
        </Wrapper>
    )
}