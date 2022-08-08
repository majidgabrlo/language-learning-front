import { Dispatch } from "redux";
import { setLanguage } from "./languageSlice";

export const setAppLanguage = (shortName: string) => (dispatch: Dispatch) => {
  dispatch(setLanguage({ selectedLanguage: shortName }));
};
