import React, {useState} from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const LocalWrapper = styled.div`
display: flex;
align-items: space-between;
justify-content: center;
`;

const FooterStyleDivWrapper = styled.footer`
align-items: center;
justify-content: space-between;
position: relative;
padding: 1rem;
width: 80%;
border-top: 1px solid #e1e4e8;
margin: 3rem 0;
`;

const Wrapper = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
width: 80%;
margin: 1rem;
`;

const StyledIcon = styled.a`
text-decoration: none;
  color:  black;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  &:hover{
    color: #283ca6;
    font-size: 2.2rem;;
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
                        <StyledIcon
                                onClick={() => { props.history.push("/aboutus"); }}>
                                <FontAwesomeIcon icon="users-cog"/>
                        </StyledIcon>
                    </div>
                    <div>
                        <StyledIcon
                                onClick={() => { props.history.push("/leaders"); }}>
                                <FontAwesomeIcon icon="users"/>
                        </StyledIcon>
                    </div>
                    <div>
                        <StyledIcon
                            onMouseEnter={()=> signUpItemOnHoverEffectToggle()}
                            onMouseLeave={()=> signUpItemOnHoverEffectToggle()}
                            href="mailto: join@ittcamp.com"
                                onClick={() => { props.history.push("/signup") }} >
                                <FontAwesomeIcon  icon={signUpIconState}/>
                        </StyledIcon>
                    </div>
                    <div>
                        < StyledIcon
                                href="mailto: contactus@ittcamp.com" >
                                <FontAwesomeIcon icon={["far","comments"]}/>
                        </ StyledIcon>
                    </div>
                    <div>
                        <StyledIcon
                                target="blank"
                                onClick={() => alert("Our facebook account is yet under development. Thank you for your interest :)")}>
                                <FontAwesomeIcon alt="facebook" icon={["fab", "facebook"]} />
                        </StyledIcon>
                    </div>
                    <div> 
                        <StyledIcon
                            target="blank"
                            href="https://www.instagram.com/ittcamp">
                                <FontAwesomeIcon icon={["fab", "instagram"]} />
                        </StyledIcon>
                    </div>
                </Wrapper>
            </FooterStyleDivWrapper>
        </LocalWrapper>
    );
}
export default withRouter(Footer);