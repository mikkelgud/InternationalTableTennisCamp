import React from 'react';
import { StyledText } from '../styleguides/StyledText';
import StyledCirkledDiv from '../styleguides/StyledCirkledDiv';
import { ScrollTop } from '../utils/ScrollToTopp';
import { StyledTextSectionHeaderForHomePage } from '../styleguides/StyledTextSectionHeaderForHomePage';


export default function PersonProfile(props) {
ScrollTop();
    return ( 
        <StyledCirkledDiv background={props.background}>
            <StyledTextSectionHeaderForHomePage style={{margin: "8px 0 26px 5px"}}>
                {props.personName}
                {props.age}
            </StyledTextSectionHeaderForHomePage>
         <StyledText>
                {props.willJoin}
         </StyledText>
         <StyledText style={{fontStyle: "Italic"}}>
                {props.text} 
        </StyledText>
        </StyledCirkledDiv>
    )
}