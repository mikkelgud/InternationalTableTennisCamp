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
display: grid;
text-align: center;
grid-template-columns: auto auto auto auto;
grid-gap: 4rem;
justify-content: normal;
align-items: center;
width: 80%;
margin: 2rem 0 2rem 6rem;

  @media(max-width: 1000px){
    grid-template-columns: auto auto auto;
}
@media(max-width: 753px){
    margin: 2rem;
}
@media(max-width: 500px){
    grid-template-columns: auto auto;
}
@media(max-width: 307px){
    grid-template-columns: auto;
}
}
`;

const StyledIcon = styled.a`
text-decoration: none;
  color:  black;
  cursor: pointer;
  font-size: 1.3rem;
  position: absolute;
  transition: all 0.15s ease-in-out;
  &:hover{
    color: #283ca6;
    font-size: 1.4rem;;
  }
`;
const StyledIconBrands = styled.a`
text-decoration: none;
  color:  black;
  cursor: pointer;
  font-size: 2rem;
  font-family: 'Roboto',sans-serif;
  position: absolute;
  transition: all 0.15s ease-in-out;
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
`;




function Footer(props) {
    const [hoverState, setHoverState] = useState(false);
    const [signUpIconState, setSignUpIconState] = useState("door-closed");
    const mediaQueryMaxWidth = window.matchMedia("(max-width: 1050px)");

   const mediaDoor =(mediaQueryMaxWidthProp)=>{
       if(mediaQueryMaxWidthProp.matches && signUpIconState !== "door-open"){
           setSignUpIconState("door-open");
       } else if(!mediaQueryMaxWidthProp.matches && signUpIconState === "door-open"){
        setSignUpIconState("door-closed");
       }
   }
   if(mediaQueryMaxWidth.matches && signUpIconState !== "door-open"){
    mediaDoor(mediaQueryMaxWidth);
  }
  mediaQueryMaxWidth.addListener(mediaDoor);
 
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
                                About Us
                        </StyledIcon>
                    </StyledFooterItemDivContainer>
                    <StyledFooterItemDivContainer>
                        <StyledIcon
                                onClick={() => { props.history.push("/leaders"); }}>
                                <FontAwesomeIcon icon="users"/>
                                Our Team
                        </StyledIcon>
                    </StyledFooterItemDivContainer>
                    <StyledFooterItemDivContainer>
                        <StyledIcon
                            onMouseEnter={()=> signUpItemOnHoverEffectToggle()}
                            onMouseLeave={()=> signUpItemOnHoverEffectToggle()}
                                onClick={() => { props.history.push("/signup") }} >
                                <FontAwesomeIcon  icon={signUpIconState}/>
                                Sign Up
                        </StyledIcon>
                    </StyledFooterItemDivContainer>
                    <StyledFooterItemDivContainer>
                        < StyledIcon
                                href="mailto: contactus@ittcamp.com" >
                                <FontAwesomeIcon icon={["far","comments"]}/>
                                Contact Us
                        </ StyledIcon>
                    </StyledFooterItemDivContainer>
                    <StyledFooterItemDivContainer>
                        <StyledIcon
                                onClick={() => { props.history.push("/faq"); }}>
                                <FontAwesomeIcon icon="question-circle"/>
                                FAQ
                        </StyledIcon>
                    </StyledFooterItemDivContainer>
                    <StyledFooterItemDivContainer>
                        <StyledIconBrands
                                target="blank"
                                href="https://www.facebook.com/ITTCamp-102692547780714/">
                                <FontAwesomeIcon alt="facebook" icon={["fab", "facebook"]} />
                        </StyledIconBrands>
                    </StyledFooterItemDivContainer>
                    <StyledFooterItemDivContainer> 
                        <StyledIconBrands
                            target="blank"
                            href="https://www.instagram.com/ittcamp">
                                <FontAwesomeIcon icon={["fab", "instagram"]} />
                        </StyledIconBrands>
                    </StyledFooterItemDivContainer>
                    
                </Wrapper>
            </FooterStyleDivWrapper>
            </React.Fragment>
    );
}
export default withRouter(Footer);