import React from "react";
import { StyledText } from "../../../styleguides/StyledText";
import { ScrollTop } from "../../../utils/ScrollToTopp";
import { StyledTextSectionHeader } from "../../../styleguides/StyledSectionHeader";
import StyledTextBoxDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledH3 } from "../../../styleguides/Styledh3";
import { StyledATagLink } from "../../../styleguides/StyledATagLink";
import { InfoBox } from "../../../styleguides/StyledInfoBox";
import { StyledListUnit } from "../../../styleguides/StyledListUnit";
import { StyledList } from "../../../styleguides/StyledList";


export default function Expences(props) {
  ScrollTop();
  return (
      <StyledTextBoxDiv>
      <StyledTextSectionHeader style={{textAlign: "center"}}>Camp Taiwan Expenses</StyledTextSectionHeader>
      <StyledH3>Camp Prices:</StyledH3>
      <StyledText>
        <InfoBox>
        <StyledH3>Whole camp of 16 days for players:</StyledH3>
          <StyledList>
          <StyledListUnit>In NOK 12 750 KR.  </StyledListUnit>
          <StyledListUnit>In Euro: 1 275 €</StyledListUnit>
          </StyledList>
          </InfoBox>
          <InfoBox>
         <StyledH3> Whole camp of 16 days for traveling companions (Non practicing participants):</StyledH3>
          <StyledList>
          <StyledListUnit>In NOK:  10 750 KR.  </StyledListUnit>
          <StyledListUnit>In Euro: 1 075 € </StyledListUnit>
          </StyledList>
          </InfoBox>
      </StyledText>
     <InfoBox>
      <StyledH3>Includes</StyledH3>
      <StyledText>
      <StyledList>
    <StyledListUnit> 16 days camp with high quality trainings in Tao Yuan.</StyledListUnit>
    <StyledListUnit> 2 table tennis practices every day, except arrival and departure day. <StyledATagLink onClick={() => { props.history.push("/stay/Taiwan/schedule"); }}>(Look at schedule)</StyledATagLink></StyledListUnit>
    <StyledListUnit>Lectures with our coaches, including European champion Li Fen. <StyledATagLink onClick={() => { props.history.push("/leaders"); }}>(Look at our camp leaders and coaches)</StyledATagLink> </StyledListUnit>
    <StyledListUnit>15 days stay at a high standard hotel.  <StyledATagLink onClick={() => { props.history.push("/stay/Taiwan/facilities"); }}>(Look at facilities)</StyledATagLink> </StyledListUnit>
    <StyledListUnit>3 meals every day. (Read more about our meals in Taiwan <StyledATagLink onClick={() => { props.history.push("/stay/Taiwan/schedule"); }}>in the schedule page</StyledATagLink>) </StyledListUnit>
    <StyledListUnit>(Notice: If you have any alergies please tell us before the camp). </StyledListUnit>
    <StyledListUnit>Information from coaches about what you have to work with when you get home.</StyledListUnit>
    <StyledListUnit>Travel from the airport to the hotel.</StyledListUnit>
    <StyledListUnit>Free Massage.</StyledListUnit>
    <StyledListUnit>Camp T-shirt.</StyledListUnit>
      </StyledList>
      </StyledText>
      </InfoBox>
     
      <StyledH3>Payment</StyledH3>
      <StyledText>
        After you sign up and got a ticket, we will send you an invoice of the camp price.
        If we fix your ticket, the camp price will be based on how much the flight ticket differed from the 7000 NOK.
        <StyledATagLink onClick={() => props.history.push("/stay/Taiwan/travels")}> Read more about the travel by clicking here.</StyledATagLink>
      </StyledText>     
      </StyledTextBoxDiv>
  );
}

