import styled from 'styled-components';

export const Wrapper = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 2rem;
margin: 2rem;
position: absoulte;

@media (min-width: 1800px){
     grid-template-columns: auto auto auto auto;
}
@media (max-width: 1129px){
    grid-template-columns: auto auto;
}
@media (max-width: 909px){
    grid-template-columns: auto;
}
`;

