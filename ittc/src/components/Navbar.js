import React from 'react';
import Styled from 'styled-components';
import { StyledDiv } from '../styleguides/StyledNavDiv';
import { StyledLink } from '../styleguides/StyledLink';
import { withRouter } from 'react-router-dom';


const homeEmoji = "🏠";
const pingPongEmoji = "🏓";
const worldEmoji = "🌐";



const NavBarWrapper = Styled.div`
height: 1px;
position: relative;
display: flex;
align-items: center;
justify-content: space-between;
background-color: ;
padding: 2rem;
border-bottom: 1px solid black;
// &:hover {
//     background-image: linear-gradient(to bottom,#fffffff0 0%, #b3b3b3 100%);
// }
`;

const AppTitle = Styled.h1`
font-family: ;
cursor: pointer;
color: #0;
margin: 0;
`;

const EmojiTextStyleHover = Styled.p`
transition: all 0.1s ease-in-out;
font-size: 1.5rem;
margin: 0;
padding:0;
&:hover {
    font-size: 1.8rem;
}
`;



const NavBar = props => {
return(
<NavBarWrapper>
<AppTitle>ITTC{pingPongEmoji}</AppTitle>
<StyledLink to="/leaders" ><StyledDiv>Coaches and leaders</StyledDiv></StyledLink>
<StyledLink to=""><StyledDiv>Plan</StyledDiv></StyledLink>
<StyledLink to=""><StyledDiv>Rules</StyledDiv></StyledLink>
<StyledLink to=""><StyledDiv>Schedule</StyledDiv></StyledLink>
<StyledLink to=""><StyledDiv>Stay</StyledDiv></StyledLink>
<StyledLink to=""><StyledDiv>Expences</StyledDiv></StyledLink>
<StyledLink to=""><StyledDiv>About us</StyledDiv></StyledLink>
<StyledLink to=""><StyledDiv>Sign up!</StyledDiv></StyledLink>
<StyledLink to="/home"><EmojiTextStyleHover>{homeEmoji}</EmojiTextStyleHover></StyledLink>
<StyledLink to=""><EmojiTextStyleHover>{worldEmoji}</EmojiTextStyleHover></StyledLink>

</NavBarWrapper>
);
}
export default withRouter(NavBar);

