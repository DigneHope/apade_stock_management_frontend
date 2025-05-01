import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from '../api/productApi';
import './ManageProducts.css';
import { toast } from 'react-toastify';
import TiltCard from '../components/TiltCard';

function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/product.php');
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddProduct = async () => {
    if (!productName.trim()) {
      toast.error('Product name cannot be empty!');
      return;
    }
    try {
      const res = await axios.post('/product.php', { product_name: productName });
      if (res.data.success) {
        toast.success('Product added!');
        setProductName('');
        fetchProducts();
      } else {
        toast.error('Failed to add product!');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error adding product!');
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const res = await axios.delete(`/product.php?id=${id}`);
      if (res.data.success) {
        toast.success('Product deleted!');
        fetchProducts();
      } else {
        toast.error('Failed to delete product!');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error deleting product!');
    }
  };

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Manage Products</h2>
      <div className="form-section">
        <input
          type="text"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.product_id}>
                <td>{product.product_id}</td>
                <td>{product.product_name}</td>
                <td>
                  <button onClick={() => handleDeleteProduct(product.product_id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No products found!</td>
            </tr>
          )}
        </tbody>
      </table>
    </motion.div>
  );
}

export default ManageProducts;
