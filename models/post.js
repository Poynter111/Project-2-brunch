const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  date: Date,
  photo: String,
  rating: {type: Number, min: 1, max: 5, default: 3},
  service: {type: Number, min: 1, max: 5, default: 3},
  price: {type: Number, min: 1, max: 5, default: 3},
  food: {type: Number, min: 1, max: 5, default: 3},
  user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Post', postSchema);
