import mongoose, { Schema } from 'mongoose';

mongoose.Promise = global.Promise;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.models.Restaurants ||
  mongoose.model('Restaurants', RestaurantSchema);
