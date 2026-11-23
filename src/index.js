import mongoose from 'mongoose';
import { loadEnvironment } from './config/loadEnvironment.js';

const environment = loadEnvironment();

try {
  await mongoose.connect(environment.mongoUri);
  console.log(`MongoDB connected in ${environment.name}`);
} catch (error) {
  console.error('MongoDB connection failed:', error.message);
  process.exitCode = 1;
}
