import React from 'react';
import PlanLinkDiv from './LinkDivCard';

const flightEmoji = "✈️";
const stayEmoji = "🏯";


const sheduleHeader = "Schedule"+{flightEmoji}.flightEmoji;
const rulesHeader = "Rules"+{stayEmoji}.stayEmoji;



export default function Stay(props) {
    return (
        <>
       <PlanLinkDiv to="/stay/shedule" header={sheduleHeader}/>
       <PlanLinkDiv to="/stay/shedule" header={sheduleHeader}/>
       <PlanLinkDiv to="/stay/shedule" header={sheduleHeader}/>
       <PlanLinkDiv to="/stay/rules" header={rulesHeader}/>
        </>
    )
}