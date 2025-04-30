import React, { useEffect, useState } from 'react';
import { getStockOut, addStockOut, deleteStockOut } from '../api/stockOutApi';
import { getProducts } from '../api/productApi';
import TiltCard from '../components/TiltCard';

function StockOut() {
  const [stockOutList, setStockOutList] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    fetchStockOut();
    fetchProducts();
  }, []);

  const fetchStockOut = async () => {
    try {
      const res = await getStockOut();
      setStockOutList(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch stock out data');
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

  const handleAddStockOut = async (e) => {
    e.preventDefault();
    if (!selectedProduct || !quantity) {
      alert('Please select a product and enter quantity');
      return;
    }
    try {
      await addStockOut({ product_id: selectedProduct, quantity });
      alert('Stock out added successfully!');
      setSelectedProduct('');
      setQuantity('');
      fetchStockOut();
    } catch (err) {
      console.error(err);
      alert('Failed to add stock out');
    }
  };

  const handleDeleteStockOut = async (id) => {
    if (window.confirm('Are you sure you want to delete this stock out record?')) {
      try {
        await deleteStockOut(id);
        alert('Stock out record deleted!');
        fetchStockOut();
      } catch (err) {
        console.error(err);
        alert('Failed to delete stock out');
      }
    }
  };

  return ( 
    <AnimatedPage>
    <div style={{ padding: '20px' }}>
      <h2>Stock Out</h2>

      {/* Form to add stock out */}
      <form onSubmit={handleAddStockOut} style={{ marginBottom: '20px' }}>
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
        <button type="submit">Add Stock Out</button>
      </form>

      {/* Table of stock out */}
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
          {stockOutList.length > 0 ? stockOutList.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.product_id}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => handleDeleteStockOut(item.id)}>Delete</button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="4">No stock out records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
     </AnimatedPage>
  );
}

export default StockOut;
