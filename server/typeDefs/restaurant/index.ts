import { gql } from 'apollo-server-micro';

export const Restaurant = gql`
  type Restaurant {
    id: ID
    name: String
  }
`;
