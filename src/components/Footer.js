import React, {useState} from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const FooterStyleDivWrapper = styled.footer`
display: flex;
align-items: center;
justify-content: center;

flex-wrap: wrap;
width: 100vw;
margin: 2rem 0;
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
width: 80%;
margin: 2rem 8px;

@media (max-width: 432px){
    width: 100%;
  }
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

const TopBorderLine = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 80%;
border-bottom: 1px solid #e1e4e8;
border-bottom-size: 10%;
`;

const StyledFooterItemDivContainer = styled.div`
display: flex;
width: auto;
@media (max-width: 432px){
    width: 10%;
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
        <React.Fragment>
            <FooterStyleDivWrapper>
        <TopBorderLine/>
                <Wrapper>
                    <StyledFooterItemDivContainer>
                        <StyledIcon
                                onClick={() => { props.history.push("/aboutus"); }}>
                                <FontAwesomeIcon icon="users-cog"/>
                        </StyledIcon>
                    </StyledFooterItemDivContainer>
                    <StyledFooterItemDivContainer>
                        <StyledIcon
                                onClick={() => { props.history.push("/leaders"); }}>
                                <FontAwesomeIcon icon="users"/>
                        </StyledIcon>
                    </StyledFooterItemDivContainer>
                    <StyledFooterItemDivContainer>
                        <StyledIcon
                            onMouseEnter={()=> signUpItemOnHoverEffectToggle()}
                            onMouseLeave={()=> signUpItemOnHoverEffectToggle()}
                            href="mailto: join@ittcamp.com"
                                onClick={() => { props.history.push("/signup") }} >
                                <FontAwesomeIcon  icon={signUpIconState}/>
                        </StyledIcon>
                    </StyledFooterItemDivContainer>
                    <StyledFooterItemDivContainer>
                        < StyledIcon
                                href="mailto: contactus@ittcamp.com" >
                                <FontAwesomeIcon icon={["far","comments"]}/>
                        </ StyledIcon>
                    </StyledFooterItemDivContainer>
                    <StyledFooterItemDivContainer>
                        <StyledIcon
                                target="blank"
                                href="https://www.facebook.com/ITTCamp-102692547780714/">
                                <FontAwesomeIcon alt="facebook" icon={["fab", "facebook"]} />
                        </StyledIcon>
                    </StyledFooterItemDivContainer>
                    <StyledFooterItemDivContainer> 
                        <StyledIcon
                            target="blank"
                            href="https://www.instagram.com/ittcamp">
                                <FontAwesomeIcon icon={["fab", "instagram"]} />
                        </StyledIcon>
                    </StyledFooterItemDivContainer>
                </Wrapper>
            </FooterStyleDivWrapper>
            </React.Fragment>
    );
}
export default withRouter(Footer);