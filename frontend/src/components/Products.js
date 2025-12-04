import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    minPrice: '',
    maxPrice: ''
  });

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const params = new URLSearchParams();
      if (filters.category) params.append('category', filters.category);
      if (filters.brand) params.append('brand', filters.brand);
      if (filters.minPrice) params.append('minPrice', filters.minPrice);
      if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);

      const response = await axios.get(`http://localhost:5000/api/products?${params}`);
      setProducts(response.data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      if (error.code === 'ECONNREFUSED' || error.message.includes('Network Error')) {
        setError('Cannot connect to server. Make sure the backend is running on port 5000.');
      } else if (error.response) {
        setError(`Error: ${error.response.data.error || error.response.statusText}`);
      } else {
        setError('Failed to fetch products. Please try again later.');
      }
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="products-page">
      <div className="container">
        <h1>Our Products</h1>

        {error && (
          <div className="error-message">
            <p>{error}</p>
            {error.includes('Cannot connect to server') && (
              <div className="error-help">
                <p><strong>To fix this:</strong></p>
                <ol>
                  <li>Make sure MongoDB is running</li>
                  <li>Start the backend server: <code>cd backend && npm run dev</code></li>
                  <li>Seed the database: <code>cd backend && npm run seed</code></li>
                </ol>
              </div>
            )}
            <button onClick={fetchProducts} className="retry-button">Retry</button>
          </div>
        )}

        <div className="filters">
          <select name="category" value={filters.category} onChange={handleFilterChange}>
            <option value="">All Categories</option>
            <option value="sneakers">Sneakers</option>
            <option value="running">Running</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="sports">Sports</option>
            <option value="boots">Boots</option>
          </select>

          <input
            type="text"
            name="brand"
            placeholder="Filter by brand"
            value={filters.brand}
            onChange={handleFilterChange}
          />

          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleFilterChange}
          />

          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
        </div>

        <div className="products-grid">
          {!error && products.length === 0 ? (
            <div className="no-products">
              <p>No products found.</p>
              <p className="help-text">If you just started the app, you may need to seed the database:</p>
              <code>cd backend && npm run seed</code>
            </div>
          ) : (
            products.map((product) => (
              <div key={product._id} className="product-card">
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="brand">{product.brand}</p>
                  <p className="price">${product.price}</p>
                  <Link to={`/products/${product._id}`} className="view-button">
                    View Details
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;

