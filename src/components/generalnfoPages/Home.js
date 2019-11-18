import React, { useState } from 'react';
import PlanLinkDiv from '../LinkDivCard';
import { Wrapper } from '../../styleguides/StyledTextBoxWrapper';
import { ScrollTop } from '../../utils/ScrollToTopp';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

//stay
const stayHeader = "Camps ";
const stayText = "Read everything you need to know about our camps in Norway and Taiwan.";
const stayTo = "/stay";
const stayIcon = "home";
//safety
const safteyHeader = "Safety ";
const safteyIcon = "user-shield";
const safteyText = "Read about how we will keep you safe during the camp and while travelling."
const safteyTo = "/safety";
//leaders
const leadersHeader = "Leaders ";
const leadersIcon = "users";
const leadersText = "Read about the ITTC-team´s coaches and leaders. ";
const leadersTo = "/leaders";
//about us
const aboutUsHeader = "About Us ";
const aboutUsIcon = "users-cog";
const aboutUsText = "Read about ITTC´s goals and motivation for organizing the camps.";
const aboutUsTo = "/aboutus";
//sign up
const signUpHeader = "Sign Up ";
const signUpText = "Read about how to sign up. We are looking forward to having you with us at our camp."
const signUpTo = "/Signup";
//Ung cancer
const sponsorHeader = "Sponsors ";
const sponsorText = "Read about our sponsors and collaborators.";
const sponsorTo = "/sponsors"




export default function Home() {

    const [hoverState, setHoverState] = useState(false);
    const [hoverStateSignUp, setHoverStateSignUp] = useState(false);
    const [sponsorIcon, setSponsorItem] = useState(["far", "handshake"]);
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

    const sponsorItemOnHoverEffectToggle = () => {
        setHoverState(!hoverState);
        // setHoverState(!hoverState);
        hoverState ? setSponsorItem(["far", "handshake"]) : setSponsorItem(faHandshake);
    }

    const signUpItemOnHoverEffectToggle = () => {
        setHoverStateSignUp(!hoverStateSignUp);
        // setHoverState(!hoverState);
        hoverStateSignUp ? setSignUpIconState("door-closed"):setSignUpIconState("door-open");
    }

    const informationLinks = [
        {
            key: 1,
            header: aboutUsHeader,
            text: aboutUsText,
            to: aboutUsTo,
            icon: aboutUsIcon
        },
        {
            key: 2,
            header: stayHeader,
            text: stayText,
            to: stayTo,
            icon: stayIcon
        },
        {
            key: 3,
            header: leadersHeader,
            text: leadersText,
            to: leadersTo,
            icon: leadersIcon
        },
    
        {
            key: 4,
            header: safteyHeader,
            text: safteyText,
            to: safteyTo,
            icon: safteyIcon
        },
        {
            key: 5,
            header: signUpHeader,
            text: signUpText,
            to: signUpTo,
            icon: signUpIconState
        },
        {
            key: 6,
            header: sponsorHeader,
            text: sponsorText,
            to: sponsorTo,
            icon: sponsorIcon
        }
    
    ];
    ScrollTop();
    return (
        <>
            <Wrapper>
                {informationLinks.map(
                    info => <PlanLinkDiv
                onMouseEnter={() => info.key===6 ? sponsorItemOnHoverEffectToggle(): info.key ===5 ? signUpItemOnHoverEffectToggle(): null}
                onMouseLeave={() => info.key===6 ? sponsorItemOnHoverEffectToggle(): info.key ===5 ? signUpItemOnHoverEffectToggle(): null}
                        to={info.to}
                        header={info.header}
                        text={info.text}
                        icon={info.icon} 
                        key={info.key}/>)}
        </Wrapper>
    </>
    )
}