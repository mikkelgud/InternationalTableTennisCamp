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
                but after bedtime they are strictly forbidden. 
                It's very important to get enough sleep to fully benefit from this camp.
                And if you are alergic to something, please tell us before the camp so we can customize.
                Always be on time, and be ready at least 5 min before activities start.
                <br/>
                <br/>
                <StyledSTextSectionHeader>Food</StyledSTextSectionHeader>
                <StyledText>
                <StyledATagLink href="http://www.classiccatering.no" target="balnk"> 
                 Welcome to a healthy and tasty food experience. 
                 Our camp is very lucky to have Classic Catering company serve us food. 
                 Thank you for your support! 
                 ITTC appreciate it a lot, and so will the participants.
                  </StyledATagLink>
                </StyledText>
                <br/>
            </StyledText>
            <StyledH3>Day 1 Monday xx.xx.xxxx -Welcome to Harestua</StyledH3>
            <StyledText>
                15.00-17.00- Arrival- Instalation and welcome to International Table Tennis Camp Norway. <br/>
                17.00-18.00 Light food will be served<br/>
                18.00-20.15 Briefing and short practice.<br/>
                21.00 Making Teams, and reveal the first activity.<br/>
                22:00- In bed, no phones 22:30 totaly quiet <br/><br/>
            </StyledText>
            <StyledH3>Day 2 -Just the beginning, let's start with the basics. Focus: Smart footwork</StyledH3>
            <StyledText>
            07.00- The show must go on, wake up.<br/>    
            07.20-  Gathering, be ready to go outside.<br/>
            07.20-08.00 Games and running outside<br/>    
            08.15-  Breakfast  <br/>
            08.45- preapare practice (remember fill bottles, towels and equipment. (camera if you want)) <br/>
            09.15-11.30-   Practice ( 4 exercises + 1 secret)<br/>
            12.00-    Lunch <br/>
            15.00-17.30-   Practice (2 exercises + multi-ball + service-receiving)<br/>
            17.30-18.10-   Physical training  with Mikkel and Hidling!<br/>
            18.30-   Dinner (More information will come soon)<br/>
            19.30-20.30-   Learning table tennis theory and/or Watch matches on video <br/>    
            21.00-21-45-  Let the games begin  <br/>      
            22:00- In bed, no phones 22:30 totaly quiet <br/><br/>
            </StyledText>
            <StyledH3>Day 3 - You just got served, did you receive? Focus: Tactics</StyledH3>
            <StyledText>
            07.00- The show must go on, wake up.<br/>    
            07.20-  Gathering, be ready to go outside.<br/>
            07.20-08.00 Games and/or running outside<br/>    
            08.15-  Breakfast  <br/>
            08.45- preapare practice (remember fill bottles, towels and equipment. (camera if you want)) <br/>
            09.15-11.30-   Practice ( 4 exercises + 1 secret)<br/>
            12.00-    Lunch <br/>
            15.00-17.30-   Practice (2 exercises + multi-ball + service-receiving)<br/>
            17.30-18.10-   Physical training  with Hilding and Oscar!<br/>
            18.30-   Dinner (More information will come soon)<br/>
            19.30-20.30-   Learning table tennis theory and/or Watch matches on video <br/> 
            21.00-21-45-  The games must continue  <br/>      
            22:00- In bed, no phones 22:30 totaly quiet <br/><br/>
            </StyledText>
            <StyledH3>Day 4 - Let's see what we have learned</StyledH3>
            <StyledText>
            07.00- The show must go on, wake up.<br/>    
            07.20-  Gathering, be ready to go outside.<br/>
            07.20-08.00 Games and running outside<br/>    
            08.15-  Breakfast  <br/>
            08.45- preapare practice (remember fill bottles, towels and equipment. (camera if you want)) <br/>
            09.15-11.30-   Matches (Tournament)<br/>
            12.00-    Lunch <br/>
            15.00-18.00-   Let the tournament continue<br/>
            18.30-   Dinner (More information will come soon)<br/>
            19.30-20.30-   Sum up the tournament<br/>  
            21.00-22.00-  Pack your bags, tommorow it's time to go home and continue the good work!<br/>   
            22.00-23.20  Let's have some fun! <br/>       
            23:59  bed time - everything should now be packed<br/><br/>
            </StyledText>
            <StyledH3>Day 5 Friday xx.xx.xxxx Thank you for now and good luck! Focus: Repetition</StyledH3>
            <StyledText>
                07.30- Wake up<br/>  
                07.45- Let's get outside for some fresh air again<br/>  
                08.20- Breakfast<br/>  
                09.00-11.30 last practice <br/>
                12.00- 13.30 lunch, clean up and Sum up.<br/>  
                14.00-17.00 Thanks for now, time to go home. (Pick ups and travels home)<br/>   
            </StyledText>
        </StyledDiv>
    )
}