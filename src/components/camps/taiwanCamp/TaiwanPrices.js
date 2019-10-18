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
    <li> 16 days camp with high quality traning in Tao Yuan.</li>
    <li> 2 table tennis practices every day, except arrival and departure day. <StyledATagLink onClick={() => { props.history.push("/stay/Norway/schedule"); }}>(Look at schedule)</StyledATagLink></li>
    <li>Lectures with our coaches, including European champion Li Fen.</li>
    <li>15 days stay at a high standard hotel.</li>
    <li>3 meals every day. (Read more about our meals in Taiwan <StyledATagLink onClick={() => { props.history.push("/stay/Norway/schedule"); }}>at the schedule page</StyledATagLink>) <br/>(Notice: If you have any alergies please tell us before the camp). </li>
    <li>Information from coaches about what you have to work with when you get home.</li>
    <li>Travel from the airport to the hotel.</li>
    <li>Camp T-shirt.</li>
      </ul>
      <br/>
      </StyledText>
      <StyledH3>Camp Prices</StyledH3>
         <br/>
      <StyledText>
          <ul>
          <StyledList>Whole camp of 16 days for players:<br/>--> 11 500 NOK. </StyledList>
         <br/>
          <StyledList>Whole camp of 16 days for traveling companions (Non practicing participants) <br/> --> 9 750 NOK </StyledList>
          <br/>
          <StyledList>+ flight <br/> --> 6-7000 NOK</StyledList>
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
          The payment should happen two weeks before the camp starts.
          <br/>
         <br/>
         The payment-
          <ul>
          <li>Is done by bank- transaction.</li>
          </ul>
        <br/>
      </StyledText>
      </StyledTextBoxDiv>
  );
}

