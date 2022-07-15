import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation ($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      access_token
    }
  }
`;
