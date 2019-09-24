import React from "react";
import { StyledText } from "../../../styleguides/StyledText";
import { ScrollTop } from "../../../utils/ScrollToTopp";
import { StyledTextSectionHeader } from "../../../styleguides/StyledSectionHeader";
import StyledTextBoxDiv from '../../../styleguides/StyledTextBoxDiv';
import { StyledH3 } from "../../../styleguides/Styledh3";
import { StyledATagLink } from "../../../styleguides/StyledATagLink";


export default function Expences(props) {
  ScrollTop();
  return (
      <StyledTextBoxDiv>
      <StyledTextSectionHeader>Camp Norway Expenses</StyledTextSectionHeader>
      <StyledH3>Prices</StyledH3>
      <StyledText>
          <ul>
          <li>Whole camp (5 days): 2300 NOK (Or 230 euro). </li>
          <li>Drop in days: 400 NOK each day (or 40 euro each day). (Only if we got space. Contact us if you want to do drop in practices.
          Drop in is made for people who can't participate the whole camp).
 )</li>
          </ul>
      </StyledText>
      <br/>
      <StyledH3>This includes</StyledH3>
      <StyledText>
      <ul>
    <li> 5 days camp with high quality traning.</li>
    <li> 2 table tennis practices and 1 physical practice every day, except arrival and departure day. <StyledATagLink onClick={() => { props.history.push("/stay/Norway/schedule"); }}>(Look at schedule)</StyledATagLink></li>
    <li>Lectures every evening with our coaches, including European champion Li Fen.</li>
    <li>4 nights with sleeping in the hall with all essentials, with night guards awake at all time. <br/>
          (Notice: Madrass, duvet/sleepingbag, sheets and pillow you have to bring yourself)</li>
    <li>3 meals a day. <br/>
          (Notice: If you have any alergies please tell us before the camp).</li>
      <li>Opportunity to get pickup from arrival location and followed to the camp. <br/>
          (Notice: travel expences will not be covered) </li>
          <li>Information from coaches about what you have to work with in the future.</li>
          <li>Camp T-shirt.</li>
      </ul>
      </StyledText>
      <br/>
      <StyledH3>Payment</StyledH3>
      <StyledText>
          After you sign up for the camp, you will get a confirmation-mail back saying that you are a member of the camp.
          Then, if there is over 32 participants, we will choose out 32 people according to our impression from the sign up forms.
          And if unfortunately there is under 16 participants that sign up for the camp, the camp will be canceled.
          This will be decided on Monday 23.09 19:00, one week before the camp begins. 
          And everyone will get an email about the decition. <br/>
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

