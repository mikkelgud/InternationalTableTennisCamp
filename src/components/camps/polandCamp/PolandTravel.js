import React, {useState} from 'react';
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import StyledTextBoxDiv from '../../../styleguides/StyledImageShoverDivBox';
import { StyledText } from '../../../styleguides/StyledText';
import {StyledImage} from '../../../styleguides/StyledImage';
import { Wrapper } from '../../../styleguides/StyledTextBoxWrapper';
import TennisCourt from '../../../Assets/PolandTennisCourt.png';
import Beds from '../../../Assets/PolenBeds.png';
import Campus from '../../../Assets/PolenCampus.png';
import TableTennis from '../../../Assets/PolandTableTennis.png';
import Fotbal2 from '../../../Assets/PolenFotballBane2.png';
import Reception from '../../../Assets/PolenReception.png';
import BathAndSauna from '../../../Assets/PolandPoolSauna.png';
import Handball from '../../../Assets/PolandHandBallField.png';
import DiningHall from '../../../Assets/PolenSpiseSall.png';
import { ScrollTop } from '../../../utils/ScrollToTopp';
import ModelVeiw from '../../../utils/ModalWindow';



export default function PolandTravel() {
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
            <StyledTextSectionHeader>Poland - Work in progress 
                <span role="img" aria-label="work-emoji">👨🏽‍💻</span>
                <span role="img" aria-label="work-emoji">👩🏻‍💻</span>
                <span role="img" aria-label="work-emoji">👨🏼‍💻</span>
                </StyledTextSectionHeader>
                </StyledTextBoxDiv>
            <Wrapper> 
            <StyledImage src={Campus} onClick={() => {toggleBigScreen(Campus)}}/>
            <StyledImage src={Reception} onClick={() => {toggleBigScreen(Reception)}}/>
            <StyledImage src={TableTennis} onClick={() => {toggleBigScreen(TableTennis)}}/>
            <StyledImage src={DiningHall} onClick={() => {toggleBigScreen(DiningHall)}}/>
            <StyledImage src={BathAndSauna} onClick={() => {toggleBigScreen(BathAndSauna)}}/>
            <StyledImage src={Handball} onClick={() => {toggleBigScreen(Handball)}}/>
            <StyledImage src={Beds} onClick={() => {toggleBigScreen(Beds)}}/>
            <StyledImage src={Fotbal2} onClick={() => {toggleBigScreen(Fotbal2)}}/>
            <StyledImage src={TennisCourt} onClick={() => {toggleBigScreen(TennisCourt)}}/>
            </Wrapper>
            <StyledText>
            </StyledText>
        </>
    )
}