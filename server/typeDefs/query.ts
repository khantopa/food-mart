import { gql } from 'apollo-server-micro';

export const Query = gql`
  type Query {
    # Customer
    customers: [Customer]

    # Restaurant
    restaurants: [Restaurant]
  }

  type Mutation {
    # Customer
    createCustomer(params: CustomerInput): Customer

    # Restaurant
    addRestaurant(params: RestaurantInput): Restaurant
  }
`;
