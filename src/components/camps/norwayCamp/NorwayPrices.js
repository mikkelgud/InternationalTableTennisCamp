import React from "react";
import styled from "styled-components";
import { StyledText } from "../../../styleguides/StyledText";
import { ScrollTop } from "../../../utils/ScrollToTopp";
import { StyledTextSectionHeader } from "../../../styleguides/StyledSectionHeader";
import StyledTextBoxDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledH3 } from "../../../styleguides/Styledh3";
import { StyledATagLink } from "../../../styleguides/StyledATagLink";
import { StyledSTextSectionHeader } from "../../../styleguides/StyledSemiTextSectionHeader";

const StyledList = styled.li`
list-style-type: square;
`;

export default function Expenses(props) {
  ScrollTop();


  return (
      <StyledTextBoxDiv>
      <StyledTextSectionHeader style={{textAlign: "center"}}>Camp Norway Expenses</StyledTextSectionHeader>
      <br/>
      <StyledH3>Includes</StyledH3>
      <StyledText>
      <ul>
    <li> 4 days camp with high quality traning.</li>
    <li> High quality trainings every day of the camp. <StyledATagLink onClick={() => { props.history.push("/stay/Norway/schedule"); }}>(Look at schedule)</StyledATagLink></li>
    <li>Lectures and team-building every evening with the coaches, including European champion Li Fen.</li>
    <li>4 nights stay in the hall with night guards awake throughout the whole night. <br/>
          (Notice: Mattress, duvet/sleepingbag, sheets and pillow are the participants own responsibility to bring)</li>
    <li>3 meals every day. <br/>
          (Notice: If you have any allergies please tell us before the camp).</li>
          <li>Information from coaches about what you have to work with in the future.</li>
          <li>Camp T-shirt.</li>
      </ul>
      </StyledText>
      <br/>
      <StyledSTextSectionHeader>Price</StyledSTextSectionHeader>
      <StyledText>
          <ul>
          <StyledList>The whole camp:<br/><br/>--> 2 400 NOK  (=240euro)</StyledList>
          </ul>
      </StyledText>
      <br/>
      <StyledSTextSectionHeader>Payment</StyledSTextSectionHeader>
      <StyledText>
          After you sign up for the camp, you will get a confirmation-mail back saying that you are a member of the camp.
          If there's over 32 participants, we will select 32 players according to our impression from the sign up forms.
          <br/>
          <br/>
          Payment will be done after you get the confirmation. 
          In this email you will also get all the information you need about how to make the payment.
          The payment should happen before the camp starts or at the first camp day.
         <br/>
         <br/>
        <StyledSTextSectionHeader>The payment -</StyledSTextSectionHeader> 
          <ul>
          <li>Is done by bank- transaction. (preferred)</li>
          <li>Or, by paying in cash at entry on the first day of the camp. </li>
          </ul>
        <br/>
      </StyledText>
      </StyledTextBoxDiv>
  );
}

