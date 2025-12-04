import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/products/${id}`);
      setProduct(response.data);
      if (response.data.size && response.data.size.length > 0) {
        setSelectedSize(response.data.size[0]);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartItem = {
      ...product,
      selectedSize,
      quantity
    };
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
    navigate('/cart');
  };

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="product-detail">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back
        </button>
        <div className="product-detail-content">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-details">
            <h1>{product.name}</h1>
            <p className="brand">{product.brand}</p>
            <p className="price">${product.price}</p>
            <p className="description">{product.description}</p>
            
            <div className="details-section">
              <h3>Size</h3>
              <div className="size-options">
                {product.size.map((size) => (
                  <button
                    key={size}
                    className={`size-button ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="details-section">
              <h3>Color</h3>
              <p>{product.color}</p>
            </div>

            <div className="details-section">
              <h3>Category</h3>
              <p className="category">{product.category}</p>
            </div>

            <div className="details-section">
              <h3>Stock</h3>
              <p>{product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}</p>
            </div>

            <div className="quantity-section">
              <label>Quantity:</label>
              <input
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              />
            </div>

            <button
              onClick={addToCart}
              disabled={product.stock === 0}
              className="add-to-cart-button"
            >
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

