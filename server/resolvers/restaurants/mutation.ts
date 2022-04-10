import Restaurant from 'server/models/restaurant';

const restaurantMutations = {
  addRestaurant: async (_parent: any, { params }: any) => {
    try {
      const restaurant = await Restaurant.create(params);
      return restaurant;
    } catch (error) {
      console.log(error);
    }
  },
};

export default restaurantMutations;
