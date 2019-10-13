import React, {useState} from 'react';
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
grid-gap: 5rem;
align-items: center;
justify-content: center;
grid-template-columns: auto auto auto auto auto auto;
position: absoulte;
margin: 1.3rem;

@media (max-width: 827px){
    grid-template-columns: auto auto;
grid-gap: 7rem;
    
}

`;

const StyledIcon = styled.h1`
margin: 0;
font-size: 1.8rem;
position: absoulte;

&:hover{
    font-size: 2.6rem;
    margin: -0.5rem;
}
`;




function Footer(props) {
    const [hoverState, setHoverState] = useState(false);
    const [signUpIconState, setSignUpIconState] = useState("door-closed");



    const signUpItemOnHoverEffectToggle = () => {
        setHoverState(!hoverState);
        // setHoverState(!hoverState);
        hoverState ? setSignUpIconState("door-closed"):setSignUpIconState("door-open");
    }

    return (
        <LocalWrapper>
            <FooterStyleDivWrapper>
                <Wrapper>
                    <div>
                        <StyledIcon>
                            <StyledATagLink
                                onClick={() => { props.history.push("/aboutus"); }}>
                                <FontAwesomeIcon icon="users-cog"/>
                            </StyledATagLink>
                        </StyledIcon>
                    </div>
                    <div>
                        <StyledIcon>
                            <StyledATagLink
                                onClick={() => { props.history.push("/leaders"); }}>
                                <FontAwesomeIcon icon="users"/>
                                 </StyledATagLink>
                        </StyledIcon>
                    </div>
                    <div>
                        <StyledIcon>
                            <StyledATagLink
                            onMouseEnter={()=> signUpItemOnHoverEffectToggle()}
                            onMouseLeave={()=> signUpItemOnHoverEffectToggle()}
                            href="mailto: join@ittcamp.com"
                                onClick={() => { props.history.push("/signup") }} >
                                <FontAwesomeIcon  icon={signUpIconState}/>
                                </StyledATagLink>
                        </StyledIcon>
                    </div>
                    <div>
                        < StyledIcon>
                            <StyledATagLink
                                href="mailto: contactus@ittcamp.com" >
                                <FontAwesomeIcon icon={["far","comments"]}/>
                                </StyledATagLink>
                        </ StyledIcon>
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