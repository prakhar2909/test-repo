/**
 * Synthetic Data Generator for Shoe Products
 * Generates realistic shoe product data for testing and seeding
 */

const brands = ['Nike', 'Adidas', 'Puma', 'Reebok', 'New Balance', 'Converse', 'Vans', 'Under Armour', 'Skechers', 'Clarks', 'Timberland', 'Dr. Martens'];
const categories = ['sneakers', 'running', 'casual', 'formal', 'sports', 'boots'];
const colors = ['Black', 'White', 'Gray', 'Navy', 'Red', 'Blue', 'Brown', 'Beige', 'Green', 'Pink', 'Orange', 'Yellow'];
const sizes = ['6', '7', '8', '9', '10', '11', '12', '13'];

// Shoe name templates by category
const nameTemplates = {
  sneakers: ['Classic', 'Premium', 'Elite', 'Pro', 'Sport', 'Street', 'Urban', 'Retro', 'Modern', 'Vintage'],
  running: ['Runner', 'Speed', 'Marathon', 'Track', 'Endurance', 'Sprint', 'Race', 'Performance', 'Lightweight', 'Cushion'],
  casual: ['Comfort', 'Relaxed', 'Everyday', 'Weekend', 'Leisure', 'Easy', 'Soft', 'Flex', 'Walk', 'Chill'],
  formal: ['Business', 'Executive', 'Professional', 'Oxford', 'Derby', 'Leather', 'Classic', 'Elegant', 'Refined', 'Sophisticated'],
  sports: ['Athletic', 'Training', 'Gym', 'Crossfit', 'Court', 'Field', 'Competition', 'Power', 'Agility', 'Strength'],
  boots: ['Winter', 'Hiking', 'Combat', 'Work', 'Rugged', 'Outdoor', 'Adventure', 'Trail', 'Mountain', 'Explorer']
};

// Description templates
const descriptionTemplates = [
  'Comfortable and stylish design perfect for everyday wear.',
  'High-quality materials ensure durability and long-lasting comfort.',
  'Modern design with advanced technology for optimal performance.',
  'Classic style meets contemporary comfort in this versatile shoe.',
  'Engineered for maximum support and cushioning during activities.',
  'Premium construction with attention to detail and craftsmanship.',
  'Lightweight design that doesn\'t compromise on durability.',
  'Breathable materials keep your feet cool and comfortable.',
  'Perfect balance of style and functionality for any occasion.',
  'Innovative design features for enhanced comfort and performance.'
];

// Image URLs (using placeholder service, can be replaced with actual images)
const getImageUrl = (brand, color, category) => {
  const imageId = Math.floor(Math.random() * 1000);
  return `https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&sig=${imageId}`;
};

/**
 * Generate a random number between min and max (inclusive)
 */
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Generate a random float between min and max
 */
const randomFloat = (min, max, decimals = 2) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
};

/**
 * Get random element from array
 */
const randomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Get random elements from array
 */
const randomElements = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

/**
 * Generate a single product
 */
const generateProduct = () => {
  const brand = randomElement(brands);
  const category = randomElement(categories);
  const color = randomElement(colors);
  const namePrefix = randomElement(nameTemplates[category]);
  
  // Generate product name
  const name = `${namePrefix} ${category.charAt(0).toUpperCase() + category.slice(1)} ${brand}`;
  
  // Generate price based on category
  const priceRanges = {
    sneakers: [49.99, 149.99],
    running: [79.99, 199.99],
    casual: [39.99, 129.99],
    formal: [99.99, 299.99],
    sports: [89.99, 249.99],
    boots: [119.99, 349.99]
  };
  
  const [minPrice, maxPrice] = priceRanges[category];
  const price = randomFloat(minPrice, maxPrice);
  
  // Generate sizes (random selection of 4-7 sizes)
  const availableSizes = randomElements(sizes, randomInt(4, 7));
  
  // Generate stock (higher for popular categories)
  const stock = randomInt(10, 100);
  
  // Generate rating (between 3.5 and 5.0)
  const rating = randomFloat(3.5, 5.0, 1);
  
  // Generate reviews count (correlated with rating)
  const reviews = Math.floor(rating * randomInt(15, 40));
  
  // Generate description
  const description = `${randomElement(descriptionTemplates)} ${randomElement(descriptionTemplates).toLowerCase()}`;
  
  return {
    name,
    brand,
    description,
    price,
    size: availableSizes,
    color,
    category,
    image: getImageUrl(brand, color, category),
    stock,
    rating,
    reviews
  };
};

/**
 * Generate multiple products
 * @param {number} count - Number of products to generate
 * @returns {Array} Array of product objects
 */
const generateProducts = (count = 10) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    products.push(generateProduct());
  }
  return products;
};

/**
 * Generate products by category
 * @param {string} category - Category name
 * @param {number} count - Number of products to generate
 * @returns {Array} Array of product objects
 */
const generateProductsByCategory = (category, count = 5) => {
  if (!categories.includes(category)) {
    throw new Error(`Invalid category: ${category}. Must be one of: ${categories.join(', ')}`);
  }
  
  const products = [];
  for (let i = 0; i < count; i++) {
    const product = generateProduct();
    product.category = category;
    products.push(product);
  }
  return products;
};

/**
 * Generate products by brand
 * @param {string} brand - Brand name
 * @param {number} count - Number of products to generate
 * @returns {Array} Array of product objects
 */
const generateProductsByBrand = (brand, count = 5) => {
  if (!brands.includes(brand)) {
    throw new Error(`Invalid brand: ${brand}. Must be one of: ${brands.join(', ')}`);
  }
  
  const products = [];
  for (let i = 0; i < count; i++) {
    const product = generateProduct();
    product.brand = brand;
    products.push(product);
  }
  return products;
};

module.exports = {
  generateProduct,
  generateProducts,
  generateProductsByCategory,
  generateProductsByBrand,
  brands,
  categories,
  colors,
  sizes
};

