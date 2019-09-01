import React from 'react';
import styled from 'styled-components';
import { StyledATagLink } from '../styleguides/StyledATagLink';
import { withRouter } from "react-router-dom";



const LocalWrapper = styled.div`
display: flex;
align-items: space-between;
justify-content: center;
`;

const FooterStyleDivWrapper = styled.footer`
align-items: space-between;
justify-content: center;
position: relative;
padding: 8px 40px;
width: 80%;
border-top: 1px solid #e1e4e8;
margin-top: 20px;
`;

const Wrapper = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 2rem;
margin: 2rem 2rem 2rem 2rem;
position: absoulte;

@media (min-width: 1129px){
    grid-template-columns: auto auto auto auto;
    margin: 2rem 2rem 2rem 10.5rem;
}
@media (max-width: 510px){
    grid-template-columns: auto;
}
`;



const StyledTextLocal = styled.p`
font-family: 'Oswald', sans-serif;

`;




 function Footer(props) {
    return (
        <LocalWrapper>
        <FooterStyleDivWrapper>
                <Wrapper>
                    <div>
                <StyledATagLink href="mailto: join@ittcamp.com">
                <StyledTextLocal>Join camp</StyledTextLocal> 
                </StyledATagLink>
                </div>
                <div>
                <StyledATagLink onClick={() => { props.history.push("/aboutus/"); }}>
                <StyledTextLocal>about us</StyledTextLocal>
                </StyledATagLink>
                </div>
                <div>
                <StyledATagLink onClick={() => { props.history.push("/leaders/"); }}>
                <StyledTextLocal>ITTC-team</StyledTextLocal>
                </StyledATagLink>
                </div> 
                <div>
                <StyledATagLink href="mailto: mikkel_gudmundsen@hotmail.com">
                <StyledTextLocal>Developer Mikkel<span role="img" aria-label="mail">📩</span></StyledTextLocal>
                </StyledATagLink>
                </div> 
            </Wrapper>
        </FooterStyleDivWrapper>
        </LocalWrapper>
    );


}export default withRouter(Footer);