import React from "react";
import styled from "styled-components"; //will need this if using menu, { keyframes }
import { withRouter } from "react-router-dom";
// import NavigationLinkEmoji from "./NavigationLinkEmoji";
import Logo from '../Assets/Bordtennislogo.png';
// import LanguageSelctorMenu, { englishLanguage } from "./Language";
// import useLocalStorage from "../hooks/useLocalStorage";
import { StyledTextSectionHeader } from '../styleguides/StyledSectionHeader';
// import { keyframes } from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
//  import NavigationLink from "./NavigationLink";
//  import NavigationLinkMenu from "./NavigationLinkMenu";

const NavBarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient( #d3e7ffa1,#fdfdff);
  padding: 1.82345324234rem;
  // border-radius: 0 0 0 42px;
  // border-bottom: 0.5px solid #0a1c983b;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  height: 0;
`;

const AppTitle = styled.h1`
font-family: 'Oswald', sans-serif;
  cursor: pointer;
  margin: 0;
`;

const StyledImageLogo = styled.img`
margin: 6px 0 0 -27px;
padding: 0 ;
height: 3.5rem;
width: 3.5rem;
`;

// const MobileMenuWrapper = styled.div`
//    cursor: pointer;
//    @media (min-width: 861px) {
//      display: none;
//    }
//  `;

// const menuFadeInTop = keyframes`
//  0% { top-250px; opacity: 0.1; }
// 100% { top-65px; opacity:2; }
//  `;

// const MenuItem = styled.li`
//    padding: 0.5rem 0.7rem;
//    align-items: center;
//    justify-content: center;
//    width: 100%;
//    display: flex;
//   background: #ffffff;  
//  `;


// const Menu = styled.ul`
//    list-style: none;
//    width: 100vw;
//    top: 65px;
//    left: 0;
//    position: absolute;
//    z-index: 2;
//    margin: 0;
//    padding: 0;
//    border-bottom: 1px solid black;

//    li:not(:last-child) {
//        border-bottom: 1px solid #dddddd;
//    }
//    animation: ${menuFadeInTop} 0.35s cubic-bezier(0.13, 0.54, 0.68, 0.93) 1;
//  `;





// const initialLanguage = { selectedLanguageIcon: "🇬🇧" };

function NavBar(props) {

  // const navigationLinksText = [
  //   {
  //     link: "/aboutus",
  //     category: "Aboutus"
  //   },
  //   {
  //     link: "/rules",
  //     category: "Rules"
  //   },
  //   {
  //     link: "/stay/Norway/schedule",
  //     category: "Schedule"
  //   },
  //   {
  //     link: "/stay",
  //     category: "Stay"
  //   },
  //   {
  //     link: "/stay/Norway/price",
  //     category: "Prices"
  //   },
  //   {
  //     link: "/leaders",
  //     category: "Leaders"
  //   },
  // ];

  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isNormalMenuOpen, setIsNormalMenuOpen] = useState(true);
  // const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);
  // const [storedLanguage] = useLocalStorage("Language", englishLanguage);
  // const [language, setLanguage] = useState(storedLanguage);

  // const toggleLanguageSelector = () => {
  //   setIsNormalMenuOpen(!isNormalMenuOpen)
  //   setIsLanguageSelectorOpen(!isLanguageSelectorOpen);
  // }

  return (
    <NavBarWrapper>
      <AppTitle onClick={() => { props.history.push("/home"); }}> <StyledImageLogo src={Logo} /></AppTitle>
      <StyledTextSectionHeader>{props.header}</StyledTextSectionHeader>
      {/* {isLanguageSelectorOpen ? null
        : <NavigationLinkEmoji
          emoji={language ? language.selectedLanguageIcon : initialLanguage.selectedLanguageIcon}
          clicked={() => toggleLanguageSelector()} />}
      {isLanguageSelectorOpen && <LanguageSelctorMenu onItemSelected={item => {
        toggleLanguageSelector();
        setLanguage(item);
      }} />} */}
      {/* <MobileMenuWrapper onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <FontAwesomeIcon icon={isMenuOpen ? "times" : "bars"} />
        {isMenuOpen && (<Menu>{navigationLinksText.map(navLink => (<MenuItem><NavigationLinkMenu to={navLink.link} category={navLink.category} /></MenuItem>))} </Menu>)}
      </MobileMenuWrapper> */}
    </NavBarWrapper>
  );
}
export default withRouter(NavBar);


//alternativt design

// const EmojiTextStyleHover = styled.p`
// font-family: 'Oswald', sans-serif;
//   transition: all 0.1s ease-in-out;
//   font-size: 1.5rem;
//   margin: 0;
//   padding: 0;
//   &:hover {
//     font-size: 1.8rem;
//   }
// `;

// const MobileMenuWrapper = styled.div`
//   cursor: pointer;
//   @media (min-width: 861px) {
//     display: none;
//   }
// `;

// const menuFadeInTop = keyframes`
// 0% { top-250px; opacity: 0.1; }
// 100% { top-65px; opacity:2; }
// `;

// const MenuItem = styled.li`
//   padding: 0.5rem 0.7rem;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   display: flex;
//   background: #ffffff;  
// `;


// const Menu = styled.ul`
//   list-style: none;
//   width: 100vw;
//   top: 65px;
//   left: 0;
//   position: absolute;
//   z-index: 2;
//   margin: 0;
//   padding: 0;
//   border-bottom: 1px solid black;

//   li:not(:last-child) {
//       border-bottom: 1px solid #dddddd;
//   }
//   animation: ${menuFadeInTop} 0.35s cubic-bezier(0.13, 0.54, 0.68, 0.93) 1;
// `;





// const navigationLinksText = [
//   // {
//   //   link: "/plan",
//   //   category: "Plan"
//   // },
//   // {
//   //   link: "/",
//   //   category: "Rules"
//   // },
//   // {
//   //   link: "/",
//   //   category: "Schedule"
//   // },
//   // {
//   //   link: "/",
//   //   category: "Stay"
//   // },
//   // {
//   //   link: "/",
//   //   category: "Expences"
//   // },
//   // {
//   //   link: "/leaders",
//   //   category: "About us"
//   // },
// ]

// <NavBarWrapper>
// <AppTitle onClick={() => { props.history.push("/"); }}> <StyledImageLogo src={Logo} /></AppTitle>
// <StyledTextSectionHeader></StyledTextSectionHeader>
// {/* {isNormalMenuOpen && <> */}
//   {/* {navigationLinksText.map(navLink => (<NavigationLink to={navLink.link} category={navLink.category} />))} */}
//   {/* {navigationLinksEmoji.map(navLinkEmoji => (<NavigationLinkEmoji to={navLinkEmoji.link} emoji={navLinkEmoji.category} />))} */}

//    {/* </>}  */}

// {isLanguageSelectorOpen && <LanguageSelctorMenu onItemSelected={item => {
//   toggleLanguageSelector();
//   setLanguage(item);
// }} />}
// {/* 
// <MobileMenuWrapper onClick={() => setIsMenuOpen(!isMenuOpen)}>
//   <EmojiTextStyleHover><FontAwesomeIcon icon={isMenuOpen ? "times" : "bars"} /></EmojiTextStyleHover>
//   {isMenuOpen && (<Menu>{navigationLinksText.map(navLink => (<MenuItem><NavigationLinkMenu to={navLink.link} category={navLink.category} /></MenuItem>))} </Menu>)}
// </MobileMenuWrapper> */}
// </NavBarWrapper>
// );
// }
// export default withRouter(NavBar);



// const navigationLinksEmoji = [
//   // { link: "/home", category: homeEmoji },
// ];