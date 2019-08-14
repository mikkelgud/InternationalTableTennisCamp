import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

import styled from 'styled-components';


export const norwegianLanguage =  {
   selectedLanguageIcon: `🇳🇴`,
   key: "NO",
   name: "Norwegian"
};

export const englishLanguage = {
   selectedLanguageIcon: `🇬🇧`,
   key: "GB",
   name: "English"
};
export const swedishLanguage = {
   selectedLanguageIcon: `🇸🇪`,
   key: "SE",
   name: "Swedish"
};

const ChangeLanguageLinkEmoji = styled.p`
  transition: all 0.1s ease-in-out;
  font-size: 2rem;
  
  padding: 0;
  cursor: pointer;

  &:hover {
    font-size: 2.8rem;
  }
`;

const Language = ({ onItemSelected }) => {
   // eslint-disable-next-line
  const [storedLanguage, setStoredLanguage] = useLocalStorage("Language", englishLanguage);
  

   return( 
      <>
   <ChangeLanguageLinkEmoji onClick={() => {
      setStoredLanguage(englishLanguage)
      onItemSelected(englishLanguage)
   }
}>{englishLanguage.selectedLanguageIcon}</ChangeLanguageLinkEmoji>
   <ChangeLanguageLinkEmoji onClick={() => {
      setStoredLanguage(norwegianLanguage)
      onItemSelected(norwegianLanguage)
   }
   }>{norwegianLanguage.selectedLanguageIcon}</ChangeLanguageLinkEmoji>
   <ChangeLanguageLinkEmoji onClick={() => {
      onItemSelected(swedishLanguage);
      setStoredLanguage(swedishLanguage);
   }}>{swedishLanguage.selectedLanguageIcon}</ChangeLanguageLinkEmoji> 
      </>
   )}
export default Language;


