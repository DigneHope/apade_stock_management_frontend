import React, { useState } from "react";
import { addStock } from "../../api/productApi";

const StockIn = () => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleStockIn = async (e) => {
    e.preventDefault();
    try {
      const response = await addStock({ product, quantity, price });
      if (response.success) {
        alert("Stock added successfully!");
      } else {
        alert("Failed to add stock.");
      }
    } catch (error) {
      console.error("Error adding stock:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="stock-in-container">
      <h2>Add Stock</h2>
      <form onSubmit={handleStockIn}>
        <label>Product Name</label>
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        />
        <label>Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Stock</button>
      </form>
    </div>
  );
};

export default StockIn;
