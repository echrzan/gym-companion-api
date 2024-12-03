import * as mongoose from 'mongoose';
import * as process from 'node:process';

async function connectDatabase() {
  const uri = process.env.MONGO_URI as string;

  if (!uri) {
    throw new Error('MongoDB URI is not defined in the .env file');
  }

  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

export default connectDatabase;
