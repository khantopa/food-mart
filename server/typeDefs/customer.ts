import { gql } from 'apollo-server-micro';

export const Customer = gql`
  query customer {
    firstName
    lastName
    email
    phoneNumber
    address {
      name
      street
      city
      state
      country
    }
  }
`;
