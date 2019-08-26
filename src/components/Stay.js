import React from 'react';
import PlanLinkDiv from './LinkDivCard';
import { Wrapper } from '../styleguides/StyledTextBoxWrapper';


const scheduleHeader = "Schedule and camp life";
const scheduleText = "Read about the day to day life during the camp.";

const rulesHeader = "Rules";
const rulesText = "Read about our rules and consequences. This a must read page, so please learn the rules before the travel";

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