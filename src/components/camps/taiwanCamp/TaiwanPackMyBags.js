import React from 'react';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import StyledDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../../styleguides/StyledText';
import { StyledH3 } from '../../../styleguides/Styledh3';
import { ScrollTop } from '../../../utils/ScrollToTopp';
import { StyledList } from '../../../styleguides/StyledList';
import { StyledListUnit } from '../../../styleguides/StyledListUnit';

export default function Pack() {
    ScrollTop();
    return (
        <StyledDiv>
            <StyledTextSectionHeader style={{textAlign: "center"}}>Packing list</StyledTextSectionHeader>
            <StyledText>
        It's cheap to buy things in Taiwan.
         So if you plan to bring things home, pack smart.
            </StyledText>
    
            <StyledH3>Remember:</StyledH3>
            <StyledText>
                <StyledList>
                <StyledListUnit>Passport</StyledListUnit>
                <StyledListUnit>Equipment suited for long travel</StyledListUnit>
                <StyledListUnit>Essentials (Phones, wallet, toiletries...)</StyledListUnit>
                <StyledListUnit>Racket and other table tennis equipment(Water bottle, towel..etc)</StyledListUnit>
                <StyledListUnit>Table tennis clothes for 6 days (for table tennis, outside sport and sparetime). It will be possilbe to wash cloths at the hotel.</StyledListUnit>
                <StyledListUnit>Normal clothes for outdoor activities</StyledListUnit>
                <StyledListUnit>Socks and underwear for 6 days</StyledListUnit>
                <StyledListUnit>Shoes (for table tennis, jogging and sparetime)</StyledListUnit>
                <StyledListUnit>Camera (if you want for video analyse)</StyledListUnit>
                <StyledListUnit>Some crispbread and toppings that will sustain the travel and time.</StyledListUnit>
                <StyledListUnit>Take out some cash at the airport.
                    For shopping you can bring your card.
                     It's cheaper to take out money inside Taiwan (currency: 1 Taiwan dollars = 0.3 NOK).
                      Remember, you always have to use cash. Taiwan dosen't use cards to pay with, only phones or cash.
                </StyledListUnit>
                </StyledList>
        </StyledText>
        </StyledDiv>
        )
}