import { gql } from "@apollo/client";
import { Dispatch } from "redux";
import { client } from "../../App";
import { setLanguage } from "./languageSlice";

const Languages = gql`
  query Language {
    languagesList {
      shortName
      flagUrl
      name
    }
  }
`;

export const setAppLanguage =
  (shortName: string | null) => async (dispatch: Dispatch) => {
    if (shortName === null) return;
    const { data } = await client.query({ query: Languages });
    const language = data?.languagesList.filter(
      (item: any) => item.shortName === shortName
    )[0];
    dispatch(
      setLanguage({
        selectedLanguage: shortName,
        fullName: language?.name || "",
        flagUrl: language?.flagUrl || "",
      })
    );
  };
