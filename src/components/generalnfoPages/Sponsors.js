import React from 'react';
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import StyledTextBoxDiv from '../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../styleguides/StyledText';
import { StyledATagLink } from '../../styleguides/StyledATagLink';
import { StyledImage } from '../../styleguides/StyledImage';
import classiccatering from '../../Assets/classic.png';
// import ttex from '../../Assets/ttex.png';
import styled from 'styled-components';
import { StyledH3 } from '../../styleguides/Styledh3';

const LocalWrapper = styled.div`
display: flex;
    margin-top: 2rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
const LocalContainer = styled.div`
display: flex;
width: 50%;
align-items: center;
    justify-content: center;
    margin: 3rem 0;


@media (max-width: 910px){
width 100%;
}
`;


const Sponsors = () => {
    const Harestua = "https://scontent.fosl3-2.fna.fbcdn.net/v/t1.0-9/14332997_328338614181135_165321474244639133_n.jpg?_nc_cat=103&_nc_oc=AQnFyx5OWGfG9waVwGOB6-61_KcFFGD-zwPgMzgh8lDndWU78Zi3cP2Fj25DBi75HuM&_nc_ht=scontent.fosl3-2.fna&oh=e4a5af849f32723f59b905da1cf927e3&oe=5E132AE3";
    return (
        <StyledTextBoxDiv>
            <StyledTextSectionHeader>Our Sponsors</StyledTextSectionHeader>
            <StyledText>
                We are proud that these companies have faith in our camp and we would officaly
                thank all of them. This wouldn't be possible without you.
    </StyledText>
            <LocalWrapper>
                <LocalContainer>
                    <StyledATagLink href="http://www.classiccatering.no" target="blank"><StyledImage src={classiccatering} /></StyledATagLink><br />
                </LocalContainer>  <LocalContainer>
                    {/* <StyledATagLink href="https://www.ttex.no" target="blank"><StyledImage src={ttex} /></StyledATagLink> */}
                </LocalContainer>
                <StyledText>An extra thanks to Harestua IL for kindly letting us arrange the camp with you on Harestua.</StyledText>
                <LocalContainer>
                    <StyledATagLink href="https://www.harestua.info/harestua-il/bordtennis.html" target="blank"><StyledImage src={Harestua} /></StyledATagLink><br />
                </LocalContainer>
            </LocalWrapper>
           <StyledH3>Wanna be our sponsor?</StyledH3>
            <StyledText>
               Contact:
               Hilding Totland Persson on +47 90231032 for more information about what we can offer you in return.
           </StyledText>
        </StyledTextBoxDiv>
    )
}
export default Sponsors;