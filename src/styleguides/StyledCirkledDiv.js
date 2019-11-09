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
  height: 340px;
  width: 340px; 
  border-radius: 100%;
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
  border: 1px solid #000000;
  transition: all 0.22678s ease-in-out;
  background-image: url(${props => props.backgorund});
  background-repeat: no-repeat;
  background-size: cover;
  color: #cbcbcb;
  &:hover {
    background-color: black;
    border-radius: 20%;
    color: white;
    box-shadow: 0px 2px 18px 10px rgba(0,0,0,0.2);
}
  @media (max-width: 1230px){
    color: white;
    max-width: 23rem;
    height: 300px;
    width: 300px; 
    background-color: black;
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