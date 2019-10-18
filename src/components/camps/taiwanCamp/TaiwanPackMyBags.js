import React from 'react';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import StyledDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../../styleguides/StyledText';
import { StyledH3 } from '../../../styleguides/Styledh3';
import { ScrollTop } from '../../../utils/ScrollToTopp';

export default function Pack() {
    ScrollTop();
    return (
        <StyledDiv>
            <StyledTextSectionHeader>Packing list</StyledTextSectionHeader>
            <StyledText>
        It's cheap to buy things in Taiwan.
         So if you plan to bring things home, pack smart.
            <br/>
            <br/>
            </StyledText>
        <StyledText>
            <StyledH3>Remember:</StyledH3>
                <ul>
                <li>Passport</li>
                <li>Equipment suited for an 16 hours travel</li>
                <li>Essentials (Phones, wallet, toiletries...)</li>
                <li>Racket and other table tennis equipment(Water bottle, towel..etc)</li>
                <li>Table tennis clothes for 6 days (for table tennis, outside sport and sparetime). It will be possilbe to wash cloths at the hotel.</li>
                <li>Normal clothes for outdoor activities</li>
                <li>Socks and underwear for 6 days</li>
                <li>Shoes (for table tennis, jogging and sparetime)</li>
                <li>Camera (if you want for video analyse)</li>
                <li>Some crispbread and toppings that will sustain the travel and time.</li>
                <li>Take out some cash at the airport.
                    For shopping you can bring your card.
                     It's cheaper to take out money inside Taiwan (currency: 1 Taiwan dollars = 0.3 Norwegian Krones).
                      Remember, you always have to use cash. Taiwan dosen't use cards to pay with, only phones or cash.
                </li>
                </ul>
                <br/>
        </StyledText>
           
            <br/>
            <br/>
        </StyledDiv>
        )
}