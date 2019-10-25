import React from 'react';
import { StyledText } from '../../../styleguides/StyledText';
import StyledDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import { StyledH3 } from '../../../styleguides/Styledh3';
import { ScrollTop } from '../../../utils/ScrollToTopp';
import { StyledSTextSectionHeader } from '../../../styleguides/StyledSemiTextSectionHeader';
import { StyledATagLink } from '../../../styleguides/StyledATagLink';




export default function Schedule(props) {
    ScrollTop();
    return (
        <StyledDiv>
            <StyledTextSectionHeader>
                Schedule 
            </StyledTextSectionHeader>
            <StyledText> 
                Notice:
                Phones are allowed during the camp, 
                but after bedtime they are forbidden. 
                It's very important to get enough sleep to fully benefit from the camp.
                If you are allergic to something, please tell us before the camp so we can customize the meals.
                Try to always be on time, and be ready at least 5 min before activities start.
                <br/>
                <br/>
                <StyledSTextSectionHeader>Food</StyledSTextSectionHeader>
                <StyledText>
                <StyledATagLink href="http://www.classiccatering.no" target="balnk"> 
                 Welcome to a healthy and tasty food experience. 
                 Our camp is very lucky to have Classic Catering serve us food. 
                 Thank you for your support! 
                 ITTC appreciates it a lot, and so will the participants.
                  </StyledATagLink>
                </StyledText>
                <br/>
            </StyledText>
            <StyledH3>Day 1 Tuesday 07.04.2020 -Welcome to Harestua, Focus: basic footwork</StyledH3>
            <StyledText>
                15.00-17.00- Arrival- Installation and welcome to International Table Tennis Camp Norway. <br/>
                17.00-19.15 Briefing and short practice.<br/>
                17.00-18.00 Light food will be served<br/>
                21.00   Reveal the first group-activity.<br/>
                22:10- In bed, no phones after 22:30. Totally quiet. <br/><br/>
            </StyledText>
            <StyledH3>Day 2 -Working on the basics. Focus: Smart footwork</StyledH3>
            <StyledText>
            07.20- Wake Up.<br/>    
            07.50-  Gathering, be ready .<br/>
            08.15-  Breakfast  <br/>
            08.45- Prepare for practice (remember to fill bottles, towels and equipment. (bring camera if you want)) <br/>
            09.00-11.30-   Practice (4 exercises + 1 secret)<br/>
            12.00-    Lunch <br/>
            14.45- Prepare for practice (remember to fill bottles, towels and equipment. (bring camera if you want)) <br/>
            15.00-17.00-   Practice (2 exercises + multi-ball + service-receiving)<br/>
            17.00-17.45-   Physical training  with Hilding!<br/>
            17.45-18.30 Shower and get ready to eat dinner <br/>
            18.30-   Dinner (More information will come soon)<br/>
            19.30-20.30-   Learning table tennis theory and/or watching matches on video <br/>    
            21.00-21-45-  Let the games begin  <br/>      
            22:00- In bed, no phones after 22:30. Totally quiet. <br/><br/>
            </StyledText>
            <StyledH3>Day 3 - You just got served, did you receive? Focus: Serve, Tactics and Attitude</StyledH3>
            <StyledText>
            07.20- The show must go on, wake up.<br/>    
            07.50-  Gathering, be ready<br/>
            07.20-08.00 Games and/or running outside<br/>    
            08.15-  Breakfast  <br/>
            08.45- Prepare for practice (remember to fill bottles, towels and equipment. (bring camera if you want)) <br/>
            09.15-11.30-   Practice (4 exercises + 1 secret)<br/>
            12.00-    Lunch <br/>
            15.00-17.30-   Practice (2 exercises + multi-ball + service-receiving)<br/>
            17.30-18.10-   Physical training  with Hilding and Oscar!<br/>
            18.30-   Dinner (More information will come soon)<br/>
            19.30-20.00-   Learning table tennis theory and/or watching matches on video <br/> 
            20.30-21-45-  The games must continue  <br/>      
            22:00- In bed, no phones after 22:30. Totally quiet. <br/><br/>
            </StyledText>
            <StyledH3>Day 4 Friday 10.04.2020 Thank you for now and good luck! Focus: Repetition</StyledH3>
            <StyledText>
                07.30- Wake up<br/>  
                07.45- Let's get outside for some fresh air<br/>  
                08.20- Breakfast<br/>  
                09.00-11.30 Some repetition with match-related exercises<br/>
                12.00- 13.30 Lunch, clean up.<br/>  
                14.30- 17:00 Team Matches <br/>
                17.00-18.00 Summary of the camp <br/>
                18.00-20.00 Thanks for now, hope to see you again in Taiwan :). (Pick ups and home-travels)<br/>   
            </StyledText>
        </StyledDiv>
    )
}