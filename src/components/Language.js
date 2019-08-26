import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import styled from 'styled-components';


export const norwegianLanguage =  {
   selectedLanguageIcon: `🇳🇴`,
   key: "no",
   name: "Norwegian"
};

export const englishLanguage = {
   selectedLanguageIcon: `🇬🇧`,
   key: "en",
   name: "English"
};
export const swedishLanguage = {
   selectedLanguageIcon: `🇸🇪`,
   key: "se",
   name: "Swedish"
};

const ChangeLanguageLinkEmoji = styled.p`
  transition: all 0.1s ease-in-out;
  font-size: 2.6rem;
  margin-right: 3rem;
  padding: 0;
  cursor: pointer;
  &:hover {
  border-bottom: 1px solid #453886;

  }
  @media(max-width: 500px){
     margin-right: 0;
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


