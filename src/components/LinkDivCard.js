import React from 'react';
import Card from '../styleguides/StyledTextCardDiv';
import { StyledLink } from '../styleguides/StyledLink';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import { StyledText } from '../styleguides/StyledText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { StyledImage } from '../styleguides/StyledImage';

export default function PlanLinkDiv(props) {
    return (
        <StyledLink to={props.to} onMouseEnter={props.onMouseEnter} 
        onMouseLeave={props.onMouseLeave}>
            <Card>
    <StyledTextSectionHeader>
    {props.header} 
    <FontAwesomeIcon icon={props.icon}/>
     </StyledTextSectionHeader>
                {/* //{isPropsSource ?  */}
                {/* <StyledImage src={props.src}/>  */}
                {/* : null} */}
                <StyledText>{props.text}</StyledText>
             </Card>
        </StyledLink>

    )
}