import mongoose from 'mongoose';

const URI = process.env.MONGODB_URI;

if (!URI) {
  throw new Error('Define the MONGODB_URI environmental variable');
}

const connectDB = async () => {
  try {
    await mongoose.connect(URI);

    console.log('db success connect');
  } catch (err) {
    console.log('error connecting to database');
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
