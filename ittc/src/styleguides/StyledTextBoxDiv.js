import React from 'react';
import styled from 'styled-components';


const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`;


const CardBox = styled.div`
  max-width: 20rem; 
  padding: 1.336912rem;
  border-radius: 25px;
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
  border: 5px solid #ffffff41;
  transition: all 0.12678s ease-in-out;
`;


export default function Card(props) {
 
    return(
       <CardWrapper>
         <CardBox>
          {props.children}
        </CardBox>
       </CardWrapper>
    )
}