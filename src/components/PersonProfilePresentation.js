import React from 'react';
import { StyledText } from '../styleguides/StyledText';
import StyledCirkledDiv from '../styleguides/StyledCirkledDiv';
import { ScrollTop } from '../utils/ScrollToTopp';
import { StyledTextSectionHeaderForHomePage } from '../styleguides/StyledTextSectionHeaderForHomePage';


export default function PersonProfile(props) {
ScrollTop();
    return ( 
        <StyledCirkledDiv background={props.background}>
            <StyledTextSectionHeaderForHomePage style={{margin: "8px 0 20px 5px"}}>
                {props.personName}
                {props.age}
            </StyledTextSectionHeaderForHomePage>
         <StyledText style={{margin: "0 0 8px 0 "}}>
                {props.willJoin}
         </StyledText>
         <StyledText style={{fontStyle: "Italic", margin: "0"}}>
                {props.text} 
        </StyledText>
        </StyledCirkledDiv>
    )
}