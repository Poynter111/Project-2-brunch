const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  date: Date,
  photos: [{type: mongoose.Schema.ObjectId, ref: 'Photo'}],
  rating: {type: Number, min: 1, max: 5, default: 3}
});

module.exports = mongoose.model('Post', postSchema);
