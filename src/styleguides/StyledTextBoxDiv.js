import React from 'react';
import styled from 'styled-components';


const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;


const CardBox = styled.div`
width: 89vw;
padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
  border: 0.3px solid #000000;
`;


export default function Box(props) {
    return(
<BoxWrapper>
         <CardBox>
          {props.children}
        </CardBox>
  </BoxWrapper>
    )
}