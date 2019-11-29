import React,{useState} from 'react';
import styled from "styled-components";
import { StyledTextSectionHeader } from '../../../styleguides/StyledSectionHeader';
import { StyledSTextSectionHeader } from '../../../styleguides/StyledSemiTextSectionHeader';
import StyledTextBoxDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledText } from '../../../styleguides/StyledText';
import { ScrollTop } from '../../../utils/ScrollToTopp';
import { Wrapper } from '../../../styleguides/StyledTextBoxWrapper';
import { StyledH3 } from '../../../styleguides/Styledh3';
import practice from '../../../Assets/Practise.jpeg';
import practice1 from '../../../Assets/Practise1.jpeg';
import practice2 from '../../../Assets/Practise2.jpeg';
import practice3 from '../../../Assets/Practise3.jpeg';
import practice4 from '../../../Assets/Practise4.jpeg';
import practice5 from '../../../Assets/Practise5.jpeg';
import practice6 from '../../../Assets/Practise7.jpeg';
import practice01 from '../../../Assets/TaiwanPractise.jpeg';
import practice11 from '../../../Assets/TaiwanPractise1.jpeg';
import practice21 from '../../../Assets/TaiwanPractise2.jpeg';
import practice31 from '../../../Assets/TaiwanPractise3.jpeg';
import practice41 from '../../../Assets/TaiwanPractise4.jpeg';
import BuildingRoom1 from '../../../Assets/TaiwanRoom.jpeg';
import BuildingRoom2 from '../../../Assets/TaiwanRoom1.jpeg';
import BuildingRoom3 from '../../../Assets/TaiwanRoom2.jpeg';
import BuildingWash from '../../../Assets/TaiwanWash.jpeg';
import BuildingLobby from '../../../Assets/TaiwanLobby.jpeg';
import BuildingBathroom from '../../../Assets/TaiwanBathRoom.jpeg';
import BuildingBathroom1 from '../../../Assets/TaiwanBathroom1.jpeg';
import BuildingBathroom2 from '../../../Assets/TaiwanBathroom2.jpeg';
import BuildingGym from '../../../Assets/TaiwanGym.jpeg';
import ModelVeiw from '../../../utils/ModalWindow';
import BuildingGym1 from '../../../Assets/TaiwanGym2.jpeg';
import {StyledImage} from '../../../styleguides/StyledImage';



const StyledIFrame = styled.iframe`
width: 100%;
height: 30rem;
object-fit: fill;
border-radius: 20px;
marign: 2rem 0;
`;




export default function TaiwanFacilites() {
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
            <StyledTextSectionHeader style={{textAlign: "center"}}>Welcome to Camp Taiwan in Tao Yuan</StyledTextSectionHeader>
            <br/>
            <StyledText>
             To ensure everyones practice quality is facilitated for their maximum performance level,
              we choose to live in a high standard hotel as well as eating nutritious and healthy food.
               The training center is placed few minutes walking distance from the hall and
            the training conditions are great with a lot of space and many tables.
            </StyledText>
            <br />
            <StyledSTextSectionHeader>Taiwan Facility Pictures  </StyledSTextSectionHeader>
            <br />
            <StyledH3>the Practice-halls</StyledH3>
            <Wrapper>
            <StyledImage src={practice01} onClick={() => {toggleBigScreen(practice01)}} />
            <StyledImage src={practice11}  onClick={() => {toggleBigScreen(practice11)}}/>
            <StyledImage src={practice21} onClick={() => {toggleBigScreen(practice21)}}/>
            <StyledImage src={practice31} onClick={() => {toggleBigScreen(practice31)}}/>
            <StyledImage src={practice41} onClick={() => {toggleBigScreen(practice41)}}/>
            <StyledImage src={practice} onClick={() => {toggleBigScreen(practice)}}/>
            <StyledImage src={practice1} onClick={() => {toggleBigScreen(practice1)}}/>
            <StyledImage src={practice2} onClick={() => {toggleBigScreen(practice2)}}/>
            <StyledImage src={practice3} onClick={() => {toggleBigScreen(practice3)}}/>
            <StyledImage src={practice4} onClick={() => {toggleBigScreen(practice4)}}/>
            <StyledImage src={practice5} onClick={() => {toggleBigScreen(practice5)}}/>
            <StyledImage src={practice6} onClick={() => {toggleBigScreen(practice6)}}/>
            </Wrapper>
            <StyledH3>The Buildning</StyledH3>
            <Wrapper>
            <StyledImage src={BuildingRoom1} onClick={() => {toggleBigScreen(BuildingRoom1)}} />
            <StyledImage src={BuildingRoom2} onClick={() => {toggleBigScreen(BuildingRoom2)}}/>
            <StyledImage src={BuildingRoom3} onClick={() => {toggleBigScreen(BuildingRoom3)}}/>
            <StyledImage src={BuildingWash} onClick={() => {toggleBigScreen(BuildingWash)}}/>
            <StyledImage src={BuildingLobby} onClick={() => {toggleBigScreen(BuildingLobby)}}/>
            <StyledImage src={BuildingBathroom} onClick={() => {toggleBigScreen(BuildingBathroom)}}/>
            <StyledImage src={BuildingBathroom1} onClick={() => {toggleBigScreen(BuildingBathroom1)}}/>
            <StyledImage src={BuildingBathroom2} onClick={() => {toggleBigScreen(BuildingBathroom2)}}/>
            <StyledImage src={BuildingGym} onClick={() => {toggleBigScreen(BuildingGym)}}/>
            <StyledImage src={BuildingGym1} onClick={() => {toggleBigScreen(BuildingGym1)}}/>
            </Wrapper>
               <StyledH3>Want to see and read more about the suroundings and culture in Tao yuan?
               Here are some videos you might find interesting to watch.</StyledH3>
               <br/>
           <StyledIFrame  src="https://www.youtube.com/embed/QG1yFIG8w3o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIFrame>
           <br/>
           <StyledIFrame src="https://www.youtube.com/embed/7eufzSHZFlw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIFrame>
               <br/>             
               <br/>
        </StyledTextBoxDiv>
        </React.Fragment>
    )
}