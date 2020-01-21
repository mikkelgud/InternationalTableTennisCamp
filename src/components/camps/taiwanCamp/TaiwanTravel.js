import React, {useState} from 'react';
import styled from 'styled-components';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import StyledTextBoxDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../../styleguides/StyledText';
import { ScrollTop } from '../../../utils/ScrollToTopp';
import { StyledH3 } from '../../../styleguides/Styledh3';
import ModelVeiw from '../../../utils/ModalWindow';
import visaInfo from '../../../Assets/Visa_policy_of_Taiwan.png';
import { StyledList } from '../../../styleguides/StyledList';
import { StyledListUnit } from '../../../styleguides/StyledListUnit';
import { InfoBox } from '../../../styleguides/StyledInfoBox';



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
                <StyledText>
                  The flight cost varies from 6000-8000 NOK (600-800 Euro) when traveling from scandinavia. 
                  </StyledText>
                  <InfoBox>
                  <StyledH3>
              You have two options available for the travel to Tao Yuan:
              </StyledH3>
             <StyledText>
              1. Buy the ticket yourself and tell us when you will arrive in Tao Yuan.
              </StyledText>
              <StyledText>
              2. Send us 7000 NOK in advance for the ticket and we will fix the tickets for you.
              </StyledText>
              </InfoBox>
         <InfoBox>
             <StyledH3> We will arrange travel companions from two airports: </StyledH3>
             <StyledText>
              <StyledList>
              <StyledListUnit>Gardemoen, Norway</StyledListUnit>
              <StyledListUnit>Kastrup, Denmark</StyledListUnit>
              </StyledList>
              </StyledText>
              </InfoBox>
          
              <StyledH3>Tickets and general information</StyledH3>
              <StyledText>
              If you choose that we buy your tickets, this will be done when we receive the 7000 NOK.
              We will also arrange the travel from the airport to the camp hotel (Included in camp price).
              If you want to buy the ticket yourself that's okey, but we need to be informed about this. 
              </StyledText>
              <StyledH3>
                Visa
              </StyledH3>
              <StyledText>
              Most western countries dosen't need a visa to enter Taiwan. 
            check if your country needs visa here.
              <StyledImageLocal src={visaInfo} onClick={()=> toggleBigScreen(visaInfo)}/>
              </StyledText>
              <InfoBox>
              <StyledH3>Travel process if we fix your ticket:</StyledH3>
              <StyledText>
              <ol>
              <StyledListUnit>--> Confirm sign up by sending us 7000 NOK.</StyledListUnit>
              <StyledListUnit>--> We subtract or add the rest to the camp price.</StyledListUnit>
              <StyledListUnit>--> We send you information about when to meet at the airport.</StyledListUnit>
              <StyledListUnit>--> Enjoy the travel and get to know your fellow camp members.</StyledListUnit>
              <StyledListUnit>--> Land in Taiwan where the buss will be waiting for you.</StyledListUnit>
              <StyledListUnit>--> Arrive at the hotel and charge batteries for the first practice.</StyledListUnit>
              </ol>
            </StyledText>
            </InfoBox><InfoBox>
              <StyledH3>Travel process if you fix your ticket:</StyledH3>
              <StyledText>
              <ol>
              <StyledListUnit>--> Confirm sign up by sending us the deposit of 2000 NOK.</StyledListUnit>
              <StyledListUnit>--> Buy your tickets and send us information about when you land at the airport in Tao Yuan.</StyledListUnit>
              <StyledListUnit>--> Land in Taiwan where the taxi will be waiting for you.</StyledListUnit>
              <StyledListUnit>--> Arrive at the hotel.</StyledListUnit>
              <StyledListUnit>--> Charge batteries for the first practice.</StyledListUnit>
              </ol>
            </StyledText>
            </InfoBox>
              <StyledH3>Things to think about</StyledH3>
              <StyledText>
                  The travel is aprox 16 hours. So we recomend you to bring books, headset, 
                  powerbanks and other stuff that may make the time go faster.
                  Maybe write down something you want to improve during your stay in Taiwan.
                  If you travel with the group, try to spend time getting to know each other.
                  And please, remember your passport.
              </StyledText>
        </StyledTextBoxDiv>
        </React.Fragment>
        )
}