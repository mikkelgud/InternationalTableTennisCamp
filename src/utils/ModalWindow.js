import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const FullScreenPicture = styled.img`
display: ${props => props.display};
z-index: 2;
border-radius: 0px;
position: fixed;
width: 100vw;
height: 100%;
cursor: pointer;
background-color: black;
object-fit: contain;

@media (max-width: 800px){
  border-radius: 0;
  height: 100vw;

}
`;

const StyledIcon = styled.h1`
font-size: 30px;
cursor: pointer;
position: fixed;
text-align: right;
color: #6b6b6b;
z-index: 3;
margin: 14px 0 0 14px;
   &:hover {
     color: white;
    }
    @media (max-width: 800px){
      border-radius: 0;
      height: 100vw;
      color: white;
      
    }
`;

const ModalWindow = (props) => {
  return (
    <>
     <StyledIcon onClick={props.onClick}>
       <FontAwesomeIcon icon="times"/>
      </StyledIcon>
    <FullScreenPicture src={props.source} display={props.display} onClick={props.onClick}/>
    </>
    );
}

export default ModalWindow;