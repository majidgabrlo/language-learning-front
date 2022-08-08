import { gql } from "@apollo/client";
import { client } from "../App";

type AuthenticationType = {
  email: string;
  name: string;
};

const userData = gql`
  query {
    me {
      email
      name
    }
  }
`;

const authChecker = async (): Promise<AuthenticationType | null> => {
  const { data } = await client.query({ query: userData });
  return data.me;
};

export default authChecker;
