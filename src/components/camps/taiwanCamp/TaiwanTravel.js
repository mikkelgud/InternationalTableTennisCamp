import React, {useState} from 'react';
import styled from 'styled-components';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import StyledTextBoxDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../../styleguides/StyledText';
import { ScrollTop } from '../../../utils/ScrollToTopp';
import { StyledH3 } from '../../../styleguides/Styledh3';
import ModelVeiw from '../../../utils/ModalWindow';
import visaInfo from '../../../Assets/Visa_policy_of_Taiwan.png';



const StyledImageLocal = styled.img`
display: flex;
margin:0;
width: 50%;
padding: 0;
border-radius: 10px;
object-fit: contain;
cursor: pointer;
border: 1px solid black;
`;

export default function TaiwanTravel() {
    ScrollTop();

    const [clickedState, setClickedState] = useState(false);
    const [bigScreenSource, setBigScreenSource] = useState("");
    const [displayState, setDisplayState] = useState("none");

    const toggleBigScreen = (source) => {
        if (!clickedState && bigScreenSource !== source) {
            setClickedState(!clickedState);
            setBigScreenSource(source);
            setDisplayState("block");
        } else {
            setBigScreenSource(source);
        }
    }


    return (
<React.Fragment>
      {clickedState ? <ModelVeiw display={()=> displayState} source={bigScreenSource} onClick={() => {setDisplayState("none"); setClickedState(false); setBigScreenSource("");}}/> : null}

        <StyledTextBoxDiv>
            <StyledTextSectionHeader style={{textAlign: "center"}}>Your travel to Tao Yuan</StyledTextSectionHeader>
               <br/>
               <br/>
                <StyledH3> We will travel from</StyledH3>
                <StyledText>
              We will only arrange and buy travels with ITTCamp leaders from two airports. 
              So remember to tell us from which one of the two airports you want to travel from:
              <br/>
              <br/>
              <ol>
              <li>Gardemoen, Norway</li>
              <br/>
              <li>Kastrup, Denmark</li>
              </ol>
              <br/>
              <br/>
              If you want to travel from other airports, or simply fix the travel yourself that's fine.
               But please inform us about your travel-plan so we can coordinate the pick up at the airport in Taiwan, Tao Yuan.
              <br/>
              <br/>
              </StyledText>
              <StyledH3>Tickets and general information</StyledH3>
              <StyledText>
              If you choose that we buy your tickets, this will be done when we receive the 7000 NOK.
              We will also arrange the travel from the airport to the camp hotel (Included in camp price).
               <br/>
              If you want to buy the ticket yourself that's okey, but we need to be informed about this. 
              Then you confirm your sign up by deposit 2000 NOK to ittcamp.
              If you choose this you also have to pay the travel to the hotel yourself (We will of course help you to arrange the pick up at the airport if wanted). 
            <br/>
              <br/>
              <br/>
              <StyledH3>
                Visa
              </StyledH3>
              Most western countries dosen't need a visa to enter Taiwan. 
            check if your country needs visa here.
              <StyledImageLocal src={visaInfo} onClick={()=> toggleBigScreen(visaInfo)}/>
        
              <br/>
               <br/>
              <br/>
               </StyledText>
              <StyledH3>Travel process if we fix your ticket</StyledH3>
              <StyledText>
              <ol>
              <li>--> Confirm sign up by sending us 7000 NOK</li>
              <li>--> Get your tickets with information about when to meet at the airport</li>
              <li>--> Enjoy the travels and get to know your fellow camp members</li>
              <li>--> Land in Taiwan where the buss will be waiting for you</li>
              <li>--> Arrive at the hotel and charge batteries for the first practice</li>
              </ol>
            </StyledText>
               <br/>
              <br/> 
              <StyledH3>Travel process if you fix your ticket</StyledH3>
              <StyledText>
              <ol>
              <li>--> Confirm sign up by sending us the deposit of 2000 NOK</li>
              <li>--> Buy your tickets and send us information about when you land at the airport in Tao Yuan</li>
              <li>--> Land in Taiwan where the taxi will be waiting for you</li>
              <li>--> Arrive at the hotel and pay the taxidriver</li>
              <li>--> Charge batteries for the first practice</li>
              </ol>
            </StyledText>
            <br/> 
              <br/> 
              <StyledH3>Things to think about</StyledH3>
              <StyledText>
                  The travel is aprox 16 hours. So we recomend you to bring books, headset, 
                  powerbanks and other stuff that may make the time go faster.
                  Maybe write down something you want to improve during your stay in Taiwan.
                  If you travel with the group, try to spend time getting to know each other.
                  And please, remember your passport.
              </StyledText>
              <br/>
              <br/>
        </StyledTextBoxDiv>
        </React.Fragment>
        )
}