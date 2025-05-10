import React, { useState } from "react";
import { useStock } from "../../context/StockContext";
import './StockIn.css';

const StockIn = () => {
  const { addStockIn } = useStock();
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleStockIn = (e) => {
    e.preventDefault();
    if (product.trim() && quantity > 0) {
      const newEntry = {
        product: product.trim(),
        quantity: parseInt(quantity),
        date: new Date().toISOString().split('T')[0],
      };
      addStockIn(newEntry);
      alert("Stock added successfully!");
      setProduct("");
      setQuantity("");
    } else {
      alert("Please enter a valid product name and a positive quantity.");
    }
  };

  return (
    <div className="stock-in-page">
      <div className="stock-in-container">
        <h2>Add Stock</h2>
        <form onSubmit={handleStockIn}>
          <label>Product Name</label>
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="Enter product name"
            required
          />
          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
            min="1"
            required
          />
          <button type="submit">Add Stock</button>
        </form>
      </div>
    </div>
  );
};

export default StockIn;