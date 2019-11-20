import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { StyledTextSectionHeader } from '../../styleguides/StyledSectionHeader';
import { StyledText } from '../../styleguides/StyledText';
import StyledTextBoxDiv from '../../styleguides/StyledTextBoxDiv';
import { StyledH3 } from '../../styleguides/Styledh3';
import ModelVeiw from '../../utils/ModalWindow';


const StyledImageLocal = styled.img`
display: flex;
width: 60%;
object-fit: contain;
cursor: pointer;
border-radius: 10px;
margin: 2rem 2rem 1rem 1rem;
@media (max-width: 1000px){
    width: 70%;
}
@media (max-width: 600px){
    width: 100%;
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

    const [clickedState, setClickedState] = useState(false);
    const [bigScreenSource, setBigScreenSource] = useState("");
    const [displayState, setDisplayState] = useState("none");

    const toggleBigScreen = (source) => {
        if (!clickedState && bigScreenSource !== source) {
            setClickedState(!clickedState);
            setBigScreenSource(source);
            setDisplayState("block");
        } else {
            setBigScreenSource(source);
        }
    }


   ScrollToTopp();
    return (
        <React.Fragment>
        {clickedState ? <ModelVeiw display={()=> displayState} source={bigScreenSource} onClick={() => {setDisplayState("none"); setClickedState(false); setBigScreenSource("");}}/> : null}

        <StyledTextBoxDiv>
              <StyledTextSectionHeader > Li Fen</StyledTextSectionHeader>   
            <StyledText>
                <br />
                Li Fen was born in the province ShanDong, China.<br/>
                The European Champion is currently living in EsLöv, Sweden.<br/>
                Where she on daily basis, practice with Eslöv Table Tennis club.<br/>
                We in ITTC are very lucky to have her on our team.
                <br /> <br />
            </StyledText>
            <StyledImageLocal src="https://farm1.static.flickr.com/806/26049640567_5df994de64_b.jpg" onClick={() => {toggleBigScreen("https://farm1.static.flickr.com/806/26049640567_5df994de64_b.jpg")}}/>
            
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
                <br/>            </StyledText>
                <br/>            
                <br/>            
                <br/>            
        </StyledTextBoxDiv>
        </React.Fragment>
    )
}