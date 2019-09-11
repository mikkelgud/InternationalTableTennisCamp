import React from 'react';
import styled from 'styled-components';
import { StyledATagLink } from '../styleguides/StyledATagLink';
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



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
grid-gap: 2rem;
position: absoulte;

@media (min-width: 1129px){
    grid-template-columns: auto auto auto auto auto auto auto;
    margin: 2rem 2rem 2rem 4rem;
}
@media (max-width: 1129px){
    grid-template-columns: auto auto auto auto auto;
    margin: 2rem 2rem 2rem 5.5rem;
}
@media (max-width: 927px){
    grid-template-columns: auto auto auto auto;
margin: 2rem 2rem 2rem 2.5rem;
}
@media (max-width: 627px){
    grid-template-columns: auto auto;
margin: 2rem 2rem 2rem 1rem;
}

@media (max-width: 510px){
    grid-template-columns: auto;
}
`;

const StyledTextLocal = styled.p`
font-family: 'Oswald', sans-serif;

`;

const StyledIcon = styled.h1`
margin: 0;
`;




function Footer(props) {
    return (
        <LocalWrapper>
            <FooterStyleDivWrapper>
                <Wrapper>
                    <div>
                        <StyledTextLocal>
                            <StyledATagLink
                                onClick={() => { props.history.push("/aboutus"); }}>
                                About us
                            </StyledATagLink>
                        </StyledTextLocal>
                    </div>
                    <div>
                        <StyledTextLocal>
                            <StyledATagLink
                                onClick={() => { props.history.push("/leaders"); }}>
                                ITTC-team
                                 </StyledATagLink>
                        </StyledTextLocal>
                    </div>
                    <div>
                        <StyledTextLocal>
                            <StyledATagLink
                                href="mailto: join@ittcamp.com"
                                onClick={() => { props.history.push("/signup") }} >
                                Join camp
                                </StyledATagLink>
                        </StyledTextLocal>
                    </div>
                    <div>
                        <StyledTextLocal>
                            <StyledATagLink
                                href="mailto: contactus@ittcamp.com" >
                                Questions?
                                </StyledATagLink>
                        </StyledTextLocal>
                    </div>
                    <div>
                        <StyledTextLocal>
                            <StyledATagLink
                                href="mailto: mikkel_gudmundsen@hotmail.com">
                                Developer<span role="img" aria-label="mail">📩</span>
                            </StyledATagLink>
                        </StyledTextLocal>
                    </div>
                    <div>
                        <StyledIcon>
                            <StyledATagLink
                                target="blank"
                                onClick={() => alert("Our facebook account is yet under development. Thank you for your interest :)")}>
                                <FontAwesomeIcon icon={["fab", "facebook"]} />
                            </StyledATagLink>
                        </StyledIcon>
                    </div>
                    <div>
                        <StyledATagLink
                            target="blank"
                            href="https://www.instagram.com/ittcamp">
                            <StyledIcon>
                                <FontAwesomeIcon icon={["fab", "instagram"]} />
                            </StyledIcon>
                        </StyledATagLink>
                    </div>
                </Wrapper>
            </FooterStyleDivWrapper>
        </LocalWrapper>
    );
}
export default withRouter(Footer);