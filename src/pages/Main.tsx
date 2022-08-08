import { gql } from "@apollo/client";
import { useAppSelector } from "../store/hooks";
import AddLanguagePage from "./AddLanguagePage";

function Main() {
  console.log(useAppSelector((state) => state));

  return (
    <div>
      <AddLanguagePage />
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
