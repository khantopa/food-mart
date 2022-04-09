import Restaurant from '../../models/restaurant';

const restaurantQueries = {
  restaurants: async () => {
    try {
      console.log(Restaurant, 'Restaurant');
      const restaurants = await Restaurant.find({});
      console.log(restaurants);
      return restaurants;
    } catch (err) {
      console.log(err);
    }
  },
};

export default restaurantQueries;
