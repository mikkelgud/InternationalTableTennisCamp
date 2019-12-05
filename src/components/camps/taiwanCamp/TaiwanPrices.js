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
      <StyledTextSectionHeader style={{textAlign: "center"}}>Camp Taiwan Expenses</StyledTextSectionHeader>
      <br/>
      <StyledH3>Includes</StyledH3>
      <StyledText>
      <ul>
    <li> 16 days camp with high quality traning in Tao Yuan.</li>
    <li> 2 table tennis practices every day, except arrival and departure day. <StyledATagLink onClick={() => { props.history.push("/stay/Taiwan/schedule"); }}>(Look at schedule)</StyledATagLink></li>
    <li>Lectures with our coaches, including European champion Li Fen. <StyledATagLink onClick={() => { props.history.push("/leaders"); }}>(Look at our camp leaders and coaches)</StyledATagLink> </li>
    <li>15 days stay at a high standard hotel.  <StyledATagLink onClick={() => { props.history.push("/stay/Taiwan/facilities"); }}>(Look at facilities)</StyledATagLink> </li>
    <li>3 meals every day. (Read more about our meals in Taiwan <StyledATagLink onClick={() => { props.history.push("/stay/Taiwan/schedule"); }}>in the schedule page</StyledATagLink>) <br/>(Notice: If you have any alergies please tell us before the camp). </li>
    <li>Information from coaches about what you have to work with when you get home.</li>
    <li>Travel from the airport to the hotel.</li>
    <li>Free Massage.</li>
    <li>Camp T-shirt.</li>
      </ul>
      <br/>
      </StyledText>
      <StyledH3>Camp Prices</StyledH3>
         <br/>
      <StyledText>
          <ul>
          <StyledList>Whole camp of 16 days for players:<br/>--> 12 750 NOK. (≈1 275 Euro) </StyledList>
         <br/>
          <StyledList>Whole camp of 16 days for traveling companions (Non practicing participants) <br/> --> 10 750 NOK (≈1 075 Euro) </StyledList>
          <br/>
          <StyledList>+ flight <br/> --> 7000 NOK (≈700 Euro)</StyledList>
          <br/>
          <StyledList>There is NO need for a visa to enter Taiwan.</StyledList>   
          </ul>
      </StyledText>
      <br/>
      <StyledH3>Payment</StyledH3>
      <StyledText>
          After you sign up for the camp, you will get a confirmation-mail back saying that you are a member of the camp.
          Then you confirm your membership by sending 7000 NOK for the flight ticket. If you are buying the ticket for yourself, you confirm by sending a deposit of 2000 NOK.
          <br/><StyledATagLink onClick={() => props.history.push("/stay/Taiwan/travels")}>Read more about the travel</StyledATagLink>
          <br/>
          <br/>
          Payment of the camp it self will be done after you get the member confirmation-email. 
          In this email you will also get all the information you need about how to make the payment.
          The payment should happen before 01.06.2020. If the payment is not done before the payment-deadline,
          the participant is not longer considered a member of the camp.
          <br/>
         <br/>
        <br/>
      </StyledText>
      </StyledTextBoxDiv>
  );
}

