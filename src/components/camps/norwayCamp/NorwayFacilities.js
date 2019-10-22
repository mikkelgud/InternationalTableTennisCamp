import React from 'react';
import styled from "styled-components";
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import { StyledSTextSectionHeader } from '../../../styleguides/StyledSemiTextSectionHeader';
import StyledTextBoxDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../../styleguides/StyledText';
import { StyledATagLink } from '../../../styleguides/StyledATagLink';
import { ScrollTop } from '../../../utils/ScrollToTopp';
import Hall from '../../../Assets/Harestuahall.png';
import Hall1 from '../../../Assets/HarestuaHall1.png';
import Buildning from '../../../Assets/HarestuaHallBygg.png';
import Buildning2 from '../../../Assets/HaresuaBuilding.jpeg';
import { Wrapper } from '../../../styleguides/StyledTextBoxWrapper';
import { StyledH3 } from '../../../styleguides/Styledh3';
import Station from '../../../Assets/HarestuaStasjon.jpeg';
import Kiwi from '../../../Assets/HarestuaKiwi.jpg';

const StyledImage = styled.img`
width: 90%;
object-fit: contain;
border-radius: 20px;
`;
const StyledImageLocal = styled.img`
width: 300px;
height: 220px;
object-fit: fill;
border-radius: 20px;
@media (max-width: 400px){
    width: 90%;
    height: auto;
    object-fit: contain;
    border-radius: 20px;
}
`;



export default function NorwayTravel(props) {
    ScrollTop();

    return (
        <StyledTextBoxDiv>
            <StyledTextSectionHeader>Welcome to Camp Norway in Harestua</StyledTextSectionHeader>
            <StyledText>
                We will stay, practice, sleep and eat inside the Harestua Arena
                <StyledATagLink target="blank" href="https://www.google.com/maps/dir//Harestua+Arena,+Elvefaret+22,+2743+Harestua/@60.2091828,10.713969,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x46419f7b25edc42b:0xecdfa6f6adc8441d!2m2!1d10.7161577!2d60.2091828"> (Get destination). </StyledATagLink>
                Harestua is in the district of Lunner that’s only 30 minutes train from Oslo central station.
                Lunner is a small area of the municipality of Oppland.
                The population of Harestua is only 2323, so it's a very small and safe place.
               The sport arena is 2700 square meters, It has a modern table tennis hall,
                athletics hall and gymnastics hall. It was built in 2016 and has a
                 kitchen, wardrobe´s and confortable relaxing sections that will all be at our disposal during the camp.
                This facilities and placement is perfect for our players table tennis developement.
            </StyledText>
            <br />
            <StyledSTextSectionHeader>Harestua facility pictures  </StyledSTextSectionHeader>
            <StyledH3>The practice-hall</StyledH3>
            <Wrapper>
                <StyledImage src={Hall}/>
                <StyledImage src={Hall1} />
            </Wrapper>
            <StyledH3>The buildning</StyledH3>
            <Wrapper>
                <StyledImageLocal src={Buildning} />
                <StyledImageLocal src={Buildning2} />
            </Wrapper>
            <StyledH3>Surroundings</StyledH3>
            <Wrapper>
                <StyledImageLocal src={Station} />
                <StyledImageLocal src={Kiwi} />
            </Wrapper>
            <StyledATagLink target="blank" href="https://sagparken.no/hva-er-sagparken/">
                Want to see and read more from Harestua?
               </StyledATagLink>
            <br />
            <br />
            <StyledATagLink target="blank" href="mailto: contactus@ittcamp.com">
                If you have any trouble with your travel to Harestua, don´t hesitate to contact us at contactus@ittcamp.com.
             </StyledATagLink>

        </StyledTextBoxDiv>
    )
}