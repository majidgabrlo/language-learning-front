import { gql } from "@apollo/client";
import CardsList from "../components/CardsList";
import { useAppSelector } from "../store/hooks";
import AddLanguagePage from "./AddLanguagePage";

function Main() {
  const selectedLanguage = useAppSelector(
    (state) => state.language.selectedLanguage
  );

  if (!selectedLanguage) {
    return (
      <div>
        <AddLanguagePage />
      </div>
    );
  }

  return <CardsList />;
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
