import React from 'react';
import { Wrapper } from '../styleguides/StyledTextBoxWrapper';
import PersonProfilePresentation from './PersonProfilePresentation';

//Presentation-text
const mikkelText = "Mikkel er 21 år og er til daglig trener i Fornebu BTK og Harestua IL, samtidig jobber han som trener under samlinger for region øst. Han har bodd i kina og studert bordtennis og kinesisk på Kina sitt beste sportsuniversitet; Beijing Sport University. Han snakker derfor mandarin og forstår seg godt på kulturen i kina. Mikkel har tidligere spilt på landslaget i Norge, og har deltat på store mesterskap som foreksempel U-EM.";

//Test-text
const testText = "When I first saw him in June 2018, he’d been living for years under a performance stadium at Samutprakarn Crocodile Farm and Zoo outside Bangkok. His feet were tightly chained, and he had a bent, swollen leg and a wound at his temple National Geographic documented his plight, which caused an outcry from readers, in our June 2019 feature on wildlife tourism. Over 70,000 people signed a Change.org petition calling for help for the elephant. But the prospect of rescue was complicated—under Thai law, he is property, and his owner, Uthen Youngprapakorn, would have to agree to sell or relinquish him. But after a period of negotiation, Lek Chailert, founder of Save Elephant Foundation, a nonprofit rehabilitation and rescue organization located in Chiang Mai, secured his purchase. The handoff occurred Tuesday evening, and after a 14-hour truck ride, Gluay Hom is now getting used to his new surroundings at Elephant Nature Park, the foundation’s elephant habitat, where he’s discovering dirt piles and grass after having spent years standing on a concrete floor. When he saw the mud bath—and normally all elephants love the mud bath—he looked at everyone like he was asking the question: May I go now?” Chailert says. “He was still traumatized. He walks slow. He needs a lot of treatment. Hes still sad in his eyes."

//Picture-sources
const mikkelPictureSource  = "https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.0-1/p320x320/14446041_1407013685980727_6868917381349948762_n.jpg?_nc_cat=106&_nc_oc=AQnjVpe0ZHpvjjhsXtbdLd9sq-6xye-PzpVSVWx8vyCHlPpygS517IHvmAoeuL-kSyI&_nc_ht=scontent.fsvg1-1.fna&oh=6493a2c05319a4a5457eed793e69e92f&oe=5DCF57D4";
const hildingPictureSource = "https://bordtennis.eai.se/wp-content/uploads/2018/06/Hilding.jpg";
const peterPictureSource = "https://skd-1e9a.kxcdn.com/2015/08/15083000/SF201410140419711AR.jpg";
const liFenPictureSource = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdb3D6E9xEnq257tirCXB6famJXHSQmR1iWKOJ8HAuU2uR6GkKmQ"


const persons = [
    {
        name: "Mikkel Gudmundsen",
        age: "21 år",
        picture: mikkelPictureSource,
        text: mikkelText
    },
    {
        name: "Li Fen",
        age: "42 år",
        picture: liFenPictureSource,
        text: testText
    },
    {
        name: "Hilding Persson",
        age: "21 år",
        picture: hildingPictureSource,
        text: testText

    },
    {
        name: "Peter Sartz",
        age: "21",
        picture: peterPictureSource,
        text: testText
    }
]

export default function Leaders() {
    return (

            <Wrapper>
                {persons.map( person => (<PersonProfilePresentation age={person.age} personName={person.name} source={person.picture} text={person.text}/>))}
            </Wrapper>

    )
}