import React from 'react';
import { StyledSTextSectionHeader } from './styleguides/StyledSemiTextSectionHeader';
import { StyledText } from './styleguides/StyledText';

export default function(props){
    return(
    <>
<summary> <StyledSTextSectionHeader>{props.header}</StyledSTextSectionHeader></summary>
    <div style={{borderTop: "1px solid #e1e4e8", paddingTop: "1rem"}}>
         <StyledSTextSectionHeader style={{padding: "0 2rem"}}>For camp Taiwan:</StyledSTextSectionHeader>
         <StyledText style={{padding: "0 2rem", marginBottom: "1rem"}}> 
         {props.textTaiwan}
       </StyledText>
        <StyledSTextSectionHeader style={{padding: "0 2rem"}}>For camp Norway:</StyledSTextSectionHeader>
       <StyledText style={{padding: "0 2rem", marginBottom: "1rem"}}> {props.textNorway}</StyledText>
    </div>
    </>)
}