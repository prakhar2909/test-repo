const Product = require('./models/Product');
const { connectDB, closeConnection } = require('./config/database');
const { generateProducts } = require('./helpers/dataGenerator');
require('dotenv').config();

/**
 * Seed database with synthetic data
 * Usage: node seed.js [count]
 * Example: node seed.js 50 (generates 50 products)
 */
const seedDatabase = async () => {
  try {
    // Connect to database
    await connectDB();

    // Get count from command line argument or use default
    const count = parseInt(process.argv[2]) || 20;
    
    console.log(`Generating ${count} synthetic products...`);
    
    // Generate synthetic products
    const products = generateProducts(count);
    
    // Clear existing products (optional - comment out if you want to keep existing data)
    const deleteResult = await Product.deleteMany({});
    console.log(`Cleared ${deleteResult.deletedCount} existing products`);
    
    // Insert generated products
    const result = await Product.insertMany(products);
    
    console.log(`\n✅ Database seeded successfully!`);
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
    
    // Close connection
    await closeConnection();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    await closeConnection();
    process.exit(1);
  }
};

seedDatabase();

