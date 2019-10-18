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
      <StyledTextSectionHeader>Camp Taiwan Expenses</StyledTextSectionHeader>
      <br/>
      <StyledH3>Includes</StyledH3>
      <StyledText>
      <ul>
    <li> 2 or 3 weeks camp with high quality traning in Tao Yuan.</li>
    <li> 2 table tennis practices every day, except arrival and departure day. <StyledATagLink onClick={() => { props.history.push("/stay/Norway/schedule"); }}>(Look at schedule)</StyledATagLink></li>
    <li>Lectures every evening with our coaches, including European champion Li Fen.</li>
    <li>2 or 3 weeks stay at the hotel</li>
    <li>3 meals every day. <br/>(Notice: If you have any alergies please tell us before the camp).</li>
    <li>Information from coaches about what you have to work with in the future after the camp.</li>
    <li>Camp T-shirt.</li>
      </ul>
      </StyledText>
      <StyledH3>Prices for players</StyledH3>
      <StyledText>
          <ul>
          <StyledList>Whole camp of 16 days for players:<br/>--> 11 000 Norwegian krones (or equivalent in euro). </StyledList>
          <StyledList>Whole camp of 16 days traveling companions 9 000 Norwegian </StyledList>
          <StyledList>+ flight (from 6-7000 NOK)</StyledList>
          </ul>
      </StyledText>
      <br/>
      <StyledH3>Payment</StyledH3>
      <StyledText>
          After you sign up for the camp, you will get a confirmation-mail back saying that you are a member of the camp.
          Then you confirm your membership by sending 7500 Norwegian krones for the flight ticket.
          Then we will buy the best combination of cheap and good tickets the marked can offer, and send back the potensial leftovers.
           <br/>
          Payment of the camp it self will be done after you get the flight-confirmation. 
          In this email you will also get all the information you need about how to make the payment
          (We will of course stick to the given price).
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

