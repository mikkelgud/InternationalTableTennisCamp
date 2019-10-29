import React, { useState } from 'react';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import { StyledSTextSectionHeader } from '../../../styleguides/StyledSemiTextSectionHeader';
import StyledTextBoxDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../../styleguides/StyledText';
import { StyledATagLink } from '../../../styleguides/StyledATagLink';
import { ScrollTop } from '../../../utils/ScrollToTopp';
import Hall from '../../../Assets/Harestuahall.png';
import Hall1 from '../../../Assets/HarestuaHall1.png';
import Buildning from '../../../Assets/HarestuaHallBygg.png';
import Buildning2 from '../../../Assets/HaresuaBuilding.jpeg';
import { Wrapper } from '../../../styleguides/StyledTextBoxWrapper';
import { StyledH3 } from '../../../styleguides/Styledh3';
import Station from '../../../Assets/HarestuaStasjon.jpeg';
import Kiwi from '../../../Assets/HarestuaKiwi.jpg';
import HarestuaHall from '../../../Assets/HarestuaHall.jpeg';
import ArenaHandbal from '../../../Assets/ArenaHandbal.jpeg';
import { StyledImage } from '../../../styleguides/StyledImage';
import ModelVeiw from '../../../utils/ModalWindow';



export default function NorwayTravel(props) {
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
                <StyledTextSectionHeader>Welcome to Camp Norway in Harestua</StyledTextSectionHeader>
                <StyledText>
                    We will stay, practice, sleep and eat inside the Harestua Arena
                    <StyledATagLink target="blank" href="https://www.google.com/maps/dir//Harestua+Arena,+Elvefaret+22,+2743+Harestua/@60.2091828,10.713969,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x46419f7b25edc42b:0xecdfa6f6adc8441d!2m2!1d10.7161577!2d60.2091828"> (Get destination). </StyledATagLink>
                    Harestua is situated 30 minutes away by train from Oslo Central Station, in the district of Lunner. 
                    Lunner is a small area in the municipality of Oppland.
                    Harestua is a small place with just over 2300 inhabitants, making it very safe.
                   The sport arena is 2700 square meters and contains a modern table tennis hall,
                    athletics hall and gymnastics hall. It was built in 2016 and has a
                     kitchen, changing rooms and comfortable areas to relax in, which will be at our disposal during the camp.
                    This facility and placement is perfect for our players table tennis developement.
            </StyledText>
                <br />
                <StyledSTextSectionHeader>Harestua facility pictures  </StyledSTextSectionHeader>
                <Wrapper>
                <StyledH3>Inside the facility.<br/> The first hall</StyledH3>
                <StyledImage src={HarestuaHall} onClick={() => {toggleBigScreen(HarestuaHall)}}/>
                <StyledImage src={ArenaHandbal} onClick={() => {toggleBigScreen(ArenaHandbal)}}/>
                <StyledH3> the second hall</StyledH3>
                <StyledImage src={Hall} onClick={() => {toggleBigScreen(Hall)}}/>
                    <StyledImage src={Hall1} onClick={() => {toggleBigScreen(Hall1)}}/>
                    <StyledH3>Outside the facility</StyledH3>
                    <StyledImage src={Buildning} onClick={() => {toggleBigScreen(Buildning)}}/>
                    <StyledImage src={Buildning2} onClick={() => {toggleBigScreen(Buildning2)}}/>
                    <StyledH3>Surroundings</StyledH3>
                    <StyledImage src={Station} onClick={() => {toggleBigScreen(Station)}} />
                    <StyledImage src={Kiwi} onClick={() => {toggleBigScreen(Kiwi)}} />
                </Wrapper>
                <StyledATagLink target="blank" href="https://sagparken.no/hva-er-sagparken/">
                    Want to see and read more about Harestua?
               </StyledATagLink>
                <br />
                <br />
                <StyledATagLink target="blank" href="mailto: contactus@ittcamp.com">
                    If you have any trouble with your travel to Harestua, don´t hesitate to contact us at contactus@ittcamp.com.
             </StyledATagLink>
            </StyledTextBoxDiv>
        </React.Fragment>
    )
}