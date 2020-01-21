import React from 'react';
import Card from '../styleguides/StyledTextCardDiv';
import { StyledLink } from '../styleguides/StyledLink';
import { StyledTextSectionHeaderForHomePage } from '../styleguides/StyledTextSectionHeaderForHomePage';
import { StyledTextHome} from '../styleguides/StyledTextHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { StyledImage } from '../styleguides/StyledImage';

export default function PlanLinkDiv(props) {
    return (
        <StyledLink to={props.to} onMouseEnter={props.onMouseEnter} 
        onMouseLeave={props.onMouseLeave}>
            <Card >
    <StyledTextSectionHeaderForHomePage>
    {props.header} 
    <FontAwesomeIcon icon={props.icon}/>
     </StyledTextSectionHeaderForHomePage>
                <StyledTextHome >{props.text}</StyledTextHome>
             </Card>
        </StyledLink>

    );
}