import React from "react";
import styled from "styled-components";
import { StyledText } from "../../../styleguides/StyledText";
import { ScrollTop } from "../../../utils/ScrollToTopp";
import { StyledTextSectionHeader } from "../../../styleguides/StyledSectionHeader";
import StyledTextBoxDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledH3 } from "../../../styleguides/Styledh3";
import { StyledATagLink } from "../../../styleguides/StyledATagLink";

const StyledList = styled.li`
list-style-type: square;
`;

export default function Expences(props) {
  ScrollTop();


  return (
      <StyledTextBoxDiv>
      <StyledTextSectionHeader>Camp Norway Expenses</StyledTextSectionHeader>
      <br/>
      <StyledH3>Includes</StyledH3>
      <StyledText>
      <ul>
    <li> 3 days camp with high quality traning.</li>
    <li> 2 table tennis practices and 1 physical practice every day, except arrival and departure day. <StyledATagLink onClick={() => { props.history.push("/stay/Norway/schedule"); }}>(Look at schedule)</StyledATagLink></li>
    <li>Lectures every evening with our coaches, including European champion Li Fen.</li>
    <li>4 nights with sleeping in the hall with all essentials, with night guards awake at all time. <br/>
          (Notice: Madrass, duvet/sleepingbag, sheets and pillow you have to bring yourself)</li>
    <li>3 meals every day. <br/>
          (Notice: If you have any alergies please tell us before the camp).</li>
      <li>Opportunity to get pickup from arrival location and followed to the camp. <br/>
          (Notice: travel expences will not be covered) </li>
          <li>Information from coaches about what you have to work with in the future.</li>
          <li>Camp T-shirt.</li>
      </ul>
      </StyledText>
      <StyledH3>Prices</StyledH3>
      <StyledText>
          <ul>
          <StyledList>Whole camp of 4 days:<br/>--> 1 300 NOK </StyledList>
          </ul>
      </StyledText>
      <br/>
      <StyledH3>Payment</StyledH3>
      <StyledText>
          After you sign up for the camp, you will get a confirmation-mail back saying that you are a member of the camp.
          Then, if there is over 32 participants, we will select 32 players according to our impression from the sign up forms.
           <br/>
          Payment will be done after you get the confirmation. 
          In this email you will also get all the information you need about how to make the payment.
          The payment should happen before the camp starts or at the first camp day.
         <br/>
         <br/>
         The payment-
          <ul>
          <li>Is done by bank- transaction. (preferred)</li>
          <li>Or show up with an envelope with cash. </li>
          </ul>
        <br/>
          
          

      </StyledText>
      </StyledTextBoxDiv>
  );
}

