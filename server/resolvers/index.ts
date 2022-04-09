import { restaurantQueries } from 'server/resolvers/restaurants';

const resolvers = {
  Query: {
    ...restaurantQueries,
  },
};

export default resolvers;
