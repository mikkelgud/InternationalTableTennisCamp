import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import styled from 'styled-components';


export const norwegianLanguage = {
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
   return (
      <>

         <ChangeLanguageLinkEmoji onClick={() => {
            setStoredLanguage(norwegianLanguage)
            onItemSelected(norwegianLanguage);
            alert("Translation is yet under development, if there's something that's not clear contact us on contactus@ittcamp.com");
         }}>{norwegianLanguage.selectedLanguageIcon}</ChangeLanguageLinkEmoji>

         <ChangeLanguageLinkEmoji onClick={() => {
            onItemSelected(swedishLanguage);
            setStoredLanguage(swedishLanguage);
            alert("Translation is yet under development, if there's something that's not clear contact us on contactus@ittcamp.com");
         }}>{swedishLanguage.selectedLanguageIcon}</ChangeLanguageLinkEmoji>

         <ChangeLanguageLinkEmoji onClick={() => {
            setStoredLanguage(englishLanguage);
            onItemSelected(englishLanguage);
            alert("Translation is yet under development, if there's something that's not clear contact us on contactus@ittcamp.com");
         }}>{englishLanguage.selectedLanguageIcon}</ChangeLanguageLinkEmoji>

      </>
   )
}
export default Language;


