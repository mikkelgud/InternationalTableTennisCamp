import React, {useState} from 'react';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import StyledTextBoxDiv from '../../../styleguides/StyledImageShoverDivBox';
import {StyledImage} from '../../../styleguides/StyledImage';
import { Wrapper } from '../../../styleguides/StyledTextBoxWrapper';
import ChinaAbove from '../../../Assets/ChinaAbove.png';
import ChinaAbove2 from '../../../Assets/ChinaAbove2.png';
import ChinaCity from '../../../Assets/ChinaCity.png';
import ChinaCoaches from '../../../Assets/ChinaCoaches.png';
import ChinaDiningHall from '../../../Assets/ChinaDiningHall.png';
import ChinaFood from '../../../Assets/ChinaFood.png';
import ChinaFoodTwo from '../../../Assets/ChinaFoodTwo.png';
import ChinaHall from '../../../Assets/ChinaHall.png';
import ChinaHallWithPople from '../../../Assets/ChinaHallwithPeople.png';
import ChinaParks from '../../../Assets/ChinaParks.png';
import ChinaMontain from '../../../Assets/ChinaMontain.png';
import ChinaGym from '../../../Assets/ChinaGym.png';
import { ScrollTop } from '../../../utils/ScrollToTopp';
import ModelVeiw from '../../../utils/ModalWindow';


export default function ChinaTravel() {
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
        <>
        {clickedState ? <ModelVeiw display={()=> displayState} source={bigScreenSource} onClick={() => {setDisplayState("none"); setClickedState(false); setBigScreenSource("");}}/> : null}
        <StyledTextBoxDiv>
            <StyledTextSectionHeader>China - Work in progress 
                <span role="img" aria-label="work-emoji">👨🏽‍💻</span>
                <span role="img" aria-label="work-emoji">👩🏻‍💻</span>
                <span role="img" aria-label="work-emoji">👨🏼‍💻</span>
                </StyledTextSectionHeader>
                </StyledTextBoxDiv>
            <Wrapper> 
            <StyledImage src={ChinaHall} onClick={() => {toggleBigScreen(ChinaHall)}}/>
            <StyledImage src={ChinaHallWithPople} onClick={() => toggleBigScreen(ChinaHallWithPople)}/>
            <StyledImage src={ChinaAbove} onClick={() => toggleBigScreen(ChinaAbove)}/>
            <StyledImage src={ChinaAbove2} onClick={() => toggleBigScreen(ChinaAbove2)}/>
            <StyledImage src={ChinaCity} onClick={() => toggleBigScreen(ChinaCity)}/>
            <StyledImage src={ChinaDiningHall} onClick={() => toggleBigScreen(ChinaDiningHall)}/>
             </Wrapper>
             <Wrapper> 
            <StyledImage src={ChinaFood} onClick={() => toggleBigScreen(ChinaFood)}/>
            <StyledImage src={ChinaFoodTwo} onClick={() => toggleBigScreen(ChinaFoodTwo)}/>
            <StyledImage src={ChinaGym} onClick={() => toggleBigScreen(ChinaGym)}/>
            <StyledImage src={ChinaParks} onClick={() => toggleBigScreen(ChinaParks)}/>
            <StyledImage src={ChinaCoaches} onClick={() => toggleBigScreen(ChinaCoaches)}/>
            <StyledImage src={ChinaMontain} onClick={() => toggleBigScreen(ChinaMontain)}/>
            </Wrapper>
      
  </>  )
}