import React, {useState} from 'react';
import styled from 'styled-components';
import ModelVeiw from '../utils/ModalWindow';
import StyledText from '../styleguides/StyledText';
import travel from '../Assets/Travel.jpg'
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';


const StyledImageLocal = styled.img`
display: ${props => props.display};
z-index: 2;
border-radius: 0px;
position: fixed;
width: 100vw;
max-height: 100%;
cursor: pointer;

@media (max-width: 800px){
  border-radius: 0;
  height: 100vw;

}
`;



export default function WelcomeModule(props){
    const [display, setDisplayState] = useState("fixed")
return(
    <>
    <StyledImageLocal src={travel} display={display} onClick={()=> setDisplayState("none")}/>
</>
)
}