import React from 'react';
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
import BuildingGym1 from '../../../Assets/TaiwanGym2.jpeg';


const StyledImage = styled.img`
width: 100%;
object-fit: contain;
border-radius: 20px;
`;

const StyledIFrame = styled.iframe`
width: 100%;
height: 30rem;
object-fit: fill;
border-radius: 20px;
marign: 2rem 0;
`;




export default function TaiwanFacilites() {
    ScrollTop();
    return (
        <StyledTextBoxDiv>
            <StyledTextSectionHeader>Welcome to Camp Taiwan in Tao Yuan</StyledTextSectionHeader>
            <StyledText>
                We will live in a hotel placed in a sport complex.
                It's high standards compared with other hotels nearby, and is placed right beside the training-hall.
                The halls has good airconditioner and one of them has red table tennis floor placed at the whole floor. 
                The light is good and the players are motivaded.
            </StyledText>
            <br />
            <StyledSTextSectionHeader>Taiwan Facility Pictures  </StyledSTextSectionHeader>
            <br />
            <StyledH3>the Practice-halls</StyledH3>
            <Wrapper>
            <StyledImage src={practice01} />
            <StyledImage src={practice11} />
            <StyledImage src={practice21} />
            <StyledImage src={practice31} />
            <StyledImage src={practice41} />
            <StyledImage src={practice} />
            <StyledImage src={practice1} />
            <StyledImage src={practice2} />
            <StyledImage src={practice3} />
            <StyledImage src={practice4} />
            <StyledImage src={practice5} />
            <StyledImage src={practice6} />
            </Wrapper>
            <StyledH3>The Buildning</StyledH3>
            <Wrapper>
            <StyledImage src={BuildingRoom1} />
            <StyledImage src={BuildingRoom2} />
            <StyledImage src={BuildingRoom3} />
            <StyledImage src={BuildingWash} />
            <StyledImage src={BuildingLobby} />
            <StyledImage src={BuildingBathroom} />
            <StyledImage src={BuildingBathroom1} />
            <StyledImage src={BuildingBathroom2} />
            <StyledImage src={BuildingGym} />
            <StyledImage src={BuildingGym1} />
            </Wrapper>
               <StyledH3>Want to see and read more from the suroundings and culture in Tao yuan?
               Here are some videos you might find interesting to watch.</StyledH3>
               <br/>
           <StyledIFrame  src="https://www.youtube.com/embed/QG1yFIG8w3o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIFrame>
           <br/>
           <StyledIFrame src="https://www.youtube.com/embed/7eufzSHZFlw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIFrame>
               <br/>             
               <br/>
        </StyledTextBoxDiv>
    )
}