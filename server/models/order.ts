import mongoose, { Schema } from 'mongoose';

import Customer from '@models/customer';
import Restaurant from '@models/restaurant';

mongoose.Promise = global.Promise;

const OrderSchema = new Schema(
  {
    customerID: {
      type: Customer,
      required: true,
    },
    restaurant: {
      type: Restaurant,
      required: true,
    },
    orderedDate: {
      type: Date,
      default: Date.now(),
    },
    preparedDate: {
      type: Date,
      default: Date.now(),
    },
    takenOverDate: {
      type: Date,
      default: Date.now(),
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      required: true,
    },
    note: {
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
    collection: 'orders',
  }
);

const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

export default Order;
