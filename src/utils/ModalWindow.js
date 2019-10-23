import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const FullScreenPicture = styled.img`
display: ${props => props.display};
z-index: 2;
border-radius: 0px;
position: fixed;
width: 100vw;
max-height: 100%;
cursor: pointer;

@media (max-width: 800px){
  border-radius: 0;
}
`;

const StyledIcon = styled.h1`
font-size: 30px;
    cursor: pointer;
    position: fixed;
    z-index: 3;
    margin: 14px 0 0 14px;
   &:hover {
     color: darkblue;
    }
`;

const ModalWindow = (props) => {
  return (
    <> <StyledIcon onClick={props.onClick}>
       <FontAwesomeIcon icon="times"/>  </StyledIcon>
    <FullScreenPicture src={props.source} display={props.display} onClick={props.onClick}/>

    </>
    );
}

export default ModalWindow;