import React from 'react';
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import StyledTextBoxDiv  from '../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../styleguides/StyledText';
import { StyledATagLink } from '../../styleguides/StyledATagLink';
import { StyledImage } from '../../styleguides/StyledImage';


const Sponsors = () =>{
    return(
       <StyledTextBoxDiv>
    <StyledTextSectionHeader>Our Sponsors</StyledTextSectionHeader>
    <StyledText>
        We are proud that these companies have faith in our camp and we would officaly
        thank all of them. This wouldn't be possible without you.
    </StyledText>
    <StyledImage>
<StyledATagLink href="http://www.classiccatering.no" target="blank">Classic catering</StyledATagLink><br />
</StyledImage>
    <StyledImage>
            <StyledATagLink href="https://www.harestua.info/harestua-il/bordtennis.html" target="blank">Harestua IL</StyledATagLink><br />
            </StyledImage>
    <StyledImage>
            <StyledATagLink href="https://www.ttex.no" target="blank">TTEX oslo</StyledATagLink>
            </StyledImage>
    </StyledTextBoxDiv>
    )
}