import React from 'react';
import styled from 'styled-components';
import travel from '../Assets/Travel.jpg'
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import { StyledSTextSectionHeader } from '../styleguides/StyledSemiTextSectionHeader';
import { StyledLink } from '../styleguides/StyledLink';
import Logo from '../Assets/Bordtennislogo.png';



const StyledDiv = styled.div`
top: 0;
background-image: url(${travel});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
display: flex;
z-index: 3;
border-radius: 0px;
position: fixed;
width: 100%;
height: 100%;
cursor: pointer;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const LocalWrapper = styled.div`
display: flex;
align-items: center;
margin: 0rem;
padding:2rem;
font-family: 'Roboto', sans-serif;
`

const StyledLinkButtonLocal = styled.div`
background-color: #ffffff;
border-radius: 38px;
text-align: center;
padding: 1.3263162rem
margin: 0.6rem;
width: 11.5rem;
font-size: 1.1rem
box-shadow: 0 1px 35px 0 rgba(32,33,36,0.28);
@media(max-width: 800px){
    padding: 1.263162rem
    width: 8rem;
}
&:hover {
    background-color: #4267b2;
    color: white;
    box-shadow: 0 1px 35px 0 rgba(32,33,36,0.28);
}
`;

const StyledImage = styled.img`
object: contain;
width: 7rem;
&:hover {
    box-shadow: 0 1px 35px 0 rgba(32,33,36,0.28);
}
`



export default function WelcomeModule(props) {

    return (
        <StyledDiv onClick={() => props.history.push("/home")} onTouchMove={() => props.history.push("/home")}>
                 
            <StyledTextSectionHeader style={{ color: "white", textAlign: "center" }}>Welcome to the International Table Tennis Camp </StyledTextSectionHeader>
           
            <LocalWrapper>
                <StyledLink to={"/home"}
                    onMouseEnter={props.onMouseEnter}
                    onMouseLeave={props.onMouseLeave}>
                    <StyledLinkButtonLocal>
                        Read More
                    </StyledLinkButtonLocal>
                </StyledLink>
                <StyledLink
                    to={"/signup"}
                    onClick={e => {e.stopPropagation(); props.history.push("/signup")}}
                    onMouseEnter={props.onMouseEnter}
                    onMouseLeave={props.onMouseLeave}>
                    <StyledLinkButtonLocal>
                        Sign Up
                    </StyledLinkButtonLocal>
                </StyledLink>
            </LocalWrapper>
            <StyledSTextSectionHeader style={{ color: "white", textAlign: "center", background: "-webkit-linear-gradient(#ffffff 0%, #ffffff 100%)", webkitBackgroundClip: "text",  webkitTextFillColor: "transparent", margin: "1rem"}}>Your goal is our mission</StyledSTextSectionHeader>
            <StyledImage src={Logo}/>

        </StyledDiv>
    )
}