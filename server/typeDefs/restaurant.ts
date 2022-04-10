import { gql } from 'apollo-server-micro';

export const Restaurant = gql`
  type Restaurant {
    id: ID
    name: String
    shortDescription: String
    description: String
    image: String
  }

  input RestaurantInput {
    name: String
    shortDescription: String
    description: String
    image: String
  }
`;
