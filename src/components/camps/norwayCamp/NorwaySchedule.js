import React from 'react';
import { StyledText } from '../../../styleguides/StyledText';
import StyledDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import { StyledH3 } from '../../../styleguides/Styledh3';
import { ScrollTop } from '../../../utils/ScrollToTopp';
import { StyledList} from '../../../styleguides/StyledList';
import { StyledListUnit } from '../../../styleguides/StyledListUnit';
import { StyledSTextSectionHeader } from '../../../styleguides/StyledSemiTextSectionHeader';
import { InfoBox } from '../../../styleguides/StyledInfoBox';

 /*OPTIONAL TEXT IF WE GET THE SPONSOR
   <StyledATagLink href="http://www.classiccatering.no" target="balnk"> 
                 Welcome to a healthy and tasty food experience. 
                 Our camp is very lucky to have Classic Catering serve us food. 
                 Thank you for your support! 
                 ITTC appreciates it a lot, and so will the participants.
                  </StyledATagLink> */


export default function Schedule(props) {
    ScrollTop();
    return ( 
        <StyledDiv>
            <StyledTextSectionHeader>  Schedule   </StyledTextSectionHeader>
           
                <StyledSTextSectionHeader>Notice</StyledSTextSectionHeader>
                <StyledText> If you are allergic to something, please tell us before the camp so we can customize the meals.
                Try to always be on time, and be ready at least 5 min before activities start.
                </StyledText> 
                <StyledSTextSectionHeader>Food</StyledSTextSectionHeader>
                    <StyledText>
                  It will be served breakfast, lunch and dinner every day.
                  All our meals will be adapted to the amount of exercise.
                </StyledText>
                <InfoBox>
            <StyledH3>Day 1 Tuesday 07.04.2020 -Welcome to Harestua, Focus: basic footwork</StyledH3>
            <StyledList>
            <StyledListUnit>  15.00-17.00- Arrival- Installation and welcome to International Table Tennis Camp Norway. </StyledListUnit>
            <StyledListUnit>    17.00-19.15 Briefing and short practice.</StyledListUnit>
            <StyledListUnit>  17.00-18.00 Light food will be served</StyledListUnit>
            <StyledListUnit>  21.00   Reveal the first group-activity.</StyledListUnit>
            <StyledListUnit>  22:10- In bed, no phones after 22:30. Totally quiet. </StyledListUnit>
            </StyledList>
            </InfoBox><InfoBox>
            <StyledH3>Day 2 -Working on the basics. Focus: Smart footwork</StyledH3>
            <StyledList>
           <StyledListUnit> 07.20- Wake Up.</StyledListUnit> 
           <StyledListUnit> 07.50-  Gathering, be ready .</StyledListUnit>
           <StyledListUnit> 08.15-  Breakfast  </StyledListUnit>
           <StyledListUnit> 08.45- Prepare for practice (remember to fill bottles, towels and equipment. (bring camera if you want)) </StyledListUnit>
           <StyledListUnit>  09.00-11.30-   Practice (4 exercises + 1 secret)</StyledListUnit>
           <StyledListUnit> 12.00-    Lunch </StyledListUnit>
           <StyledListUnit> 14.45- Prepare for practice (remember to fill bottles, towels and equipment. (bring camera if you want)) </StyledListUnit>
           <StyledListUnit> 15.00-17.00-   Practice (2 exercises + multi-ball + service-receiving)</StyledListUnit>
           <StyledListUnit> 17.00-17.45-   Physical training  with Hilding!</StyledListUnit>
           <StyledListUnit>  17.45-18.30 Shower and get ready to eat dinner </StyledListUnit>
           <StyledListUnit>  18.30-   Dinner (More information will come soon)</StyledListUnit>
           <StyledListUnit>  19.30-20.30-   Learning table tennis theory and/or watching matches on video </StyledListUnit>    
           <StyledListUnit>  21.00-21-45-  Let the games begin  </StyledListUnit>
           <StyledListUnit>  22:00- In bed, no phones after 22:30. Totally quiet. </StyledListUnit>
            </StyledList>
            </InfoBox><InfoBox>
            <StyledH3>Day 3 - You just got served, did you receive? Focus: Serve, Tactics and Attitude</StyledH3>
            <StyledList>
            <StyledListUnit> 07.20- The show must go on, wake up.</StyledListUnit>   
            <StyledListUnit>  07.50-  Gathering, be ready</StyledListUnit>
            <StyledListUnit> 07.20-08.00 Games and/or running outside</StyledListUnit>   
            <StyledListUnit> 08.15-  Breakfast  </StyledListUnit>
            <StyledListUnit> 08.45- Prepare for practice (remember to fill bottles, towels and equipment. (bring camera if you want)) </StyledListUnit>
            <StyledListUnit> 09.15-11.30-   Practice (4 exercises + 1 secret)</StyledListUnit>
            <StyledListUnit> 12.00-    Lunch </StyledListUnit>
            <StyledListUnit> 15.00-17.30-   Practice (2 exercises + multi-ball + service-receiving)</StyledListUnit>
            <StyledListUnit> 17.30-18.10-   Physical training  with Hilding and Oscar!</StyledListUnit>
            <StyledListUnit>  18.30-   Dinner (More information will come soon)</StyledListUnit>
            <StyledListUnit>  19.30-20.00-   Learning table tennis theory and/or watching matches on video </StyledListUnit>
            <StyledListUnit>  20.30-21-45-  The games must continue  </StyledListUnit>    
            <StyledListUnit> 22:00- In bed, no phones after 22:30. Totally quiet. </StyledListUnit>
            </StyledList>
            </InfoBox><InfoBox>
            <StyledH3>Day 4 Friday 10.04.2020 Thank you for now and good luck! Focus: Repetition</StyledH3>
            <StyledList>
            <StyledListUnit> 07.30- Wake up</StyledListUnit>  
            <StyledListUnit> 07.45- Let's get outside for some fresh air</StyledListUnit>  
            <StyledListUnit> 08.20- Breakfast</StyledListUnit>  
            <StyledListUnit>  09.00-11.30 Some repetition with match-related exercises</StyledListUnit>  
            <StyledListUnit> 12.00- 13.30 Lunch, clean up.</StyledListUnit>  
            <StyledListUnit>  14.30- 17:00 Team Matches </StyledListUnit>  
            <StyledListUnit>  17.00-18.00 Summary of the camp </StyledListUnit>  
            <StyledListUnit>  18.00-20.00 Thanks for now, hope to see you again in Taiwan :). (Pick ups and home-travels)</StyledListUnit>    
            </StyledList>
            </InfoBox>
        </StyledDiv>
    )
}