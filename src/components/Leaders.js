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

const persons = [
    
    {
        name: "Li Fen",
        // age: "42 år",
        picture: liFenPictureSource,
        text: info
    },
    {
        name: "Mikkel  Gudmundsen",
        // age: "21 år",
        picture: mikkelPictureSource,
        text: info
    },
    {
        name: "Hilding Persson",
        // age: "21 år",
        picture: hildingPictureSource,
        text: info
    },
   
]

export default function Leaders() {
    return (
        <>
        <LeadersSectionsWrapper>
        <StyledTextSectionHeader>Leaders</StyledTextSectionHeader>
        </LeadersSectionsWrapper>
            <Wrapper>
                {persons.map(person => (<StyledLink><PersonProfilePresentation onMouseEnter={person.blur} age={person.age} personName={person.name} text={person.text} background={person.picture} /></StyledLink>))}
            </Wrapper>
        </>
        )
}