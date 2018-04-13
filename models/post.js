const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  date: Date,
  photos: [{type: mongoose.Schema.ObjectId, ref: 'Photo'}],
  rating: {type: Number, min: 1, max: 100, default: 50}
});

module.exports = mongoose.model('Post', postSchema);
