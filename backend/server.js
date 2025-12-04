const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./config/database');
const { setupDatabase } = require('./setup');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize database and seed if needed
const initializeApp = async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    
    // Setup database (seed if empty)
    await setupDatabase(false, 30);
    
    // Routes
    app.use('/api/products', require('./routes/productRoutes'));

    // Health check
    app.get('/api/health', (req, res) => {
      res.json({ status: 'OK', message: 'Server is running' });
    });

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
      console.log(`📡 API available at http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error('Failed to initialize app:', error);
    process.exit(1);
  }
};

// Start the application
initializeApp();
