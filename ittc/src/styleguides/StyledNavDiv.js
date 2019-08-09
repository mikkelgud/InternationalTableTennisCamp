import Styled from 'styled-components';

export const StyledDiv = Styled.div`
display: flex;
align-items: center;
&:hover {
    color: red;
}
@media (max-width: 861px){
    display: none;
}
`;
