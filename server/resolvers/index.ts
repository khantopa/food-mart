import {
  restaurantQueries,
  restaurantMutations,
} from 'server/resolvers/restaurants';

const resolvers = {
  Query: {
    ...restaurantQueries,
  },
  Mutation: {
    ...restaurantMutations,
  },
};

export default resolvers;
