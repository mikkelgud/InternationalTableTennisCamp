import React from 'react';
import { withRouter } from "react-router-dom";
import { StyledDiv } from '../styleguides/StyledNavDiv';

import NavigationLinkEmoji from './NavigationLinkEmoji';


const norwegianFlag = "🇳🇴";
const englishFlag = "🇬🇧";

const Language = props => {
  return( 
      <>
    <NavigationLinkEmoji emoji={norwegianFlag} />
   <NavigationLinkEmoji emoji={englishFlag}/>
   <NavigationLinkEmoji emoji={norwegianFlag} />
   <NavigationLinkEmoji emoji={englishFlag}/>
      </>
   )}
export default withRouter(Language);


