import React ,{ useState } from 'react';
import Card from '../styleguides/StyledTextBoxDiv';
import {Wrapper} from '../styleguides/StyledTextBoxWrapper';
import styled from 'styled-components';
import {StyledText} from '../styleguides/StyledText';


 const StyledActionButton = styled.button`
 `

const StyledInput = styled.input`
border: none
padding: 0.1rem 1rem 
margin: 1rem 0rem
font: small-caption	
font-size: 1rem
width: calc(100% - 50px)
color: blue;
outline: none
line-height: 1.5
border-radius: 15px` ;


export default function Login({history}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const checkIfCorrect = (props)=>{
        if (password === "Hilding" && username === "Fen"){
            history.push('/home');
            return null;
        }
    }
    

    return(
<Wrapper>
    <Card>
        <StyledText>Username</StyledText>
        <StyledInput type='username' onChange={e => setUsername(e.target.value)}></StyledInput>
        <StyledText>Password</StyledText>
        <StyledInput type='password' onChange={e => setPassword(e.target.value)}></StyledInput>     
<StyledText> Welcome to ITTC! You must login before using the app<span role="img" aria-label="key">🔑</span></StyledText>
        <StyledActionButton onClick={()=> checkIfCorrect(username, password)}><StyledText>Login</StyledText></StyledActionButton>
    </Card>
    </Wrapper>
    )
}
