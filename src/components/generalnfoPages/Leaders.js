import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styleguides/StyledTextBoxWrapper';
import PersonProfilePresentation from '../PersonProfilePresentation';
import { StyledLink } from '../../styleguides/StyledLink';
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import Mikkel from '../../Assets/MikkelCut.jpg';
import Maria from '../../Assets/MariaXiao.jpg';
import LiFen from '../../Assets/LiFen.jpg';
import HildingROR from '../../Assets/HildingPlaying.jpg';
import {StyledATagLink} from '../../styleguides/StyledATagLink';
import { ScrollTop } from '../../utils/ScrollToTopp';



const LeadersSectionsWrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
`

//Presentation-text
//Test-text
const info = "Click to read";


//Picture-sources
const Harestua = "https://scontent.fosl3-2.fna.fbcdn.net/v/t1.0-9/14332997_328338614181135_165321474244639133_n.jpg?_nc_cat=103&_nc_oc=AQnFyx5OWGfG9waVwGOB6-61_KcFFGD-zwPgMzgh8lDndWU78Zi3cP2Fj25DBi75HuM&_nc_ht=scontent.fosl3-2.fna&oh=e4a5af849f32723f59b905da1cf927e3&oe=5E132AE3";
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
        willJoin: "ITTC: Norway, Poland, China"
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
        willJoin: "ITTC: Poland, China"
    },
    {
        name: "Surprise Coach",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVj8zPyEposVdg6l-GD31wzdsmWyxngHz8ubKkujCLviSKAv3W",
        text: "More information coming soon",
        willJoin: ""
    },
    {
        name: "Mikkel  Gudmundsen",
        // age: "21 år",
        picture: Mikkel,
        text: info,
        to: "leaders/Mikkel-Gudmundsen",
        willJoin: "ITTC: Norway, Poland, China"
    },  
    {
        name: "Hilding Persson",
        // age: "21 år",
        picture: HildingROR,
        text: info,
        to: "leaders/Hilding-Persson",
        willJoin: "ITTC: Norway, Poland, China"
    },
   
]

const harestua = [
    { 
    
    picture: Harestua,
    src:"https://www.harestua.info/harestua-il/bordtennis.html",
}
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
           <StyledATagLink target="blank" href={harestua[0].src}><PersonProfilePresentation personName={harestua[0].name} background={harestua[0].picture} text={harestua[0].text} willJoin={harestua[0].willJoin} /></StyledATagLink></Wrapper>
        </>
        )
}