import React, {useState} from 'react';
import styled from 'styled-components';
import travel from '../Assets/Travel.jpg'
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
import { StyledSTextSectionHeader } from '../styleguides/StyledSemiTextSectionHeader';
import { StyledLink } from '../styleguides/StyledLink';




const StyledDiv = styled.div`
background-image: url(${travel});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
display: ${props => props.display};
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
margin: 3.6rem;
padding:2rem;
font-family: 'Roboto', sans-serif;
`

const StyledLinkButtonLocal = styled.div`
background-color: #ffffff;
border-radius: 30px;
text-align: center;
padding: 1.2rem
margin: 0.6rem;
box-shadow: 0 1px 35px 0 rgba(32,33,36,0.28);
@media(max-width: 800px){
    padding: 0.6rem
}
&:hover {
    background-color: #4267b2;
    color: white;
    box-shadow: 0 1px 35px 0 rgba(32,33,36,0.28);
}

`;



export default function WelcomeModule(props) {
    const [display, setDisplayState] = useState("flex")
    return (
        <StyledDiv onClick={() => setDisplayState("none")} display={display}>
            <StyledTextSectionHeader style={{ color: "white", textAlign: "center" }}>Welcome to International Table Tennis Camp</StyledTextSectionHeader>
            <StyledSTextSectionHeader style={{ color: "white", textAlign: "center", background: "-webkit-linear-gradient(#ffffff 0%, #ffffff 100%)", webkitBackgroundClip: "text",  webkitTextFillColor: "transparent", margin: "1rem"}}>Your goal is our mission</StyledSTextSectionHeader>
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
                    onMouseEnter={props.onMouseEnter}
                    onMouseLeave={props.onMouseLeave}>
                    <StyledLinkButtonLocal>
                        Sign Up
                    </StyledLinkButtonLocal>
                </StyledLink>
            </LocalWrapper>
        </StyledDiv>
    )
}