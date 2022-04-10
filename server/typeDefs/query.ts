import { gql } from 'apollo-server-micro';

export const Query = gql`
  type Query {
    restaurants: [Restaurant]
  }

  type Mutation {
    addRestaurant(params: RestaurantInput): Restaurant
  }
`;
