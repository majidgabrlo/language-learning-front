import { gql } from "@apollo/client";
import CardsList from "../components/CardsList";
import Header from "../components/Header";
import { useAppSelector } from "../store/hooks";
import AddLanguagePage from "./AddLanguagePage";

function Main() {
  const selectedLanguage = useAppSelector(
    (state) => state.language.selectedLanguage
  );

  if (!selectedLanguage && !localStorage.getItem("selectedLearningLang")) {
    return (
      <div>
        <AddLanguagePage />
      </div>
    );
  }

  return (
    <div>
      <CardsList />
    </div>
  );
}

gql`
  query GetLanguages {
    languageList {
      id
      name
      shortName
    }
  }
`;

export default Main;
