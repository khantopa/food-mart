import Restaurant from 'server/models/restaurant';

const restaurantQueries = {
  restaurants: async () => {
    try {
      const restaurants = await Restaurant.find({});
      return restaurants;
    } catch (error) {
      console.log(error);
    }
  },
};

export default restaurantQueries;
