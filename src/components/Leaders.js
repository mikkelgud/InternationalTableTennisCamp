import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../styleguides/StyledTextBoxWrapper';
import PersonProfilePresentation from './PersonProfilePresentation';
import { StyledLink } from '../styleguides/StyledLink';
import { StyledTextSectionHeader } from '../styleguides/StyledtextSectionHeader';

const LeadersSectionsWrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

//Presentation-text
//Test-text
const info = "Click to read";


//Picture-sources
const mikkelPictureSource  = "https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.0-1/p320x320/14446041_1407013685980727_6868917381349948762_n.jpg?_nc_cat=106&_nc_oc=AQnjVpe0ZHpvjjhsXtbdLd9sq-6xye-PzpVSVWx8vyCHlPpygS517IHvmAoeuL-kSyI&_nc_ht=scontent.fsvg1-1.fna&oh=6493a2c05319a4a5457eed793e69e92f&oe=5DCF57D4";
const hildingPictureSource = "https://bordtennis.eai.se/wp-content/uploads/2018/06/Hilding.jpg";
const liFenPictureSource = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdb3D6E9xEnq257tirCXB6famJXHSQmR1iWKOJ8HAuU2uR6GkKmQ"
const oscarPictureSource = "https://www.ttcw.ch/clubdesk/fileservlet?inline=true&type=image&id=1000148";
const MathiasPictureSource = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYErkTSBP1AAzm-XuKXcdigPUlLlzdEgzoWwnUt2SyC4S8yeBY";
const MariaPictureSource = "data:image/jpeg;base64,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";

const persons = [
    
    {
        name: "Li Fen",
        // age: "42 år",
        picture: liFenPictureSource,
        text: info,
        to: "leaders/Li-Fen"
    },
    {
        name: "Maria Xiao",
        // age: "21 år",
        picture: MariaPictureSource,
        text: info,
        to: "leaders/Maria-Xiao"
    },
    {
        name: "Mathias Översjö",
        // age: "21 år",
        picture: MathiasPictureSource,
        text: info,
        to: "leaders/Mathias-Översjö"
    },
    {
        name: "Oscar Perman",
        // age: "21 år",
        picture: oscarPictureSource,
        text: info,
        to: "leaders/Oscar-Perman"
    },
    {
        name: "Hilding Persson",
        // age: "21 år",
        picture: hildingPictureSource,
        text: info,
        to: "leaders/Hilding-Persson"
    },
    {
        name: "Mikkel  Gudmundsen",
        // age: "21 år",
        picture: mikkelPictureSource,
        text: info,
        to: "leaders/Mikkel-Gudmundsen"
    }

   
]

export default function Leaders() {
    return (
        <>
        <LeadersSectionsWrapper>
        <StyledTextSectionHeader>Leaders</StyledTextSectionHeader>
        </LeadersSectionsWrapper>
            <Wrapper>
                {persons.map(person => (<StyledLink to={person.to}><PersonProfilePresentation onMouseEnter={person.blur} age={person.age} personName={person.name} text={person.text} background={person.picture} /></StyledLink>))}
            </Wrapper>
        </>
        )
}