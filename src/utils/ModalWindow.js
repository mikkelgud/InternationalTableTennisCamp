import React, {useState} from 'react';
import styled from 'styled-components';

const LocalModal = styled.div`
display: ${props => props.modal};
width: 100vw;
`;

const FullScreenPicture = styled.img`
display: ${props => props.modal};
width: 100%;

`;

const ModalWindow = (props) => {
  const [showModalState, setShowModalState] = useState(true);
  const [modal, setModal] = useState("block");

  const toggelModalState =()=> {
    setShowModalState(!showModalState);
    showModalState ? setModal("block"): setModal("none");
  }
  return (
    <LocalModal show={showModalState} modal={modal}>
    <FullScreenPicture href={props.source} onClick={()=> toggelModalState()} modal={modal}/>
    </LocalModal>
    );
}

export default ModalWindow;