import mongoose from 'mongoose';

const mongoUri =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/software_integration';

try {
  await mongoose.connect(mongoUri);
  console.log('MongoDB connected');
} catch (error) {
  console.error('MongoDB connection failed:', error.message);
  process.exitCode = 1;
}
