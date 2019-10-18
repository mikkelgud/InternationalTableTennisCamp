import React from 'react';
import { StyledText } from '../../../styleguides/StyledText';
import StyledDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import { ScrollTop } from '../../../utils/ScrollToTopp';
import { StyledSTextSectionHeader } from '../../../styleguides/StyledSemiTextSectionHeader';
import { StyledH3 } from '../../../styleguides/Styledh3';


export default function TaiwanSchedule() {
    ScrollTop();
    return (
        <StyledDiv>
            <StyledTextSectionHeader>
                Schedule 
            </StyledTextSectionHeader>
            <StyledSTextSectionHeader>
            Meals
            </StyledSTextSectionHeader>
            <StyledText>
                To eat nutritious food will be crucial for you if you want to have good quality practice during the whole stay.
                So remember to eat enough during all meals.
                We would also recomend you to bring some snacks from your country to the camp.
                Because after a while the taste of something familiar will be really nice when that far from home.
                For instance crispbread with some nutella could save your day. So bring some "Just in case" food.
                </StyledText><br/>
                <StyledH3>Breakfast</StyledH3>
                <StyledText>
                The Breakfast will be provided by the hotel.
                It will be served both western and eastern food for breakfast.
                So it should be something for everyone there.  
            </StyledText><br/>
            <StyledH3>Lunch</StyledH3>
                <StyledText>
                The Lunch will be provided by ittc at restaurants.
                We will try to go to the same place most of the time for lunch.
                This is for making sure that all players get enough rest before the next practice.
                We will of course try to find some place where everyone thrives and like the food.
                If you're over 18 or traveling with your parents, it's of course allowed to go for lunch for yourself.
            </StyledText><br/>
            <StyledH3>Dinner</StyledH3>
                <StyledText>
                For dinner we will try different restaurant and show you some of the most tasty food Taiwan has to offer.
                 Every friday and saturday we will eat in western restaurants.
            </StyledText><br/>
            <StyledSTextSectionHeader>
            monday-saturday
            </StyledSTextSectionHeader>
            <StyledText>
            07.00- The show must go on, wake up.<br/>    
            07.20-  Gathering, be ready for Breakfast.<br/>
            07.25-  Breakfast  <br/>
            09.00-11.30- Normal practice with taiwanese sparring <br/>
            12.00-13.00    Gathering and go out for Lunch (Included in camp-price) <br/>
            15.00-18.00-   Practice Normal or multi-ball<br/>
            18.30-  Gathering before dinner, go out to a restaurant and eat (Included in camp-price)<br/>
            20.30-21.00-   Learning table tennis theory and/or Watch matches on video <br/> 
            21.00-21-45-   Rest<br/>      
            22:30- In bed <br/><br/>
            </StyledText>
            <StyledSTextSectionHeader>
            sunday
            </StyledSTextSectionHeader>
            <StyledText>
            07.30- wake up.<br/>    
            07.50-  Gathering, be ready for Breakfast.<br/>
            08.00-  Breakfast  <br/>
            The rest of the day we will arrange sightseeing.
            This will be planned at the camp by everyone. 
            </StyledText>
        </StyledDiv>
    )
}