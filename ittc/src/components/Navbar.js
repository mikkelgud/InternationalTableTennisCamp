import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { withRouter } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import NavigationLinkMenu from "./NavigationLinkMenu";
import NavigationLinkEmoji from "./NavigationLinkEmoji";

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

const menuFadeInTop = keyframes`
0% { top-250px; opacity: 0.1; }
100% { top-65px; opacity:2; }
`;

const MenuItem = styled.li`
  padding: 0.5rem 0.7rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  background: #ffffff;  
`;


const Menu = styled.ul`
  list-style: none;
  width: 100vw;
  top: 65px;
  left: 0;
  position: absolute;
  z-index: 2;
  margin: 0;
  padding: 0;

  li:not(:last-child) {
      border-bottom: 1px solid #dddddd;
  }
  animation: ${menuFadeInTop} 0.35s cubic-bezier(0.13, 0.54, 0.68, 0.93) 1;
`;


const navigationLinksText = [
  {
    link: "/leaders",
    category: "Coaches and leaders"
  },
  {
    link: "/",
    category: "Plan"
  },
  {
    link: "/",
    category: "Rules"
  },
  {
    link: "/",
    category: "Schedule"
  },
  {
    link: "/",
    category: "Stay"
  },
  {
    link: "/",
    category: "Expences"
  },
  {
    link: "/",
    category: "About us"
  },
  {
    link: "/",
    category: "Sign up!"
  },
]

const navigationLinksEmoji = [
  {link: "/home", category: homeEmoji},
  {link: "/home", category: worldEmoji}
];



const NavBar = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavBarWrapper>
      <AppTitle onClick={() => { props.history.push("/home"); }}>ITTC{pingPongEmoji} </AppTitle>

{navigationLinksText.map(navLink => (<NavigationLink to={navLink.link} category={navLink.category} />))}
{navigationLinksEmoji.map(navLinkEmoji => (<NavigationLinkEmoji to={navLinkEmoji.link} emoji={navLinkEmoji.category} />))}

      <MobileMenuWrapper onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <EmojiTextStyleHover>{isMenuOpen ? "➖" : " 🧐 "}</EmojiTextStyleHover>
        {isMenuOpen && (<Menu>{navigationLinksText.map(navLink => (<MenuItem><NavigationLinkMenu to={navLink.link} category={navLink.category} /></MenuItem>))} </Menu>)}
      </MobileMenuWrapper>
    </NavBarWrapper>
  );
};
export default withRouter(NavBar);
