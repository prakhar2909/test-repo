# Data Generator Helper

This helper module generates synthetic shoe product data for testing and seeding the database.

## Usage

### Generate Random Products

```javascript
const { generateProducts } = require('./helpers/dataGenerator');

// Generate 10 random products
const products = generateProducts(10);

// Generate 50 products
const products = generateProducts(50);
```

### Generate Single Product

```javascript
const { generateProduct } = require('./helpers/dataGenerator');

const product = generateProduct();
```

### Generate Products by Category

```javascript
const { generateProductsByCategory } = require('./helpers/dataGenerator');

// Generate 5 sneakers
const sneakers = generateProductsByCategory('sneakers', 5);

// Generate 10 running shoes
const running = generateProductsByCategory('running', 10);
```

### Generate Products by Brand

```javascript
const { generateProductsByBrand } = require('./helpers/dataGenerator');

// Generate 5 Nike products
const nikeProducts = generateProductsByBrand('Nike', 5);
```

## Available Constants

- `brands`: Array of available brands
- `categories`: Array of available categories
- `colors`: Array of available colors
- `sizes`: Array of available sizes

## Features

- Realistic product names based on category
- Price ranges vary by category
- Random but realistic ratings and reviews
- Multiple size options per product
- Diverse color options
- Stock levels between 10-100

