import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styleguides/StyledTextBoxWrapper';
import PersonProfilePresentation from '../PersonProfilePresentation';
import { StyledLink } from '../../styleguides/StyledLink';
import Mikkel from '../../Assets/MikkelCut.jpg';
import Maria from '../../Assets/MariaXiao.jpeg';
import LiFen from '../../Assets/LiFen.jpg';
import HildingROR from '../../Assets/HildingPlaying.jpg';
import { ScrollTop } from '../../utils/ScrollToTopp';
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';



const LeadersSectionsWrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
`

//Presentation-text
//Test-text
const info = "Click to read more";


//Picture-sources
// const hildingPictureSource = "https://bordtennis.eai.se/wp-content/uploads/2018/06/Hilding.jpg";
const oscarPictureSource = "https://www.ttcw.ch/clubdesk/fileservlet?inline=true&type=image&id=1000148";
const Eskil = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-xGz9gk37dRk-IgJV9n8qQs_4Rssuh4Zz74OnJ1VQEn1d0511w";

const persons = [
    
    {
        name: "Li Fen",
        // age: "42 år",
        picture: LiFen,
        text: info,
        to: "leaders/Li-Fen",
        willJoin: "ITTC: Norway,Taiwan, Poland, China"
    },
    {
        name: "Maria Xiao",
        // age: "21 år",
        picture: Maria,
        text: info,
        to: "leaders/Maria-Xiao",
        willJoin: "ITTC: Poland"
    },
    {
        name: "Eskil Lindholm",
        picture: Eskil,
        text: info,
        to: "leaders/Eskil-Lindholm",
        willJoin: "ITTC: Norway"
    },
    {
        name: "Oscar Perman",
        // age: "21 år",
        picture: oscarPictureSource,
        text: info,
        to: "leaders/Oscar-Perman",
        willJoin: "ITTC: Norway, Poland, China"
    },
    {
        name: "Mikkel  Gudmundsen",
        // age: "21 år",
        picture: Mikkel,
        text: info,
        to: "leaders/Mikkel-Gudmundsen",
        willJoin: "ITTC: Norway, Taiwan, Poland, China"
    },  
    {
        name: "Hilding Persson",
        // age: "21 år",
        picture: HildingROR,
        text: info,
        to: "leaders/Hilding-Persson",
        willJoin: "ITTC: Norway, Taiwan, Poland, China"
    },
    {
        name: "Surprise Coach",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVj8zPyEposVdg6l-GD31wzdsmWyxngHz8ubKkujCLviSKAv3W",
        text: "More information coming soon",
        willJoin: ""
    },
    {
        name: "Surprise Coach 2",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVj8zPyEposVdg6l-GD31wzdsmWyxngHz8ubKkujCLviSKAv3W",
        text: "More information coming soon",
        willJoin: ""
    },
   
   
]


export default function Leaders() {
    ScrollTop();
    return (
        <>
        <LeadersSectionsWrapper>
        <StyledTextSectionHeader>Leaders and Coaches for ITTC</StyledTextSectionHeader>
        </LeadersSectionsWrapper>
            <Wrapper>
                {persons.map(person => (<StyledLink src={person.src} to={person.to}><PersonProfilePresentation age={person.age} personName={person.name} text={person.text} background={person.picture} willJoin={person.willJoin}/></StyledLink>))}
           </Wrapper>
        </>
        )
}