import React from 'react';
import styled from 'styled-components';


const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


const CardBox = styled.div`
width: 100vw;
background-color: #ffffff;
background-image: url(${props => props.background});
background-image: ${props => props.backgroundN}
background-repeat: no-repeat, repeat;
background-size: cover; 
background-position: center;
padding: 8.8rem 2rem;
transition: 0.6s ease-in-out;
margin: 0 0 -30px 0;
&:hover {
    padding: 9.2rem 2.2rem;
}
`;


export default function Box(props) {
  return (
    <BoxWrapper >
      <CardBox background={props.background} backgroundN={props.backgroundN}>
        {props.children}
      </CardBox>
    </BoxWrapper>
  )
}