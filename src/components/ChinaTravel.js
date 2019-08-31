import React from 'react';
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import StyledTextBoxDiv from '../styleguides/StyledImageShoverDivBox';
import { StyledText } from '../styleguides/StyledText';
import {StyledImage} from '../styleguides/StyledImage';
import { Wrapper } from '../styleguides/StyledTextBoxWrapper';
import ChinaAbove from '../Assets/ChinaAbove.png';
import ChinaAbove2 from '../Assets/ChinaAbove2.png';
import ChinaCity from '../Assets/ChinaCity.png';
import ChinaCoaches from '../Assets/ChinaCoaches.png';
import ChinaDiningHall from '../Assets/ChinaDiningHall.png';
import ChinaFood from '../Assets/ChinaFood.png';
import ChinaFoodTwo from '../Assets/ChinaFoodTwo.png';
import ChinaHall from '../Assets/ChinaHall.png';
import ChinaHallWithPople from '../Assets/ChinaHallwithPeople.png';
import ChinaParks from '../Assets/ChinaParks.png';
import ChinaMontain from '../Assets/ChinaMontain.png';



export default function ChinaTravel() {
    return (
        <StyledTextBoxDiv>
            <StyledTextSectionHeader>China - Work in progress 
                <span role="img" aria-label="work-emoji">👨🏽‍💻</span>
                <span role="img" aria-label="work-emoji">👩🏻‍💻</span>
                <span role="img" aria-label="work-emoji">👨🏼‍💻</span>
                </StyledTextSectionHeader>
            <Wrapper> 
            <StyledImage src={ChinaHall}/>
            <StyledImage src={ChinaHallWithPople}/>
            <StyledImage src={ChinaAbove}/>
            <StyledImage src={ChinaAbove2}/>
            <StyledImage src={ChinaCity}/>
            <StyledImage src={ChinaDiningHall}/>
            <StyledImage src={ChinaFood}/>
            <StyledImage src={ChinaFoodTwo}/>
            <StyledImage src={ChinaFood}/>
            <StyledImage src={ChinaParks}/>
            <StyledImage src={ChinaCoaches}/>
            <StyledImage src={ChinaMontain}/>
            </Wrapper>
            <StyledText>

            </StyledText>
        </StyledTextBoxDiv>
    )
}