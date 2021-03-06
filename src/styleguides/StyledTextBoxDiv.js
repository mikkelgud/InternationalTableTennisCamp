import React from 'react';
import styled from 'styled-components';


const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;


const CardBox = styled.div`
width: 90vw;
background-color: #fdfdff;
padding: 2rem 6.7em;
// box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.2);
// box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
    border-radius: 25px;
@media (max-width: 500px){
  width: 100vw;
  padding: 0.8rem;
}
`;


export default function Box(props) {
  return (
    <BoxWrapper >
      <CardBox background={props.background} >
        {props.children}
      </CardBox>
    </BoxWrapper>
  )
}