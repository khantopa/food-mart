import { customerQueries, customerMutation } from './customer';
import { restaurantQueries, restaurantMutations } from './restaurants';

const resolvers = {
  Query: {
    ...restaurantQueries,
  },
  Mutation: {
    ...customerMutation,
    ...restaurantMutations,
  },
};

export default resolvers;
