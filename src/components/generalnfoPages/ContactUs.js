import React from 'react';
import styled from 'styled-components';
import Logo from '../../Assets/logoQuality.jpeg';
import HildingROR from '../../Assets/hildingP.jpg';
import { ScrollTop } from '../../utils/ScrollToTopp';
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import StyledDiv from '../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../styleguides/StyledText';
import { StyledH3 } from '../../styleguides/Styledh3';
import { StyledATagLink } from '../../styleguides/StyledATagLink';
import Mikkel from '../../Assets/MikkelProfile.jpg'
import { InfoBox } from '../../styleguides/StyledInfoBox';


const LocalDiv = styled.div`
display: flex;
margin: 1.5rem;
@media (max-width: 509px){
    flex-direction: column;
margin: 0;

}
`

const StyledImageLocal = styled.img`
display: flex;
border-radius: 10px;
object-fit: contain;
cursor: default;
width: 24%;
@media (max-width: 509px){
    width: 40%;
}

`



//Presentation-text


//Picture-sources



export default function Leaders() {
    ScrollTop();
    return (
        <StyledDiv>
        <StyledTextSectionHeader>Contact us</StyledTextSectionHeader>
        <InfoBox>
        <StyledH3 style={{margin: "2rem"}}>Offical mail</StyledH3>
<LocalDiv>
        <StyledImageLocal src={Logo}/>
        
        <StyledText style={{padding: "1rem"}}>
       
            Mail:  <StyledATagLink style={{fontSize: "0.9em"}} target="blank" href="mailto: contactus@ittcamp.com">contactus@ittcamp.com </StyledATagLink>
           
        </StyledText>
        </LocalDiv>
        </InfoBox>
        <InfoBox>
        <StyledH3 style={{margin: "2rem"}}>Hilding Persson</StyledH3>
<LocalDiv>
        <StyledImageLocal  src={HildingROR}/>
        
        <StyledText style={{padding: "1rem"}}>
   
            Mail:  <StyledATagLink style={{fontSize: "0.9em"}} target="blank" href="mailto: Hilding.totland@hotmail.com">Hilding.totland@hotmail.com </StyledATagLink>
           <br/>
           TEL: +47 90231032
        </StyledText>
       
        </LocalDiv>
        </InfoBox>
        <InfoBox>
        <StyledH3 style={{margin: "2rem"}}>Mikkel Gudmundsen</StyledH3>
<LocalDiv>
       <StyledImageLocal  src={Mikkel}/> 
        <StyledText style={{padding: "0.5rem"}}>
            Mail:  <StyledATagLink style={{fontSize: "0.8em"}} target="blank" href="mailto: mikkel_gudmundsen@hotmail.com">mikkel_gudmundsen@hotmail.com </StyledATagLink>
           <br/>
           TEL: +47 90364530
        </StyledText>
        </LocalDiv>
        </InfoBox>
        
        </StyledDiv> 
         
        
        )
}