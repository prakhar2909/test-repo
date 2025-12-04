const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = [
  {
    name: 'Classic White Sneakers',
    brand: 'Nike',
    description: 'Comfortable and stylish white sneakers perfect for everyday wear.',
    price: 89.99,
    size: ['7', '8', '9', '10', '11', '12'],
    color: 'White',
    category: 'sneakers',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    stock: 50,
    rating: 4.5,
    reviews: 120
  },
  {
    name: 'Running Pro',
    brand: 'Adidas',
    description: 'High-performance running shoes with advanced cushioning technology.',
    price: 129.99,
    size: ['7', '8', '9', '10', '11'],
    color: 'Black',
    category: 'running',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    stock: 30,
    rating: 4.7,
    reviews: 85
  },
  {
    name: 'Casual Comfort',
    brand: 'Puma',
    description: 'Relaxed fit casual shoes for maximum comfort.',
    price: 69.99,
    size: ['8', '9', '10', '11', '12'],
    color: 'Gray',
    category: 'casual',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    stock: 40,
    rating: 4.3,
    reviews: 95
  },
  {
    name: 'Business Formal',
    brand: 'Clarks',
    description: 'Elegant formal shoes for professional settings.',
    price: 149.99,
    size: ['8', '9', '10', '11'],
    color: 'Brown',
    category: 'formal',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    stock: 25,
    rating: 4.6,
    reviews: 60
  },
  {
    name: 'Sports Elite',
    brand: 'Nike',
    description: 'Professional sports shoes designed for athletes.',
    price: 159.99,
    size: ['7', '8', '9', '10', '11', '12'],
    color: 'Red',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    stock: 35,
    rating: 4.8,
    reviews: 150
  },
  {
    name: 'Winter Boots',
    brand: 'Timberland',
    description: 'Durable winter boots with waterproof technology.',
    price: 179.99,
    size: ['8', '9', '10', '11', '12'],
    color: 'Brown',
    category: 'boots',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    stock: 20,
    rating: 4.4,
    reviews: 75
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shoesdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();

