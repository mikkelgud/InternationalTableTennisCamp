import React from 'react';
import styled from 'styled-components';


const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;


const CardBox = styled.div`
width: 75vw;
padding: 2rem;
  box-shadow: 1px 4px 1px 0px rgba(0,0,0,0.2);
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