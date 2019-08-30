import React from 'react';
import Card from '../styleguides/StyledTextCardDiv';
import { StyledLink } from '../styleguides/StyledLink';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import { StyledText } from '../styleguides/StyledText';
// import { StyledImage } from '../styleguides/StyledImage';

export default function PlanLinkDiv(props) {
    // const [isPropsSource, setIspropsSource] = useState(false);

    
    // const checkProps =(props)=>{
    // if(props !== "" || null) { 
    //      console.log("worked as it should");
    //     }
    // }    
 

    return (
        <StyledLink to={props.to}>
            <Card>
                <StyledTextSectionHeader>{props.header}</StyledTextSectionHeader>
                {/* //{isPropsSource ?  */}
                {/* <StyledImage src={props.src}/>  */}
                {/* : null} */}
                <StyledText>{props.text}</StyledText>
             </Card>
        </StyledLink>

    )
}