import React, { useState } from "react";
import { useStock } from "../../context/StockContext";
import './StockOut.css';

const StockOut = () => {
  const { addStockOut } = useStock();
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleStockOut = (e) => {
    e.preventDefault();
    if (product.trim() && quantity > 0) {
      const newEntry = {
        product: product.trim(),
        quantity: parseInt(quantity),
        date: new Date().toISOString().split('T')[0],
      };
      addStockOut(newEntry);
      alert("Stock removed successfully!");
      setProduct("");
      setQuantity("");
    } else {
      alert("Please enter a valid product name and a positive quantity.");
    }
  };

  return (
    <div className="stock-out-container">
      <h2>Remove Stock</h2>
      <form onSubmit={handleStockOut}>
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
        <button type="submit">Remove Stock</button>
      </form>
    </div>
  );
};

export default StockOut;