import mongoose, { Schema } from 'mongoose';

mongoose.Promise = global.Promise;

const CustomerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: 'customers',
  }
);

const Customer =
  mongoose.models.Customer || mongoose.model('Customer', CustomerSchema);

export default Customer;
