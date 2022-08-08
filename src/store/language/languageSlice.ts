import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type languageType = {
  selectedLanguage: string;
};
const initialState: languageType = {
  selectedLanguage: "",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<languageType>) => {
      state.selectedLanguage = action.payload.selectedLanguage;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
