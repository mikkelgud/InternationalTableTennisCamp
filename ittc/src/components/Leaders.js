import React from 'react';
import Styled from 'styled-components';
import StyledTextBoxDiv from '../styleguides/StyledTextBoxDiv';
import Aux from '../utils/Auxillian';
import { Wrapper } from '../styleguides/StyledTextBoxWrapper';
import {StyledImage} from '../styleguides/StyledImage';
import {StyledText} from '../styleguides/StyledText';



const testText = "When I first saw him in June 2018, he’d been living for years under a performance stadium at Samutprakarn Crocodile Farm and Zoo outside Bangkok. His feet were tightly chained, and he had a bent, swollen leg and a wound at his temple National Geographic documented his plight, which caused an outcry from readers, in our June 2019 feature on wildlife tourism. Over 70,000 people signed a Change.org petition calling for help for the elephant. But the prospect of rescue was complicated—under Thai law, he is property, and his owner, Uthen Youngprapakorn, would have to agree to sell or relinquish him. But after a period of negotiation, Lek Chailert, founder of Save Elephant Foundation, a nonprofit rehabilitation and rescue organization located in Chiang Mai, secured his purchase. The handoff occurred Tuesday evening, and after a 14-hour truck ride, Gluay Hom is now getting used to his new surroundings at Elephant Nature Park, the foundation’s elephant habitat, where he’s discovering dirt piles and grass after having spent years standing on a concrete floor. When he saw the mud bath—and normally all elephants love the mud bath—he looked at everyone like he was asking the question: May I go now?” Chailert says. “He was still traumatized. He walks slow. He needs a lot of treatment. Hes still sad in his eyes."

export default function Leaders(){
    return(
    <Aux>
     <Wrapper>
    <StyledTextBoxDiv>
        <StyledImage src="https://bordtennis.eai.se/wp-content/uploads/2018/06/Hilding.jpg"/>
        <StyledText>
Hilding Persson
        </StyledText>
        <StyledText>
Hilding er en fin fyr som kommer til å smile når han leser dette.
{testText}

        </StyledText>
    </StyledTextBoxDiv>
    <StyledTextBoxDiv>
        <StyledImage src="https://skd-1e9a.kxcdn.com/2015/08/15083000/SF201410140419711AR.jpg"/>
        <StyledText>
        Peter Sartz
        </StyledText>
        <StyledText>
        Peter har i mange år............
        {testText}
        aijwefiaioejfoiaøwef ioajweoiføawioøe fioøajweøf jaøow ejfiø aweji
        </StyledText>
    </StyledTextBoxDiv>
    <StyledTextBoxDiv>
        <StyledImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdb3D6E9xEnq257tirCXB6famJXHSQmR1iWKOJ8HAuU2uR6GkKmQ"/>
        <StyledText>
        Li Fen
        </StyledText>
        <StyledText>
        Li Fen har i mange år..............
        {testText}
        </StyledText>
    </StyledTextBoxDiv>
    <StyledTextBoxDiv>
        <StyledImage src="http://images4.fanpop.com/image/photos/22200000/The-letter-D-the-letter-d-22215873-2560-2560.jpg"/>
        <StyledText>
        Hello ADEAHIE AOIEDO AEOHDAOIEDAOØIEDH OAØEW DOØIEH
        </StyledText>
    </StyledTextBoxDiv>
    </Wrapper>
   
    </Aux>
    )
}