import React from 'react';
import Card from '../styleguides/StyledTextCardDiv';
import { StyledLink } from '../styleguides/StyledLink';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import { StyledTextHome} from '../styleguides/StyledTextHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { StyledImage } from '../styleguides/StyledImage';

export default function PlanLinkDiv(props) {
    return (
        <StyledLink to={props.to} onMouseEnter={props.onMouseEnter} 
        onMouseLeave={props.onMouseLeave}>
            <Card >
    <StyledTextSectionHeader>
    {props.header} 
    <FontAwesomeIcon icon={props.icon}/>
     </StyledTextSectionHeader>
                <StyledTextHome >{props.text}</StyledTextHome>
             </Card>
        </StyledLink>

    );
}