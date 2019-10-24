import React from 'react';
import styled from 'styled-components';


const CardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%; 
  height: 100%;
`;


const CardBox = styled.div`
padding: 2.5rem;
  height: 100%;
  width: 100%; 
  border-radius: 25px;
 box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
  transition: all 0.22678s ease-in-out;
  // background-image: url(${props => props.backgorund});
  // background-repeat: no-repeat;
  // background-size: cover;
  background-color: #ffffff;

  &:hover {
    background-color: #4267b2;
    color: white;
    box-shadow: 0 1px 35px 0 rgba(32,33,36,0.28);
}
`;


export default function Card(props) {
    return(
       <CardWrapper>
         <CardBox backgorund={props.background}>
          {props.children}
        </CardBox>
       </CardWrapper>
    )
}