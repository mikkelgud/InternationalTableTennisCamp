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
            <StyledTextSectionHeader style={{textAlign: "center"}}>
                Schedule 
            </StyledTextSectionHeader>
            <br/>
            <StyledText>
                We will try to make this camp as exiting, interesting and learning-packed as possible.  
                Therefore we have arranged a great possibility to come and watch the taiwanese national team practice.
                During the "show" our coaches will explain what we can learn from seeing the top level players practice,
                and how this can help you to improve your game.
                We hope this will be both inspiring and developing for you. 
                </StyledText><br/><br/>
            <StyledSTextSectionHeader>
            Meals
            </StyledSTextSectionHeader>
            <StyledText>
                To eat nutritious food will be crucial for you if you want to have good quality practice during the whole stay.
                We will therefore try to have this option at all meals at the whole camp.
                We would also recomend you to bring some snacks from your country to the camp.
                Because after a while, the taste of something familiar will be really nice.
                For instance crispbread with some topping could save your practice.
                </StyledText><br/><br/>
                <StyledH3>Breakfast</StyledH3>
                <StyledText>
                The Breakfast will be provided by the hotel.
                It will be served both western and eastern food for breakfast.
                So it should be something for everyone there.  
            </StyledText><br/><br/>
            <StyledH3>Lunch</StyledH3>
                <StyledText>
                We have to make sure that all players get enough rest before the next practice,
                so the Lunch will be provided by ITTC ordered from restaurants.
                If you're over 18 or traveling with your parents, it's of course allowed to go for lunch for yourself.
            </StyledText><br/><br/>
            <StyledH3>Dinner</StyledH3>
                <StyledText>
                For dinner we will try different restaurant and show you some of the most tasty food Taiwan has to offer.
                western food will also be an option.
            </StyledText><br/><br/>
            <StyledSTextSectionHeader>
            Monday - Saturday
            </StyledSTextSectionHeader>
            <StyledText>
            07.00- The show must go on, wake up.<br/>    
            07.20-  Gathering, be ready for Breakfast.<br/>
            07.25-  Breakfast  <br/>
            09.00-11.30- Normal practice with taiwanese sparring <br/>
            12.00-13.00    Gathering and go out for Lunch (Included in camp-price) <br/>
            15.00-18.00-   Practice Normal or multi-ball<br/>
            18.30-  Gathering before dinner, go out to a restaurant and eat (Included in camp-price)<br/>
            20.30-21.00-   Learning table tennis theory and/or Watch matches on video. Or team meeting <br/> 
            21.00-21-45-   Rest<br/>      
            22:30- In bed <br/><br/><br/>
            </StyledText>
            <StyledSTextSectionHeader>
            sunday
            </StyledSTextSectionHeader>
            <StyledText>
            07.30- wake up.<br/>    
            07.50-  Gathering, be ready for Breakfast.<br/>
            08.00-  Breakfast  <br/>
            The rest of the day we will arrange sightseeing.
            What we will do with our sightseeing days, will be decided by the traveling-group's interests. 
            <br/><br/><br/>
            </StyledText>
        </StyledDiv>
    )
}