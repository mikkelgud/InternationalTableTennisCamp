// Price / Payments

// - Close one to one follow up.
// - 
// -   

import React from "react";
import { StyledText } from "../styleguides/StyledText";
import { ScrollTop } from "../utils/ScrollToTopp";
import { StyledTextSectionHeader } from "../styleguides/StyledSectionHeader";
import StyledTextBoxDiv from '../styleguides/StyledTextBoxDiv';
import { StyledH3 } from "../styleguides/Styledh3";


export default function Expences() {
  ScrollTop();
  return (
      <StyledTextBoxDiv>
      <StyledTextSectionHeader>Camp Norway Expenses</StyledTextSectionHeader>
      <StyledH3>Prices</StyledH3>
      <StyledText>
          <ul>
          <li>Whole camp (5 days): 460 euro. Or 4600 Norwegian kronors</li>
          <li>Drop in days: 120 euro each day. Or 12OO Norwegian kronors</li>
          </ul>
      </StyledText>
      <br/>
      <StyledH3>This includes</StyledH3>
      <StyledText>
      <ul>
    <li> 5 days camp with high quality traning.</li>
    <li> 2 table tennis practices and 1 physical practice every day </li>
    <li>Lectures every evening with our coaches, including European champion Li Fen.</li>
    <li>5 nights with sleeping in the hall with all essentials, with night guards awake at all time. <br/>
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
          After you sign up for the camp, you will get a confirmation-mail back after a little while.
          Then, just wait for us to look at all the applications to select participants.
          So no worries, the sign up is not binding. <br/>
          Payment will be done after you get the confirmation. 
          In this mail you will also get all the information you need about how to pay.
          <br/>    <br/>
         The payment:
          <ul>
          <li>Is done by bank- transaction. (preferred)</li>
          <li>Or show up with an envelope with cash. </li>
          </ul>
        <br/>
          
          

      </StyledText>
      </StyledTextBoxDiv>
  );
}

