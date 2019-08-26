import React from 'react';
import styled from 'styled-components';


const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;


const CardBox = styled.div`
width: 87vw;
padding: 2rem;
  box-shadow: 1px 4px 12px 0px rgba(0,0,0,0.2);
  border: 0.3px solid #000000;
  border-radius: 10% 10% 5% 5% ;
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