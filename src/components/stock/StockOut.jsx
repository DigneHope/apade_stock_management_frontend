import React, { useState } from "react";
import { removeStock } from "../../api/productApi"; 
const StockOut = () => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleStockOut = async (e) => {
    e.preventDefault();
    try {
      const response = await removeStock({ product, quantity });
      if (response.success) {
        alert("Stock removed successfully!");
      } else {
        alert("Failed to remove stock.");
      }
    } catch (error) {
      console.error("Error removing stock:", error);
      alert("An error occurred. Please try again.");
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
          required
        />
        <label>Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <button type="submit">Remove Stock</button>
      </form>
    </div>
  );
};

export default StockOut;
