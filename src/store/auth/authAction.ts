import { Dispatch } from "redux";
import { gql } from "@apollo/client";
import { useCurrentUserQuery } from "./__generated__/authAction";
import { setAuth } from "./authSlice";

export const getUserData = () => (dispatch: Dispatch) => {
  const { data } = useCurrentUserQuery();
  if (data?.me) {
    dispatch(setAuth(data.me));
  }
};

gql`
  query CurrentUser {
    me {
      email
      name
    }
  }
`;
