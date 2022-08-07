import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthSliceType = {
  email: string;
  name: string;
};
const initialState: AuthSliceType = {
  email: "",
  name: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthSliceType>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
