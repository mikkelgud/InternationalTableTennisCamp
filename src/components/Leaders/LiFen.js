import React, {useEffect} from 'react';
import styled from 'styled-components';
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import { StyledText } from '../../styleguides/StyledText';
import StyledTextBoxDiv from '../../styleguides/StyledTextBoxDiv';
import { StyledH3 } from '../../styleguides/Styledh3';

const HWrapper = styled.div`
display: flex;
align-itmes: flex-start;
justify-content: flex-start;
margin-left: 2rem;
`;

const StyledImageLocal = styled.img`
display: flex;
width: 50%;
object-fit: contain;
border-radius: 10px;
@media (max-width: 1000px){
    width: 70%;
}
@media (max-width: 600px){
    width: 90%;
}
@media (max-width: 348px){
    width: 105%;
}
//  
`;

const ScrollToTopp = () => {useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
  }


export default function LiFen() {

   ScrollToTopp();
    return (
        <StyledTextBoxDiv>
            <StyledTextSectionHeader>
            <HWrapper>    Li Fen 42   </HWrapper>
                    <StyledImageLocal src="https://farm1.static.flickr.com/806/26049640567_5df994de64_b.jpg" />
            </StyledTextSectionHeader>
            <StyledText>
                <br />
                Li Fen was born in ShanDong, China.
                The European Champion is currently living in EsLöv, Sweden.
                Where she on daily basis, practice with Eslöv Table Tennis club.
                We in ITTC are very lucky to have her in our team, and with through out all three camps this year.
                <br /> <br />
            </StyledText>
            <StyledH3>Accomplishments </StyledH3>
            <StyledText>
                <ul>
                    <li>In 2013 she became Europen champion in women singles.</li>
                    <li>From 1994-2000 she played for the Chinese national team.</li>
                    <li>In 2014 she won the World Tour, Spanish Open, Almeria (ESP) singles. </li>
                    <li>In 2014 she won bronze medal in the World Tour, Japan Open, Yokohama.</li>
                    <li>In 2016 She played the olympic games in Rio.</li>
                    <li>October 2014, She was world ranked number 12.</li>
                    <li>From 2017-2018 she coached the Swedish national Junior Girls team.</li>
                </ul>
            </StyledText> <br/>
            <StyledText>
                Li Fen speaks fluent English, Swedish and Chinese.
                With all her experience and knowledge, she will be the main headcoach of our camps.
                We know everyone will learn a lot from her during the camps.
                She's also a warm and kind person who will be taking good care of everyone.
                <br/>
                <br />
            </StyledText>
            <StyledH3>Responsibilites during the camps</StyledH3>
            <StyledText>
                <ul>
                <li>Head coach of the camp, and is responsible to facilitate everyones improvment.</li>
                </ul>
                <br/>
            </StyledText>
            <StyledText>
                Li Fen will be everyones mother during travels,
                so don't be affraid to ask her any questions you may have.
                Everyone can learn a lot from her, so use that oppurtunity when you got it.
            </StyledText>
        </StyledTextBoxDiv>
        
    )
}