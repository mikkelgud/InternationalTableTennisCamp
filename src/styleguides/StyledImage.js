import Styled from 'styled-components';

export const StyledImage = Styled.img`
display: flex;
margin:0;
width: 100%;
height: 16vw;
padding: 0;
border-radius: 10px;
object-fit: fill;

@media (max-width: 1128px){
    height: 24vw;
    
}

@media (max-width: 909px){
    height: 34vw;
}

//  
`;