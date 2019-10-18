import React from 'react';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import StyledTextBoxDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../../styleguides/StyledText';
import {StyledATagLink} from '../../../styleguides/StyledATagLink';
import { ScrollTop } from '../../../utils/ScrollToTopp';
import { StyledH3 } from '../../../styleguides/Styledh3';

export default function TaiwanTravel() {
    ScrollTop();
    return (
        <StyledTextBoxDiv>
            <StyledTextSectionHeader>Welcome to Camp Taiwan in Tao Yuan</StyledTextSectionHeader>
            <br/>
                <StyledH3> We will travel from</StyledH3>
                <br/>
                <StyledText>
              We will arrange travels with ITTCamp leaders from 2 airports. 
              So remember to tell us from which airport you want to travel from.
              The two airports we arrange traveling company from is:
              <br/>
              <br/>
              <ol>
              <li>Gardemoen, Norway</li>
              <br/>
              <li>Castrup, Denmark</li>
              </ol>
              <br/>
              </StyledText>
              <StyledH3>Tickets and general information</StyledH3>
              <br/>
              <StyledText>
              We recomend you to let us buy the flight tickets so we can arrive at the same time. 
              We will also arrange the travel from the airport to the camp hotel (Included in camp price).
              If you want to buy the ticket yourself that's okey, but we need to be informed about this. 
              Then you confirm your sign up by deposit 2000 Kroners to ittcamp. 
              If you choose this you also have to pay the travel to the hotel yourself (We will of course help you to arrange the travel). 
             If we buy your ticket this will be done after we receive the 7000 kroners for the ticket.
               If the ticket is cheaper than 7000,
               the rest will count as a part of the payment of the camp.
               If the ticket is more expensive we will pay the rest for you. 
               So no worries, the ticket is a maximum of 7000 for you (Of course both ways).
               <br/>
               <br/>
               </StyledText>
              <StyledH3>Travel process if we fix your ticket</StyledH3>
               <br/>
              <StyledText>
              <ol>
              <li>--> Confirm sign up by sending us 7000 kroners</li>
              <li>--> Get your tickets with information about when to meet at the airport</li>
              <li>--> Enjoy the travels and get to know your fellow camp members</li>
              <li>--> Land in Taiwan where the buss will be waiting for us</li>
              <li>--> Arrive at the hotel and charge batteries for the first practice</li>
              </ol>
            </StyledText>
              <br/> 
              <StyledH3>Travel process if you fix your ticket</StyledH3>
               <br/>
              <StyledText>
              <ol>
              <li>--> Confirm sign up by sending us the deposit of 2000 kroners</li>
              <li>--> Buy your tickets and send us information about when you land at the airport in Tao Yuan</li>
              <li>--> Land in Taiwan where the taxi will be waiting for you</li>
              <li>--> Arrive at the hotel and pay the taxidriver</li>
              <li>--> Charge batteries for the first practice</li>
             
              </ol>
            </StyledText>
              <br/> 
              <StyledH3>Things to think about</StyledH3>
<br/>
              <StyledText>
                  The travel is aprox 16 hours. So we recomend you to bring books, headset, 
                  powerbanks and other stuff that may make the time go faster.
                  Maybe write down something you want to improve during your stay in Taiwan.
                  If you travel with the group, try to spend time getting to know each other.
                  And please, remember your passport.
              </StyledText>
              <br/>
              <br/>
            <StyledATagLink 
            href="mailto: contactus@ittcamp.com"> 
            If you have any questions according to the Taiwan traveling process 
            , don´t hesitate to contact us at contactus@ittcamp.com.
             </StyledATagLink> 
        </StyledTextBoxDiv>
    )
}