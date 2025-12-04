const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  size: {
    type: [String],
    required: true
  },
  color: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['sneakers', 'running', 'casual', 'formal', 'sports', 'boots']
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/400'
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviews: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);

