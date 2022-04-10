import mongoose, { Schema } from 'mongoose';
import Order from 'server/models/order';

mongoose.Promise = global.Promise;

const OrderItemSchema = new Schema(
  {
    order: {
      type: Order,
      required: true,
    },
    menuItem: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
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
    collection: 'orderItems',
  }
);

const OrderItem =
  mongoose.models.OrderItem || mongoose.model('OrderItem', OrderItemSchema);

export default OrderItem;
