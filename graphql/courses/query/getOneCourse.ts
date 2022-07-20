import { gql } from "@apollo/client";

export const GET_COURSE = gql`
  query ($id: String!) {
    course(id: $id) {
      title
      name
      # category
      details
      learn
      plans {
        price
        time
      }
      image
      trainer {
        image
        first_name
        last_name
      }
    }
  }
`;
