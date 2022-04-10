import mongoose, { Schema } from 'mongoose';

mongoose.Promise = global.Promise;

const RestaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
    },
  },

  {
    collection: 'restaurants',
  }
);

const Restaurant =
  mongoose.models.Restaurant || mongoose.model('Restaurant', RestaurantSchema);

export default Restaurant;
