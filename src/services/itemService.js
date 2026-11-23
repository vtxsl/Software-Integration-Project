import { Item } from '../models/Item.js';

export const itemService = {
  create(data) {
    return Item.create(data);
  },

  getAll() {
    return Item.find();
  },

  getById(id) {
    return Item.findById(id);
  },

  update(id, data) {
    return Item.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    });
  },

  delete(id) {
    return Item.findByIdAndDelete(id);
  }
};
