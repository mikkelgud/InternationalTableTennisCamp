import React, { useState } from "react";
import styled, {keyframes} from "styled-components";
import { StyledDiv } from "../styleguides/StyledNavDiv";
import { StyledLink } from "../styleguides/StyledLink";
import { withRouter } from "react-router-dom";

const homeEmoji = "🏠";
const pingPongEmoji = "🏓";
const worldEmoji = "🌐";

const NavBarWrapper = styled.div`
  height: 1px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ;
  padding: 2rem;
  border-bottom: 1px solid black;
`;

const AppTitle = styled.h1`
  font-family: ;
  cursor: pointer;
  color: #0;
  margin: 0;
`;

const EmojiTextStyleHover = styled.p`
  transition: all 0.1s ease-in-out;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  &:hover {
    font-size: 1.8rem;
  }
`;

const MobileMenuWrapper = styled.div`
  cursor: pointer;
  @media (min-width: 861px) {
    display: none;
  }
`;

const MenuTitle = styled.p``;

const menuFadeInTop = keyframes`
0% { opacity: 0.2; }
100% { opacity: 1; }
`;


const Menu = styled.ul`
  list-style: none;
  width: 100vw;
  top: 70px;
  left: 0;
  position: absolute;
  z-index: 2;
  margin: 0;
  padding: 0;

  li:not(:last-child) {
      border-bottom: 1px solid #dddddd;
  }
  animation: ${menuFadeInTop} 0.10s cubic-bezier(0.13, 0.54, 0.68, 0.93) 1;
`;

const MenuItem = styled.li`
  padding: 0.5rem 0.7rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  background: #ffffff;  
`;

const NavBar = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavBarWrapper>
      <AppTitle
        onClick={() => {
          props.history.push("/home");
        }}
      >
        ITTC{pingPongEmoji}
      </AppTitle>
      <StyledLink to="/leaders">
        <StyledDiv>Coaches and leaders</StyledDiv>
      </StyledLink>
      <StyledLink to="">
        <StyledDiv>Plan</StyledDiv>
      </StyledLink>
      <StyledLink to="">
        <StyledDiv>Rules</StyledDiv>
      </StyledLink>
      <StyledLink to="">
        <StyledDiv>Schedule</StyledDiv>
      </StyledLink>
      <StyledLink to="">
        <StyledDiv>Stay</StyledDiv>
      </StyledLink>
      <StyledLink to="">
        <StyledDiv>Expences</StyledDiv>
      </StyledLink>
      <StyledLink to="">
        <StyledDiv>About us</StyledDiv>
      </StyledLink>
      <StyledLink to="">
        <StyledDiv>Sign up!</StyledDiv>
      </StyledLink>
      <StyledLink to="/home">
        <EmojiTextStyleHover>{homeEmoji}</EmojiTextStyleHover>
      </StyledLink>
      <StyledLink to="">
        <EmojiTextStyleHover>{worldEmoji}</EmojiTextStyleHover>
      </StyledLink>
      <MobileMenuWrapper onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <MenuTitle>{isMenuOpen ? "Close" : "Menu"}</MenuTitle>

        {isMenuOpen && (
          <Menu>
            <MenuItem>
              <StyledLink to="/leaders">
               Coaches and leaders
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="">
                Plan
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="">
               Rules
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="">
                Schedule
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="">
                Stay
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="">
                Expences
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="">
                About us
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="">
               Sign up!
              </StyledLink>
            </MenuItem>
          </Menu>
        )}
      </MobileMenuWrapper>
    </NavBarWrapper>
  );
};
export default withRouter(NavBar);
