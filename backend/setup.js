const Product = require('./models/Product');
const { connectDB, closeConnection } = require('./config/database');
const { generateProducts } = require('./helpers/dataGenerator');
require('dotenv').config();

/**
 * Setup script that checks if database needs seeding
 * Seeds database if it's empty or if forced
 */
const setupDatabase = async (forceSeed = false, seedCount = 30) => {
  try {
    console.log('🔍 Checking database setup...');
    
    // Connect to database
    await connectDB();

    // Check if products exist
    const existingCount = await Product.countDocuments();
    
    if (existingCount === 0 || forceSeed) {
      if (forceSeed && existingCount > 0) {
        console.log(`⚠️  Database already has ${existingCount} products. Force seeding...`);
        await Product.deleteMany({});
      } else {
        console.log('📭 Database is empty. Seeding with synthetic data...');
      }
      
      console.log(`🌱 Generating ${seedCount} synthetic products...`);
      
      // Generate synthetic products
      const products = generateProducts(seedCount);
      
      // Insert generated products
      const result = await Product.insertMany(products);
      
      console.log(`✅ Database seeded successfully!`);
      console.log(`📦 Inserted ${result.length} products`);
      
      // Show summary by category
      const categoryCounts = {};
      result.forEach(product => {
        categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
      });
      
      console.log('\n📊 Products by category:');
      Object.entries(categoryCounts).forEach(([category, count]) => {
        console.log(`   ${category}: ${count}`);
      });
    } else {
      console.log(`✅ Database already has ${productCount} products. Skipping seed.`);
    }
    
    // Don't close connection - we want to keep it open for the server
    return true;
  } catch (error) {
    console.error('❌ Error setting up database:', error.message);
    // Don't exit - let the server try to start anyway
    return false;
  }
};

// If run directly, execute setup
if (require.main === module) {
  const forceSeed = process.argv.includes('--force');
  const count = parseInt(process.argv.find(arg => !isNaN(parseInt(arg)))) || 30;
  
  setupDatabase(forceSeed, count)
    .then(() => {
      closeConnection();
      process.exit(0);
    })
    .catch((error) => {
      console.error('Setup failed:', error);
      closeConnection();
      process.exit(1);
    });
}

module.exports = { setupDatabase };

