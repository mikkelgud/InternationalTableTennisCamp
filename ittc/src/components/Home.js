import React from 'react';
import Styled from 'styled-components';
import StyledTextBoxDiv from '../styleguides/StyledTextBoxDiv';
import Aux from '../utils/Auxillian';
import { Wrapper } from '../styleguides/StyledTextBoxWrapper';
import {StyledImage} from '../styleguides/StyledImage';
import {StyledText} from '../styleguides/StyledText';


const ThisWrapper = Styled.div`
margin:0;
width: 100vw;
height: 100vh;
`
export default function Home(){
    return(
    <ThisWrapper>

        <StyledTextBoxDiv>
        <StyledText> This page is still under developement. Will be finished within 20days :)</StyledText>
<StyledImage src="https://encrypted-tbn0.gstatic.com/images?
q=tbn:ANd9GcRn8Gd4FOKkxjH5sYvsY2hgP85yrlNib83nQ-ncZYWiY1telBng"/>

</StyledTextBoxDiv>
    
    </ThisWrapper>
    )}