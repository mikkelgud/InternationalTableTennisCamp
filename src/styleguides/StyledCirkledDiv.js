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
  border: 0.3px solid #000000;
  transition: all 0.32678s ease-in-out;
  background-image: url(${props => props.backgorund});
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    color: white;
  border-radius: 20%;

}
  @media (max-width: 836px){
    max-width: 23rem;
    height: 300px;
    width: 300px; 
    color: white;
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