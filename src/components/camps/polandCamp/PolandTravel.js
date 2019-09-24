import React from 'react';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import StyledTextBoxDiv from '../../../styleguides/StyledImageShoverDivBox';
import { StyledText } from '../../../styleguides/StyledText';
import {StyledImage} from '../../../styleguides/StyledImage';
import { Wrapper } from '../../../styleguides/StyledTextBoxWrapper';
import TennisCourt from '../../../Assets/PolandTennisCourt.png';
import Beds from '../../../Assets/PolenBeds.png';
import Campus from '../../../Assets/PolenCampus.png';
import TableTennis from '../../../Assets/PolandTableTennis.png';
import Fotbal2 from '../../../Assets/PolenFotballBane2.png';
import Reception from '../../../Assets/PolenReception.png';
import BathAndSauna from '../../../Assets/PolandPoolSauna.png';
import Handball from '../../../Assets/PolandHandBallField.png';
import DiningHall from '../../../Assets/PolenSpiseSall.png';
import { ScrollTop } from '../../../utils/ScrollToTopp';


export default function PolandTravel() {
    ScrollTop();

    return (
        <>
        <StyledTextBoxDiv>
            <StyledTextSectionHeader>Poland - Work in progress 
                <span role="img" aria-label="work-emoji">👨🏽‍💻</span>
                <span role="img" aria-label="work-emoji">👩🏻‍💻</span>
                <span role="img" aria-label="work-emoji">👨🏼‍💻</span>
                </StyledTextSectionHeader>
                </StyledTextBoxDiv>
            <Wrapper> 
            <StyledImage src={Campus}/>
            <StyledImage src={Reception}/>
            <StyledImage src={TableTennis}/>
            <StyledImage src={DiningHall}/>
            <StyledImage src={BathAndSauna}/>
            <StyledImage src={Handball}/>
            <StyledImage src={Beds}/>
            <StyledImage src={Fotbal2}/>
            <StyledImage src={TennisCourt}/>
            </Wrapper>
            <StyledText>
            </StyledText>
        </>
    )
}