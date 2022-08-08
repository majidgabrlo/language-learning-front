import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type languageType = {
  selectedLanguage: string;
  flagUrl: string;
  fullName: string;
};
const initialState: languageType = {
  selectedLanguage: "",
  flagUrl: "",
  fullName: "",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<languageType>) => {
      state.selectedLanguage = action.payload.selectedLanguage;
      state.flagUrl = action.payload.flagUrl;
      state.fullName = action.payload.fullName;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
