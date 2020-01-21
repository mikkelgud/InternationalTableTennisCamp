import React from "react";
import { StyledText } from "../../../styleguides/StyledText";
import { ScrollTop } from "../../../utils/ScrollToTopp";
import { StyledTextSectionHeader } from "../../../styleguides/StyledSectionHeader";
import StyledTextBoxDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledH3 } from "../../../styleguides/Styledh3";
import { StyledATagLink } from "../../../styleguides/StyledATagLink";
import { StyledSTextSectionHeader } from "../../../styleguides/StyledSemiTextSectionHeader";
import { StyledList } from "../../../styleguides/StyledList";
import { StyledListUnit } from "../../../styleguides/StyledListUnit";
import { InfoBox } from "../../../styleguides/StyledInfoBox";


export default function Expenses(props) {
  ScrollTop();


  return (
      <StyledTextBoxDiv>
      <StyledTextSectionHeader style={{textAlign: "center"}}>Camp Norway Expenses</StyledTextSectionHeader>
      <InfoBox>
          <StyledH3>Camp price:</StyledH3>
          <StyledText>In NOK: 2 400 Kr </StyledText>
          <StyledText>In Euro: 240 €</StyledText>
          </InfoBox>
          <InfoBox>
      <StyledH3>Includes: </StyledH3>
      <StyledText>
      <StyledList style={{listStyle: "ul" }}>
    <StyledListUnit> 4 days camp with high quality trainings in Harestua.</StyledListUnit>
    <StyledListUnit> High quality trainings every day of the camp. 
      <StyledATagLink onClick={() => { props.history.push("/stay/Norway/schedule"); }}>(Look at schedule)</StyledATagLink></StyledListUnit>
    <StyledListUnit>Lectures and team-building every evening with the coaches, including European champion Li Fen.</StyledListUnit>
    <StyledListUnit>4 nights stay in the hall with night guards awake throughout the whole night. </StyledListUnit>
       (Notice: Mattress, duvet/sleepingbag, sheets and pillow are the participants own responsibility to bring)
    <StyledListUnit>3 meals every day.</StyledListUnit>
         (Notice: If you have any allergies please tell us before the camp).
          <StyledListUnit>Information from coaches about what you have to work with in the future.</StyledListUnit>
          <StyledListUnit>Camp T-shirt.</StyledListUnit>
  </StyledList>
      </StyledText>
      </InfoBox>
     
     
      <StyledSTextSectionHeader>Payment</StyledSTextSectionHeader>
      <StyledText>
          After you sign up for the camp, you will get a confirmation-mail with all the information about the payment. 
</StyledText>
      </StyledTextBoxDiv>
  );
}

