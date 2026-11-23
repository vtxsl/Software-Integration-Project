import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true,
      default: ''
    }
  },
  { timestamps: true }
);

export const Item = mongoose.model('Item', itemSchema);
