import Styled from 'styled-components';

export const StyledImageForLeaders = Styled.img`
display: flex;
align-items: center;
justify-content: center;
width: 60vw;
border-radius: 10px;
object-fit: contain;
cursor: auto;
margin: 2em 0 3em ;


@media(max-width: 800px){
    width: 100vw;
    border-radius: 0;
}
`;

