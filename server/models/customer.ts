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
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    Address: [
      {
        name: {
          type: String,
          required: true,
        },
        street: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          default: 'Kadayanallur',
        },
        state: {
          type: String,
          default: 'Tamilnadu',
        },
        country: {
          type: String,
          default: 'India',
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
    },
  },
  {
    collection: 'customers',
  }
);

const Customer =
  mongoose.models.Customer || mongoose.model('Customer', CustomerSchema);

export default Customer;
