import { Dispatch } from "redux";
import { setAuth } from "./authSlice";

export const getUserData = ({email,name}:{email:string,name:string}) => (dispatch: Dispatch) => {
  dispatch(setAuth({email,name}))
};
