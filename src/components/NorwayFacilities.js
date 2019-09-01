import React from 'react';
import styled from "styled-components";
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import { StyledSTextSectionHeader } from '../styleguides/StyledSemiTextSectionHeader';
import StyledTextBoxDiv from '../styleguides/StyledTextBoxDiv';
import { StyledText } from '../styleguides/StyledText';
import { StyledATagLink } from '../styleguides/StyledATagLink';
import { ScrollTop } from '../utils/ScrollToTopp';
import Hall from '../Assets/Harestuahall.png';
import Hall1 from '../Assets/HarestuaHall1.png';
import Buildning from '../Assets/HarestuaHallBygg.png';
import { Wrapper } from '../styleguides/StyledTextBoxWrapper';

const StyledImage = styled.img`
width: 90%;
object-fit: contain;
border-radius: 20px;
`;

export default function NorwayTravel() {
    ScrollTop();
    return (
        <StyledTextBoxDiv>
            <StyledTextSectionHeader>Welcome to Camp Norway in Harestua</StyledTextSectionHeader>
            <StyledText>
                We will stay, practice, sleep and eat inside the Harestua Arena.
                <StyledATagLink target="blank" href="https://www.google.com/maps/dir//Harestua+Arena,+Elvefaret+22,+2743+Harestua/@60.2091828,10.713969,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x46419f7b25edc42b:0xecdfa6f6adc8441d!2m2!1d10.7161577!2d60.2091828">(Get destination)</StyledATagLink>
                Harestua is in the district of Lunner that’s only 30 minutes train from Oslo central station.
                Lunner is a small area of the municipality of Oppland.
                The population of Harestua is only 2323, so it's a very small and safe place.
               The sport arena where we will have our camp, was built in 2016, it’s a modern table tennis,
                athletics and gymnastics hall.
                 kitchen, wardrobe´s and relaxing sections will also be at our disposal.
                This facilities and placement is perfect for our players table tennis developement.
            </StyledText>
            <br />


            <StyledSTextSectionHeader>Harestua facility pictures  </StyledSTextSectionHeader>

            <StyledSTextSectionHeader>The practice-hall</StyledSTextSectionHeader>
            <Wrapper>
                <StyledImage src={Hall} />
                <StyledImage src={Hall1} />
            </Wrapper>
            <StyledSTextSectionHeader>The buildning</StyledSTextSectionHeader>
            <Wrapper>
                <StyledImage src={Buildning} />
            </Wrapper>
            <StyledSTextSectionHeader>Suroundings</StyledSTextSectionHeader>
            <Wrapper>
            </Wrapper>
            <StyledATagLink href="mailto: contactus@ittcamp.com">
                If you have any trouble with your travel to Harestua, don´t hessitate asking us for help at contactus@ittcamp.com, by clicking here.
                Harestua
             </StyledATagLink>
        </StyledTextBoxDiv>
    )
}