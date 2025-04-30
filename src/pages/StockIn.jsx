import React, { useEffect, useState } from 'react';
import { getStockIn, addStockIn, deleteStockIn } from '../api/stockInApi';
import { getProducts } from '../api/productApi';
import TiltCard from '../components/TiltCard';

function StockIn() {
  const [stockInList, setStockInList] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    fetchStockIn();
    fetchProducts();
  }, []);

  const fetchStockIn = async () => {
    try {
      const res = await getStockIn();
      setStockInList(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch stock in data');
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch products');
    }
  };

  const handleAddStockIn = async (e) => {
    e.preventDefault();
    if (!selectedProduct || !quantity) {
      alert('Please select a product and enter quantity');
      return;
    }
    try {
      await addStockIn({ product_id: selectedProduct, quantity });
      alert('Stock added successfully!');
      setSelectedProduct('');
      setQuantity('');
      fetchStockIn();
    } catch (err) {
      console.error(err);
      alert('Failed to add stock');
    }
  };

  const handleDeleteStockIn = async (id) => {
    if (window.confirm('Are you sure you want to delete this stock entry?')) {
      try {
        await deleteStockIn(id);
        alert('Stock in record deleted!');
        fetchStockIn();
      } catch (err) {
        console.error(err);
        alert('Failed to delete stock');
      }
    }
  };

  return (
    <AnimatedPage>
    <div style={{ padding: '20px' }}>
      <h2>Stock In</h2>

      {/* Form to add stock in */}
      <form onSubmit={handleAddStockIn} style={{ marginBottom: '20px' }}>
        <select
          value={selectedProduct}
          onChange={e => setSelectedProduct(e.target.value)}
          style={{ marginRight: '10px' }}
        >
          <option value="">Select Product</option>
          {products.map(product => (
            <option key={product.product_id} value={product.product_id}>
              {product.product_name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button type="submit">Add Stock</button>
      </form>

      {/* Table of stock in */}
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stockInList.length > 0 ? stockInList.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.product_id}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => handleDeleteStockIn(item.id)}>Delete</button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="4">No stock in records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
     </AnimatedPage>
  );
}

export default StockIn;
