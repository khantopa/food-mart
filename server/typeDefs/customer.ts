import { gql } from 'apollo-server-micro';

export const Customer = gql`
  type Customer {
    _id: String!
    firstName: String!
    lastName: String!
    phoneNumber: String!
    password: String
    isVerified: Boolean
  }

  input CustomerInput {
    firstName: String!
    lastName: String!
    password: String!
    phoneNumber: String!
  }
`;
